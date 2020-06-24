// $('.owl-carousel').owlCarousel({
//     stagePadding: 14,
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:2
//         },
//         1000:{
//             items:3
//         }
//     }
// })

$('.owl-carousel').owlCarousel({
    center: true,
    items: 14,
    loop:true,
    margin:10,
autoplay:true,
autoplayTimeout:2000,
autoplayHoverPause:true,
autoHeight:true,
autoWidth:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel();
// });