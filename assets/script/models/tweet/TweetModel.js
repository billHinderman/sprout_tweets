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

      created_at_formatted : function() {
        var created_at_formatted = '';
        if(this.created_at !== '') {
          var created_at_date = new Date(this.created_at);
          created_at_formatted = created_at_date.getDate()+'/'+
                                    (created_at_date.getMonth()+1)+'/'+
                                    created_at_date.getFullYear();
          }
        return created_at_formatted;
      },
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
