define([
  'jquery',
  'underscore',
  'backbone',
  '../../models/tweet/TweetModel.js',
  '../../collections/tweets/TweetsCollection.js',
  'text!templates/component/_summary.html'
], function($, _, Backbone, TweetModel, TweetsCollection, summaryTemplate){

  var SummaryView = Backbone.View.extend({

    render: function(){
      var data = {
        tweets: this.collection.models,
        _: _ 
      };
      var compiledTemplate = _.template( summaryTemplate, data );
      $('#summary').html(compiledTemplate);
    }
  });

  return SummaryView;
  
});
