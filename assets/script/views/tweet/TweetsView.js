define([
  'jquery',
  'underscore',
  'backbone',
  '../../models/tweet/TweetModel.js',
  '../../collections/tweets/TweetsCollection.js',
  '../../views/tweet/TweetsListView.js',
  'text!templates/page/tweets/_single.html'
], function($, _, Backbone, TweetModel, TweetsCollection, TweetsListView, tweetsTemplate){

  var TweetsView = Backbone.View.extend({
    el: $("#content"),
    render: function() {
      this.$el.html(tweetsTemplate);

      var tweetsCollection = new TweetsCollection();
      tweetsCollection.fetch();
      alert('un');
      tweetsCollection.bind('reset', function () { 
        var tweetsListView = new TweetsListView({collection: tweetsCollection});
        tweetsListView.render();
      });
      
    },

  });

  return TweetsView;
});
