define([
  'underscore',
  'backbone',
  '../../models/tweet/TweetModel.js'
], function(_, Backbone, TweetModel){

  var TweetsCollection = Backbone.Collection.extend({
    model: TweetModel,
    url: 'https://gist.githubusercontent.com/arlodesign/7d80edb6e801e92c977a/raw/24605c9e5de897f7877b9ab72af13e5b5a2e25eb/tweets.json',

    initialize: function() { },

    parse: function(data) {
      return data.tweets;
    }
    
  });

  return TweetsCollection;

});
