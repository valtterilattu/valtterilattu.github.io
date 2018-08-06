	$(document).scroll(function () {
	  var $nav = $(".navbar-fixed");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	  var $navbar = $(".navbar-nav");
	  $navbar.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});