$( document ).ready(function() {

        // sticky 
        $(window).scroll(function () {
            if ($(this).scrollTop() > 20) {
                $(".top").addClass("sticky");
            } else {
                $(".top").removeClass("sticky");
            }
        });


        // main-slider
        // $('#main-slider').carousel({
        //     interval: 2000,
        //     cycle: true,
        //   }); 

    // product-carousel //
    $('.product-carousel').slick({
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        rtl: false,
    });

    let ltrMobileSettings = [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                rtl : false
            }
        },

        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                rtl : false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                rtl : false
            }
        }
    ];

    let rtlMobileSettings = [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            rtl : true
        }
    },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                rtl : true
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                rtl : true}
        }
    ];

    $('.product-carousel').slick('slickSetOption', 'responsive', ltrMobileSettings, true);

// small search
    $("header .header-main .search-area .sm-srch").click(function(){
        $("header .header-main .search-area .form-group").toggleClass("active");
    });


//language
// let rtL = false;
    $(function(){
        $("#language").on("click", function (){
            $('html').attr('dir', function(index, attr){
                return attr === 'rtl' ? 'ltr' : 'rtl';
            });
            if($("html").attr("dir") === "rtl"){
                $(this).text("English");
                $(".product-carousel").slick('slickSetOption', 'rtl', true, true);
                $('.product-carousel').slick('slickSetOption', 'responsive', rtlMobileSettings, true);
            }else{
                $(this).text("العربية");
                $(".product-carousel").slick('slickSetOption', 'rtl', false, true);
                $('.product-carousel').slick('slickSetOption', 'responsive', ltrMobileSettings, true);
            }
        });
    });
//language

// heart active
$('.product-content li').click(function(){
    $(this).toggleClass("active");
  });

// password eye open close
$('.password-eye').click(function(){
    $(this).toggleClass("active");
  });



  $("#signin").on( "click", function() {
    $('#myModal1').modal('hide');  
});

//trigger next modal

$("#signin").on( "click", function() {
    $('#myModal2').modal('show');  
});


$("#password").on( "click", function() {
    $('#myModal1').modal('hide');  
    $('#myModal3').modal('show'); 
});

$("#myModal4").on( "click", function() {
    $('#myModal3').modal('hide'); 
    $('#myModal5').modal('show');  
});

$("#myModal6").on( "click", function() {
    $('#myModal5').modal('hide'); 
    $('#myModal7').modal('show');  
});

$("#myModal8").on( "click", function() {
    $('#myModal7').modal('hide'); 
    $('#myModal9').modal('show');  
});

$("#signup-btn").on( "click", function() {
    $('#myModal2').modal('hide'); 
    $('#myModal3').modal('show');  
});

$("#login").on( "click", function() {
    $('#myModal2').modal('hide'); 
    $('#myModal1').modal('show');  
});

// categories menu
$('.categories-box .ctgbox1').click(function(){
    $(this).toggleClass("active");
    $(".ctg-menu-box").toggleClass("active");
  });

  // categories box
$('.ctg-menu-box ul li.box-inner span').click(function(){
    $(this).toggleClass("active");
  });

//   stored filter
  $('.filter-main-sec ul li.box-inner span').click(function(){
    $(this).toggleClass("active");
  });


});


//   range slider   //

(function() {

    var parent = document.querySelector(".range-slider");
    if(!parent) return;
  
    var
      rangeS = parent.querySelectorAll("input[type=range]"),
      numberS = parent.querySelectorAll("input[type=number]");
  
    rangeS.forEach(function(el) {
      el.oninput = function() {
        var slide1 = parseFloat(rangeS[0].value),
              slide2 = parseFloat(rangeS[1].value);
  
        if (slide1 > slide2) {
                  [slide1, slide2] = [slide2, slide1];
          // var tmp = slide2;
          // slide2 = slide1;
          // slide1 = tmp;
        }
  
        numberS[0].value = slide1;
        numberS[1].value = slide2;
      }
    });
  
    numberS.forEach(function(el) {
      el.oninput = function() {
              var number1 = parseFloat(numberS[0].value),
                      number2 = parseFloat(numberS[1].value);
              
        if (number1 > number2) {
          var tmp = number1;
          numberS[0].value = number2;
          numberS[1].value = tmp;
        }
  
        rangeS[0].value = number1;
        rangeS[1].value = number2;
  
      }
    });
  
  })();

//   stored filter item
  $('.filter-main-sec .filter-box-part h4.filter-item').click(function(){
    $(this).toggleClass("active");
  });

//   comment box main
$('.product-details-main .comment-box button').click(function(){
    $(".product-details-main .all-comments").toggleClass("active");
  });

  //   profile page address
$('.address-box-area .box-part1 .dot-line').click(function(){
    $(this).toggleClass("active");
  });


  // checkout panel increment decrement
(function() {
 
    window.inputNumber = function(el) {
  
      var min = el.attr('min') || false;
      var max = el.attr('max') || false;
  
      var els = {};
  
      els.dec = el.prev();
      els.inc = el.next();
  
      el.each(function() {
        init($(this));
      });
  
      function init(el) {
  
        els.dec.on('click', decrement);
        els.inc.on('click', increment);
  
        function decrement() {
          var value = el[0].value;
          value--;
          if(!min || value >= min) {
            el[0].value = value;
          }
        }
  
        function increment() {
          var value = el[0].value;
          value++;
          if(!max || value <= max) {
            el[0].value = value++;
          }
        }
      }
    }
  })();
  
  inputNumber($('.cart-main-sec ul li .input-number'))

  // ---------------doctor service----------
  $('.dctservice .product-carousel').slick({
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    variableWidth: true,
    rtl: false,
});

// --------header search product dropdown-------------
$('.search-area .pdt-box-area .area1 ul.part1 li.moreopt label .chkbox').click(function(){
  $('.search-area .pdt-box-area .area1 ul.part1 li.moreopt-area').toggleClass("active");
});

$('.search-area .pdt-box').click(function(){
  $('.search-area .pdt-box-area').toggleClass("active");
});