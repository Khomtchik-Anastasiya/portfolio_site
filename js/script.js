$(document).ready(function () {
    $('.slider').slick({
          arrows:true,
          dots:true,
          adaptiveHeight:false,
          slidesToShow:3,
          slidesToScroll:3,
          speed:1000,
          infinite:true,
          autoplay:true,
          autoplaySpeed:3000,
          responsive:[
           {
               breakpoint: 950,
               settings: {
                   slidesToShow:2,
                                       slidesToScroll:2
               }
           },
           {
               breakpoint: 768,
               settings: {
                   slidesToShow:1,
                                       slidesToScroll:1,
                                       arrows:false
               }
           }
       ]
     });
});
