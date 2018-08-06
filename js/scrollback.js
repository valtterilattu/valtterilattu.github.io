$(document).ready(function(){       
   var scroll_start = 0;
   var home = $('#home');
   var offset = home.offset();
    if (home.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".nav-wrapper").css('background-color', '#f0f0f0');
       }
   });
    }
});