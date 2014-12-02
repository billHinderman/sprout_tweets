define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/page/_home.html'
], function($, _, Backbone, homeTemplate){

  var HomeView = Backbone.View.extend({
    el: $("#content"),

    render: function(){
      this.$el.html(homeTemplate);
    }
  });

  return HomeView;
  
});
