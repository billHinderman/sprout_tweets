jQuery(document).ready(function($) {
  $("*[data-bg]").each( function() {
  $(this).css(
      {
        "background":"url('"+$(this).data("bg-image")+"')",
        "background-position":"center",
        "background-size":"cover"
      }
    );
  });
});
