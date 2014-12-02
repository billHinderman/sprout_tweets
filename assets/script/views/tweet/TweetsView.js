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
    render: function(){
      this.$el.html(tweetsTemplate);

      var tweetList = fetchTweets();

      var aTweets = [tweet0, tweet1];

      var tweetsCollection = new TweetsCollection(aTweets);
      var tweetsListView = new TweetsListView({collection: tweetsCollection});
      
      tweetsListView.render(); 
      alert('bunz');
    },

    fetchTweets: function() {
      var tweetUrl = 'https://gist.githubusercontent.com/arlodesign/7d80edb6e801e92c977a/raw/24605c9e5de897f7877b9ab72af13e5b5a2e25eb/tweets.json';
      var tweetJson = $.getJSON(tweetUrl,function(){
      })
      .done(function(result) {
        var tweets = result.tweets;
      })
      .fail(function() {
      })
      .always(function() {
      });
    }
  });

  return TweetsView;
});
