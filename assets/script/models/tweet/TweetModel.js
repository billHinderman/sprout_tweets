define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var TweetModel = Backbone.Model.extend({
    defaults : {
      'created_at': '',
      'is_archived': false,
      'is_complete': false,
      'name': '',
      'profile_image_url': '',
      'screen_name': '',
      'screen_name_display': '@',
      'text': ''
    },

    initialize: function() {},

    profile_url : function() {
      return 'http://www.twitter.com/'+this.screen_name;
    },

    screen_name_display : function() {
      return '@'+this.screen_name;
    },
    
    toggleArchive: function(){
      this.set({is_archived: !this.is_archived});
    },
    toggleComplete: function(){
      this.set({is_complete: !this.is_complete});
    },
  });
  return TweetModel;
});
