define([
  'jquery',
  'underscore',
  'backbone',
  'assets/script/views/component/HeaderView.js',
  'assets/script/views/component/NavView.js',
  'assets/script/views/component/FooterView.js',
  'assets/script/views/home/HomeView.js',
  'assets/script/views/tweet/TweetsView.js',
], function($, _, Backbone, HeaderView, NavView, FooterView, HomeView, TweetsView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'projects': 'showProjects',
      'users': 'showContributors',
      
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;

    app_router.on('route:defaultAction', function (actions) {
     
       // We have no matching route, lets display the home page 

        var homeView = new TweetsView();
        homeView.render();
    });

    // Unlike the above, we don't call render on this view as it will handle
    // the render call internally after it loads data. Further more we load it
    // outside of an on-route function to have it loaded no matter which page is
    // loaded initially.
    var headerView = new HeaderView();
    var navView = new NavView();
    var footerView = new FooterView();

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
