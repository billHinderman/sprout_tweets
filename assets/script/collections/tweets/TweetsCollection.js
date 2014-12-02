define([
  'underscore',
  'backbone',
  '../../models/tweet/TweetModel.js'
], function(_, Backbone, TweetModel){

  var TweetsCollection = Backbone.Collection.extend({
    model: TweetModel,

    initialize : function() {
      var tweet1 = new TweetModel();
      this.add([tweet1]);
    },
  });

  return TweetsCollection;

});
