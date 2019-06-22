$(document).ready(function () {



  $('.about-photo img').hover(function () {
    $(this).parent().siblings().children('img').css('opacity', '.4');
  }, function () {
    $(this).parent().siblings().children('img').css('opacity', '1');
  });

  $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });


  //burger

  $('.burger-menu').on('click', function () {
    $('.mobile-menu').addClass('d-block');
    $('.menu-m').addClass('d-block');
  });

  $('.close-menu').on('click', function () {
    $('.mobile-menu').removeClass('d-block');
    $('.menu-m').removeClass('d-block');
  });

  // $('.burger-opener').on('click', function () {
  //   $('.menu').removeClass('show');
  //   $('body').css('overflow', 'auto');
  // });

  $('.menu-portfolio-mob').on('click', function () {
    $('.dropdown-mob').slideToggle('');
  });

  $('.menu-catalog-mob').on('click', function () {
    $('.menu-dropdown-wrap').slideToggle('');
  });

  $('.classic-mob').on('click', function () {
    $('.classic-desk-mob').slideToggle('');
    $('.arrow-mob-top').toggleClass('show');
  });

  $('.modern-mob').on('click', function () {
    $('.modern-desk-mob').slideToggle('');
    $('.arrow-mob-bottom').toggleClass('show');
  });

  //modalka

  $('.modal-btn').on('click', function () {
    $("body").toggleClass("hidden");
   $("#popup-modal-calc").addClass("show");
  });

  $('.modal-content-close').on('click', function () {
   $("body").toggleClass("hidden");
   $("#popup-modal-calc").removeClass("show");
   $(".popup-modal-letter").removeClass("show");
  });

  $('.letter-btn').on('click', function () {
    $("body").toggleClass("hidden");
   $(".popup-modal-letter").addClass("show");
  });

  // $('.letter-btn').on('click', function () {
  //   $('.popup-modal-letter').fadeIn('');
  //   $('body').css('overflow', 'hidden');
  // });

  $('.item-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: true,
    autoplaySpeed: 4000,
    speed: 900,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

});

var $slider = $('.slideshow .slider'),
  maxItems = $('.item', $slider).length,
  dragging = false,
  tracking,
  rightTracking;

$sliderRight = $('.slideshow').clone().addClass('slideshow-right').appendTo($('.split-slideshow'));

rightItems = $('.item', $sliderRight).toArray();
reverseItems = rightItems.reverse();
$('.slider', $sliderRight).html('');
for (i = 0; i < maxItems; i++) {
  $(reverseItems[i]).appendTo($('.slider', $sliderRight));
}

$slider.addClass('slideshow-left');
var sliderLeft = $('.slideshow-left');
sliderLeft.slick({
  vertical: true,
  verticalSwiping: true,
  arrows: false,
  infinite: true,
  touchMove:false,
  swipe: false,
  dots: true,
  speed: 1000,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
});
sliderLeft.on('beforeChange', function (event, slick, currentSlide, nextSlide) {

  if (currentSlide > nextSlide && nextSlide == 0 && currentSlide == maxItems - 1) {
    $('.slideshow-right .slider').slick('slickGoTo', -1);
    $('.slideshow-text').slick('slickGoTo', maxItems);
  } else if (currentSlide < nextSlide && currentSlide == 0 && nextSlide == maxItems - 1) {
    $('.slideshow-right .slider').slick('slickGoTo', maxItems);
    $('.slideshow-text').slick('slickGoTo', -1);
  } else {
    $('.slideshow-right .slider').slick('slickGoTo', maxItems - 1 - nextSlide);
    $('.slideshow-text').slick('slickGoTo', nextSlide);
  }
})
var sliderRight = $('.slideshow-right .slider');
sliderRight.slick({
  swipe: false,
  vertical: true,
  arrows: false,
  infinite: true,
  touchMove:false,
  swipe: false,
  speed: 950,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  initialSlide: maxItems - 1
});
$('.slideshow-text').slick({
  swipe: false,
  vertical: true,
  arrows: false,
  infinite: true,
  speed: 900,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
});

var autoplaySlider = 4000;
setInterval(function () {
  sliderLeft.slick("slickNext");
  console.log("next")
}, autoplaySlider)



$('.arrow-prev').on('click', function () {
  $('.magazines-slider').slick('slickPrev');
});

$('.arrow-next').on('click', function () {
  $('.magazines-slider').slick('slickNext');
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $('.scroll-menu').addClass("sticky");
  } else {
    $('.scroll-menu').removeClass("sticky");
  }
});

$(window).resize(function () {
  var width = $('body').innerWidth()
  if (width < 426) {
    $('.advantages').slick({
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }

});

$(window).resize(function () {
  var width = $('body').innerWidth()
  if (width < 426) {
    $('.skills-list').slick({
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }

});

$(window).resize(function () {
  var width = $('body').innerWidth()
  if (width < 426) {
    $('.tours-list').slick({
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }

});

$(document).ready(function () {
  $("#offer").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
});

var noActiveUrl = 'img/m-green.png';
var activeUrl = "img/m.png";
var slider = $(".magazines-slider_desktop");
var slides = $('.magazines-slider_desktop .magazines-slider_item');
var images = $(".map .slider-img");
slider.slick();

function setActiveImg(id) {
  images.each(function (index, image) {
    if ($(image).data('slide') == id) {
      $(image).attr("src", activeUrl)
    } else {
      $(image).attr("src", noActiveUrl)
    }
  })
}

function goToSlide(slider, id) {
  slider.slick('slickGoTo', id - 1);
}

images.on("click", function () {
  goToSlide(slider, $(this).data("slide"))
})

setActiveImg($(slides[0]).data('slide'));
slider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
  // console.log(slick.currentSlide);
  setActiveImg($(slides[slick.currentSlide]).data('slide'));
})

$(window).resize(function () {
  var width = $('body').innerWidth()
  if (width < 426) {
    $('.magazines-slider_mobile').slick({
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }

});

// external js: flickity.pkgd.js

var carousel = document.querySelector('.carousel');
var flkty = new Flickity(carousel, {
  imagesLoaded: true,
  percentPosition: false,
  cellAlign: 'center',
  contain: true,
  selectedAttraction: 0.01,
  friction: 0.2,
  lazyLoad: 5,
  pauseAutoPlayOnHover: true
});

var imgs = carousel.querySelectorAll('.carousel-cell img');
// get transform property
var docStyle = document.documentElement.style;
var transformProp = typeof docStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

flkty.on('scroll', function () {
  flkty.slides.forEach(function (slide, i) {
    var img = imgs[i];
    var x = (slide.target + flkty.x) * -1 / 3;
    img.style[transformProp] = 'translateX(' + x + 'px)';
  });
});

//  $('.about-photo img').hover(function () {
//     $(this).parent().siblings().children('img').css('opacity', '.4');
//   }, function () {
//     $(this).parent().siblings().children('img').css('opacity', '1');
//   });

// //Start execute javascript for gallery horizontal
//    elementorFrontend.hooks.addAction( 'frontend/element_ready/photographer-gallery-horizontal.default', function( $scope ) {
//      jQuery('body').addClass('gallery-horizontal');

//      jQuery(".tg_horizontal_gallery_wrapper").each(function() {
//        var $carousel = jQuery(this);
//        var timer = $carousel.attr('data-autoplay');
//        if(timer == 0)
//        {
//          timer = false;
//        }

//        var loop = $carousel.attr('data-loop');
//        var navigation = $carousel.attr('data-navigation');
//        if(navigation == 0)
//        {
//          navigation = false;
//        }

//        var pagination = $carousel.attr('data-pagination');
//        if(pagination == 0)
//        {
//          pagination = false;
//        }

//        $carousel.flickity({
//          percentPosition: false,
//          imagesLoaded: true,
//          selectedAttraction: 0.01,
//          friction: 0.2,
//          lazyLoad: 5,
//          pauseAutoPlayOnHover: true,
//          autoPlay: timer,
//          contain: true,
//          prevNextButtons: navigation,
//          pageDots: pagination
//        });

//        var parallax = $carousel.attr('data-parallax');
//        if(parallax == 1)
//        {
//          var $imgs = $carousel.find('.tg_horizontal_gallery_cell img');

//          var docStyle = document.documentElement.style;
//          var transformProp = typeof docStyle.transform == 'string' ?
//            'transform' : 'WebkitTransform';

//          var flkty = $carousel.data('flickity');

//          $carousel.on( 'scroll.flickity', function() {
//            flkty.slides.forEach( function( slide, i ) {
//              var img = $imgs[i];
//              var x = ( slide.target + flkty.x ) * -1/3;
//              img.style[ transformProp ] = 'translateX(' + x  + 'px)';
//            });
//          });
//        }

//        var fullscreen = $carousel.attr('data-fullscreen');
//        if(fullscreen != 0)
//        {
//          jQuery('body').addClass('elementor-fullscreen');

//          //Get menu element height
//          var menuHeight = parseInt(jQuery('#wrapper').css('paddingTop'));
//          var documentHeight = jQuery(window).innerHeight();
//          var sliderHeight = parseInt(documentHeight - menuHeight);

//          $carousel.find('.tg_horizontal_gallery_cell').css('height', sliderHeight+'px');
//          $carousel.find('.tg_horizontal_gallery_cell_img').css('height', sliderHeight+'px');
//          $carousel.flickity('resize');

//          jQuery( window ).resize(function() {
//            var menuHeight = parseInt(jQuery('#wrapper').css('paddingTop'));
//            var documentHeight = jQuery(window).innerHeight();
//            var sliderHeight = parseInt(documentHeight - menuHeight);

//            $carousel.find('.tg_horizontal_gallery_cell').css('height', sliderHeight+'px');
//            $carousel.find('.tg_horizontal_gallery_cell_img').css('height', sliderHeight+'px');
//            $carousel.flickity('resize');
//          });
//        }
//      });
//    } );
//    //End execute javascript for gallery horizontal