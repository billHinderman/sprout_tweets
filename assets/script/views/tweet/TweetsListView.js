define([
  'jquery',
  'underscore',
  'backbone',
  '../../models/tweet/TweetModel.js',
  '../../collections/tweets/TweetsCollection.js',
  'text!templates/page/tweets/_list.html'
], function($, _, Backbone, TweetModel, TweetsCollection, tweetsListTemplate){
    var TweetsListView = Backbone.View.extend({
    el: $("#content"),

    events: {
      'click #tweet-list .tweet-remove-link' : 'archive_tweet',
      'click #tweet-list .tweet-complete-toggle' : 'complete_tweet',
    },

    render: function(){
      var data = {
        tweets: this.collection.models,
        _: _ 
      };
      var compiledTemplate = _.template( tweetsListTemplate, data );
      $('#tweet-list').html(compiledTemplate);
      $("#tweet-list *[data-bg]").each( function() {
        $(this).css(
          {
            "background":"url('"+$(this).data("bg")+"'),url('./assets/images/default_avatar.png')",
            "background-position":"center",
            "background-size":"cover"
          }
        );
      });
    },

    archive_tweet: function(e) {
      var tweets = this.collection;
      e.preventDefault();
      var id = $(e.target).data('id');
      var $tweet = $(e.target).parent('[data-id="'+id+'"]');
      $tweet.addClass('archived');
      tweets.get(id).toggleArchive();
      setTimeout(function() {
        $tweet.remove();
      },1000);
    },

    complete_tweet: function(e) {
      var tweets = this.collection;
      e.preventDefault();
      var id = $(e.target).data('id');
      var $tweet = $(e.target).parent('[data-id="'+id+'"]');
      $tweet.toggleClass('complete');

      tweets.get(id).toggleComplete();
    },
  });

  return TweetsListView;
});
