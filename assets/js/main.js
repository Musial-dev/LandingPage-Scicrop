$(function () {
    "use strict"
    $('body').append('<div style="" id="loadingDiv"><div class="loader">Loading...</div></div>');
    $(window).on('load', function(){
      setTimeout(removeLoader, 1000); //wait for page load PLUS two seconds.
    });
    function removeLoader(){
        $( "#loadingDiv" ).fadeOut(500, function() {
          // fadeOut complete. Remove the loading div
          $( "#loadingDiv" ).remove(); //makes page more lightweight 
      });  
    }
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".navbar-area").removeClass("sticky");
        } else {
            $(".navbar-area").addClass("sticky")
        }
    });

    //   scrollit js
    $.scrollIt();
});