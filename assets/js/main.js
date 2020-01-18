(function($) {


  $(".single-item").slick({
    slidesToShow: 1,
    // autoplay: true,
    prevArrow: '<span><i class="fas fa-angle-left"></i></span>',
    nextArrow: '<span><i class="fas fa-angle-right"></i></span>'
  });

  var $daud = $(".recent").isotope({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: ".recent-item",
    percentPosition: true,
    masonry: {
      // use element for option
      columnWidth: ".recent-item"
    }
  });

  // filter items on button click
  $(".filter_item").on("click", "button", function() {
    var filterValue = $(this).attr("data-filter");
    $daud.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  $(".filter_item").each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on("click", "button", function() {
      $buttonGroup.find(".active").removeClass("active");
      $(this).addClass("active");
    });
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  // data - background - img
  $("[data-background]").each(function() {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });

  $(".counter").counterUp({
    delay: 10,
    time: 2000
  });
  
  $(".scroll_top").click(function(){
    $("html,body").animate({scrollTop:0},5000);


  });



  
})(jQuery);




