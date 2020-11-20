/* global alert , console , prompt */

$(document).ready(function() {

    'use strict';

    $("body").niceScroll({

    cursorcolor:"rgba(3, 146, 206, .8)" 
  });

/************************ button to contact-part ********************************/

       $('.myslider button').click( function (){

        $('html , body').animate({

            scrollTop : $('.contact').offset().top - 90

        },1000)

   })

/************************* fixed-nav ********************************************/
       
       $(window).scroll(function() {

      if( $(window).scrollTop() >  ( $('.top-header').height() , $('.top-header-2').height() ) ){

      $('.navbar-default').addClass('fixed')

     } else {

      $('.navbar-default').removeClass('fixed')

      }

   })

    /*************************** search *****************************/

    var myClick = function() {

        $('.top-header-2 .search').click(function() {

            $('.search-form').slideToggle(500)
        })
    }
    myClick();

/************************** offset().top-links ********************************/

      $('.navbar-default .navbar-nav > li > a').click(function(){
        
        $('html , body').animate({

          scrollTop : $( $(this).data('class') ).offset().top - 100

        } , 1000);

   });

/******************************* slider ***************************** */

       $('.bxslider').bxSlider({

           auto: true,
          //mode: 'fade',
           autoControls: true

       });

    /************************ textillate **************************************************/
    $('.tlt').textillate({ 
        in: {
        effect: 'fadeInDownBig' ,
        loop: true,
        minDisplayTime: 1000,
        initialDelay: 0,
        autoStart: true
    } 
});

    /****************** accordion *****************************/

    $('.about .accord  .head').click(function(){

        $(this).children('h3').toggleClass('colorCl');

        $(this).siblings('.head').children('h3').removeClass('colorCl')

        $(this).next().slideToggle().siblings('.about .accord .content').slideUp();

        $(this).children('.about .accord > div i').toggleClass('chStyle')

         $(this).siblings().children('.about .accord > div i').removeClass('chStyle')

    })

    /***************************** magnific video ********************************/

    $('.pop').magnificPopup({
        type: 'iframe'
    });

    /***************************  owlCarousel  ***************************/

     $('.departments .owl-carousel , .about .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay : true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
/**********************************************/

 $('.testimonial .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay : true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:2
        }
    }
})

/**********************************************************************/

    $('.bottom-top').click(function (){


          $('html , body').animate({

            scrollTop : 0

          } , 1000)

    });

   $(window).scroll(function() {

     
     if( $(window).scrollTop() >= $('.about').offset().top  ){

      $('.bottom-top , .top-parentt').fadeIn()

     } else {

      $('.bottom-top , .top-parentt').fadeOut()
     }

   })

})
/************************* load ********************************/
   
   $(window).on('load',function (){

    $('.loader div').fadeOut(1500,function (){

        $(this).parent().fadeOut(1000)
    })
   })