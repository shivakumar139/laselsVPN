$(document).ready(function(){
var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },            
        960:{
            items:2
        },
        1200:{
            items:3
        },
    }
});


owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
});


// animations
