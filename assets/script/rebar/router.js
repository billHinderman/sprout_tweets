define([
  'jquery',
  'underscore',
  'backbone',
  'assets/script/views/component/HeaderView.js',
  'assets/script/views/component/NavView.js',
  'assets/script/views/component/FooterView.js',
'assets/script/views/tweet/TweetsView.js',
], function($, _, Backbone, HeaderView, NavView, FooterView, TweetsView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      'tweets': 'showTweets',
      '*actions': 'showTweets'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;

    app_router.on('route:showTweets', function () {
    
        // Like above, call render but know that this view has nested sub views which 
        // handle loading and displaying data from the GitHub API  
        var tweetsView = new TweetsView();
        tweetsView.render();
    });

    // Unlike the above, we don't call render on this view as it will handle
    // the render call internally after it loads data. Further more we load it
    // outside of an on-route function to have it loaded no matter which page is
    // loaded initially.
    var headerView = new HeaderView();
    var footerView = new FooterView();

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
