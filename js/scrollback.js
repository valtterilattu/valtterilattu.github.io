jQuery(document).ready(function(){       
   var scroll_start = 0;
   var home = jQuery('#home');
   var offset = home.offset();
    if (home.length){
   jQuery(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          jQuery(".nav-wrapper").css('background-color', '#f0f0f0');
       }
   });
    }
});