	$(document).scroll(function () {
	  var $nav = $(".navbar-fixed");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	  var $navbar = $(".navbar-nav");
	  $navbar.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});

	$("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});