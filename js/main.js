$(document).ready(function () {
	$('.header__link').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});



$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


var scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 180){
        $(".header").css({"background": "white"})
    }
    if(180 > scrolled){
        $(".header").css({"background": "transparent"})         
    }

}		

  $(document).ready(function() {
	$('.ourstory-left').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});
});

/* new WOW().init(); */

const pass = "0772030207";
function checkPassword() {
	const passwordInput = document.getElementById("password-input");
	const enteredPassword = passwordInput.value;
	if (enteredPassword === pass) {
		window.location.href = "calculator.html";
	} else {
		window.location.reload();
	}
}