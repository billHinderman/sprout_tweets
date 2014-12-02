define([
  'jquery',
  'underscore',
  'backbone',
  '../../models/tweet/TweetModel.js',
  '../../collections/tweets/TweetsCollection.js',
  'text!templates/page/tweets/_list.html'
], function($, _, Backbone, TweetModel, TweetsCollection, tweetsListTemplate){
    var TweetsListView = Backbone.View.extend({
    render: function(){
      var data = {
        tweets: this.collection.models,
        _: _ 
      };
      var compiledTemplate = _.template( tweetsListTemplate, data );
      $('#tweet-list').html(compiledTemplate);
    }
  });

  return TweetsListView;
});
