$(document).ready (function() {
  $('.news__slider').slick({
    dots: false,
    infinite: false,
    arrows: true,
    prevArrow: '.news__slider_arrow.prev',
    nextArrow: '.news__slider_arrow.next',          
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false

        }
      }
    ]
  });

  $("button.news__slider_arrow").click(function(){
    let $activeArray = $(".slick-active");
    if( $(this).hasClass("next") ){
      // net pos
      let $next = $($activeArray[$activeArray.length - 1]).next();
      if( $next.length === 0 ){
        $('button.news__slider_arrow.next').addClass("disabled");
        $('button.news__slider_arrow.prev').removeClass("disabled");
      }
      console.log($next)
    } else {
      let $prev = $($activeArray[0]).prev();
      if( $prev.length === 0 ){
        $('button.news__slider_arrow.next').removeClass("disabled");
        $('button.news__slider_arrow.prev').addClass("disabled");
      }
    }
  });

});

let hamburger = document.getElementById('hamburger')
let menu = document.getElementById('menu')
let sMenu = document.getElementById('s-menu')

hamburger.onclick = function(){
  menu.classList.toggle("active");
  sMenu.classList.toggle('active');
  menu.appendChild(sMenu);
  console.log(menu)
}
