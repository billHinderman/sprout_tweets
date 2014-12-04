define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var TweetModel = Backbone.Model.extend({
    defaults : {
      'created_at': '',
      'created_at_formatted': '',
      'is_archived': false,
      'is_complete': false,
      'name': '',
      'profile_image_url': '',
      'profile_url': '',
      'screen_name': '',
      'screen_name_display': '',
      'text': ''
    },

    initialize: function() {
      this.updateAttributes();
      this.on('change',this.updateAttributes, this);
    },

    updateAttributes: function() {
      this.set({'screen_name_display': ('@'+(this.get('screen_name')))});
      this.set({'profile_url': ('http://www.twitter.com/'+(this.get('screen_name')))});
      this.set({'created_at_formatted': this.formatDate(this.get('created_at'))});
    },

    formatDate: function(createdAt) {
      var date = new Date(createdAt);
      var formattedDate = (date.getMonth()+1)+'/'+(date.getDate())+'/'+date.getFullYear();
      return formattedDate;
    },

    toggleArchive: function(){
      this.set({'is_archived': !(this.get('is_archived'))});
      this.set({'is_complete': !(this.get('is_archived'))});
    },
    toggleComplete: function(){
      this.set({'is_complete': !(this.get('is_complete'))});
    },
  });
  return TweetModel;
});
