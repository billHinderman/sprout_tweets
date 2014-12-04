define([
  'underscore',
  'backbone',
  '../../models/tweet/TweetModel.js'
], function(_, Backbone, TweetModel){

  var TweetsCollection = Backbone.Collection.extend({
    model: TweetModel,
    url: 'https://gist.githubusercontent.com/arlodesign/7d80edb6e801e92c977a/raw/24605c9e5de897f7877b9ab72af13e5b5a2e25eb/tweets.json',

    parse: function(data) {
      return data.tweets;
    },
    
    comparator: function (property) {
      return selectedStrategy.apply(model.get(property));
    },
    strategies: {
      date: function (model) { return model.get('created_at'); }, 
      name: function (model) { return model.get('screen_name'); },
    },
    changeSort: function (sortProperty) {
      this.comparator = this.strategies[sortProperty];
    },

    initialize: function () {
      this.changeSort('date');
    }  
  });

  return TweetsCollection;

});
