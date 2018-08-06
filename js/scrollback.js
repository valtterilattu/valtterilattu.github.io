$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
        $('#back-to-top').fadeIn(200);
    } else {
        $('#back-to-top').fadeOut(200);
    }
});
$('#return-to-top').click(function() {
    $('body,html').animate({
        scrollTop : 0
    }, 500);
});

$(function () {
  $(document).scroll(function () {
	  var $nav = $(".navbar-fixed");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});