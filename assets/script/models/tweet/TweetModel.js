define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var TweetModel = Backbone.Model.extend({

  		defaults : {
        'id': 0,
        'archived': false,
        'complete': false,
        'created_at': '',
        'text': '',
        'name': '',
        'screen_name': '',
        'profile_image_url': '',
        'profile_url': '#'
      },  

      initialize: function( options ) {
  			this.query = options.query; 
  		},

		url : function() {
	        return 'https://api.github.com/users/' + this.query;
	    },
	    
	    parse : function(res) { 
        // because of jsonp 
	        return res.data;
	    }

    });

  	return OwnerModel;

});
