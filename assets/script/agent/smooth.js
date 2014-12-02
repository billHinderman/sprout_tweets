jQuery(document).ready(function($) {
  $('a[data-scroll]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      if($(this).attr('data-scroll') == 'top') {
        $('html,body').animate({
          scrollTop: 0
        }, 800);
        return false;
      } else {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 800);
          return false;
        }
      }
    }
  });
});
