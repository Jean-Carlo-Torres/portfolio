$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");

        } else {
            $('.navbar').removeClass("sticky");
        }

    });


    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPauser: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });


});
$('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});

/*====== scroll reveal ==========*/

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
  })
  
  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' })
  ScrollReveal().reveal(
    '.home-img, .service-container, .portfolio-box, .contact',
    { origin: 'bottom' }
  )
  ScrollReveal().reveal('.home-content h1, .about-img ', { origin: 'left' })
  ScrollReveal().reveal('.home-content p, .about-content ', { origin: 'right' })