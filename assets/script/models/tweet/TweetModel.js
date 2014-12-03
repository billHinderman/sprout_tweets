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
        'text': ''
      },

      initialize: function() {},

      profile_url : function() {
        return 'http://www.twitter.com/' + this.screen_name;
      },
      
      toggleArchive: function(){
        this.set({is_archived: !is_archived});
      },
      toggleComplete: function(){
        this.set({is_complete: !is_complete});
      },

    });

    return TweetModel;

});
