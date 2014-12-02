define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/component/_header.html'
], function($, _, Backbone, headerTemplate){

  var FooterView = Backbone.View.extend({
    el: $("#header"),

    initialize: function() {
      this.render();
    },

    render: function(){
      this.$el.html(headerTemplate);
    }
  });

  return FooterView;
  
});
