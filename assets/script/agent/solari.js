jQuery(document).ready(function($) {
  var $solari = $("*[data-solari]")
  $solari.each(function() {
  	var options = $(this).data('solari-options');
  	$(this).solari(options);
  })
});	

(function($){
	$.fn.solari = function(options) {
		var $this = $(this);
		var settings = solari.init(options);
		var text = $this.text()
		var inject = solari.cut($this,text,settings);
		if(inject) {
			var $solari = solari.append($this,inject,settings);
		}
		solari.flapWhenReady($solari,settings);
	};

	var solari = {
		init: function(options) {
			var defaults = { 
				aged: false,
				animate: '2d',
				characters: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9',' ',',','.','#','&','?','!','❤','⦻','✖','←','→'],
				delay: '1',
				digitClass: 'digit',
				digitMax: 0,
				flapBase: 32,
				flapInterval: 100,
				flapWait: 600,
				flapMin: 8,
				padChar: ' ',
				style: ''
			};
			var settings = $.extend({}, defaults, options);
			if(settings.animate === '3d') {
				settings.flapInterval*=2;
			}
			return settings;
		},

		cut: function($el,text,settings) {
			var padText = solari.padText(text,settings)
			, cutText = padText.split('')
			, inject = '';
			if (cutText.length) {
				$(cutText).each(function(i, digit) {
					switch(settings.animate) {
						case '2d':
							inject += '<span class="'+settings.digitClass+' animate-2d" aria-hidden="true">'+
								'<span data-digit="'+digit+'" class="'+settings.digitClass+'-char '+settings.digitClass+'-top">'+settings.padChar+'</span>'+
								'<span data-digit="'+digit+'" class="'+settings.digitClass+'-char '+settings.digitClass+'-bottom">'+settings.padChar+'</span>'+
							'</span>';
							break;
						case '3d':
							inject += '<span class="'+settings.digitClass+' animate-3d" aria-hidden="true">'+
								'<span data-digit="'+digit+'" class="'+settings.digitClass+'-char '+settings.digitClass+'-top '+settings.digitClass+'-move">'+settings.padChar+'</span>'+
								'<span data-digit="'+digit+'" class="'+settings.digitClass+'-char '+settings.digitClass+'-top">'+settings.padChar+'</span>'+
								'<span data-digit="'+digit+'" class="'+settings.digitClass+'-char '+settings.digitClass+'-top '+settings.digitClass+'-space">'+settings.padChar+'</span>'+
								'<span data-digit="'+digit+'" class="'+settings.digitClass+'-char '+settings.digitClass+'-bottom '+settings.digitClass+'-move">'+settings.padChar+'</span>'+
								'<span data-digit="'+digit+'" class="'+settings.digitClass+'-char '+settings.digitClass+'-bottom">'+settings.padChar+'</span>'+
								'<span data-digit="'+digit+'" class="'+settings.digitClass+'-char '+settings.digitClass+'-bottom '+settings.digitClass+'-space">'+settings.padChar+'</span>'+
							'</span>';
							break;
						default:
							inject += '<span class="'+settings.digitClass+'" aria-hidden="true">'+
								'<span data-digit="'+digit+'" class="'+settings.digitClass+'-char '+settings.digitClass+'-top">'+settings.padChar+'</span>'+
								'<span data-digit="'+digit+'" class="'+settings.digitClass+'-char '+settings.digitClass+'-bottom">'+settings.padChar+'</span>'+
							'</span>';
							break;
					}
				});	
				return inject;
			}
			return false;
		},

		append: function($el,inject,settings) {
			var $inject = $(inject);
			if(settings.style !== '') {
				$el.addClass(settings.style);	
			}
			if(settings.aged) {
				$inject = solari.age($inject);
			}
			$el.attr('aria-label',$el.text())
				.empty();
			return $el.append($inject);
		},

		flap: function($el,settings) { 
			var $digits = $el.find('.'+settings.digitClass+'-top, .'+settings.digitClass+'-bottom');
			$digits.each(function() {
				solari.flapChar($(this),settings);
			})
		},

		flapChar: function($el,settings) {
			var flaps = Math.round((settings.flapMin)+(Math.random()*settings.flapBase));
			var flapInterval = (settings.flapInterval/2)+(Math.round(Math.random()*settings.flapInterval));
			var i=0;
			var extrudedWait = (Math.random()*settings.flapWait);
			switch(settings.animate) {
				case '2d':
					setTimeout(function() {
						var flapIntervalTrack = setInterval(function() {
							var letter = Math.round(Math.random()*settings.characters.length);
							$el.text(settings.characters[letter]);
							i++;
							if(i==flaps) {
								$el.text($el.data('digit'));
								clearInterval(flapIntervalTrack);
							}
						},flapInterval);
					},extrudedWait);
					break;
				case '3d':
					setTimeout(function() {
						var flapIntervalTrack = setInterval(function() {
							var letter = Math.round(Math.random()*settings.characters.length);
							var transition = 'transform '+(extrudedWait/1000).toFixed(4)+'s';
							$el.css('transition',''+transition+'');
							$el.toggleClass(settings.digitClass+'-move');
							$el.siblings(':not(.'+settings.digitClass+'-space)').toggleClass(settings.digitClass+'-move');
							$el.siblings(':not(.'+settings.digitClass+'-space)').css('transition',''+transition+'');
							$el.text(settings.characters[letter]);
							i++;
							if(i==flaps) {
								$el.text($el.data('digit'));
								clearInterval(flapIntervalTrack);
							}
						},flapInterval);
					},extrudedWait);
					break;
			}
		},

		padText: function(text,settings) {
			var _text = text;
			if(settings.digitMax != 0) {
				if(_text.length > settings.digitMax) {
					_text = _text.substring(0,settings.digitMax);
				} else if(_text.length < settings.digitMax) {
					var difference = settings.digitMax - _text.length;
					_text = solari.pad(_text,settings,difference);
				}
			}
			return _text;
		},

		pad: function(text,settings,difference) {
			var _text = text;
			while(difference > 0) {
				_text+=settings.padChar;
				difference--;
			}
			return _text;
		},

		flapWhenReady: function($el,settings) {
			var beginSolariTrack = setInterval(function() {
		    if(solari.isInView($el)) {
		    	clearInterval(beginSolariTrack);
		    	setTimeout(function() {
		    		solari.flap($el,settings);
		    	},settings.flapWait);
		    }
	  	},600);	// Throttle scroll check
		},

		isInView: function($el) {
		  var viewBottom = $(window).scrollTop() + $(window).height();
		  var solariBottom = $el.offset().top + $el.height();

		  return (solariBottom <= viewBottom);
		}
	};
})(jQuery);
