define([
  'jquery',
  'underscore',
  'backbone',
  '../../models/tweet/TweetModel.js',
  '../../collections/tweets/TweetsCollection.js',
  '../../views/tweet/TweetsListView.js',
  '../../views/component/SummaryView.js',
  'text!templates/page/tweets/_single.html'
], function($, _, Backbone, TweetModel, TweetsCollection, TweetsListView, SummaryView, tweetsTemplate){

  var TweetsView = Backbone.View.extend({
    el: $("#content"),

    render: function() {
      this.$el.html(tweetsTemplate);

      tweetsCollection = new TweetsCollection();
      tweetsCollection.fetch();
      tweetsCollection.bind('reset', function () { 
        var tweetsListView = new TweetsListView({collection: tweetsCollection});
        tweetsListView.render();

        var summaryView = new SummaryView({collection: tweetsCollection});
        summaryView.render();
      });

      tweetsCollection.bind('sort', function () { 
        var tweetsListView = new TweetsListView({collection: tweetsCollection});
        tweetsListView.render();
      });

      tweetsCollection.bind('change', function () { 
        var summaryView = new SummaryView({collection: tweetsCollection});
        summaryView.render();
      });
    },
  });

  return TweetsView;
});


