$(document).ready(function() {

  // Slick JS

  var arrowsContainer = $("#arrows-container");
  $('.slick').slick({
    dots: true,
    //appendArrows: arrowsContainer
    arrows: false
  });

  $('.slick-slide-to-next').on("click", function() {
    $('.slick').slick('slickNext');
  });

  $('.slick-post-hero-image').slick({
    dots: true,
    arrows: true
  });

  // Slide down menu
  $(".site-header-menu-button").on("click", function(e) {
    e.preventDefault();

    //$(".slide-menu").slideToggle();
    
    var slideMenu = $(".slide-menu");
    if ( $(slideMenu).hasClass("slide-menu-show") ) {
      $(slideMenu).removeClass("slide-menu-show");
    }
    else {
      $(slideMenu).addClass("slide-menu-show");  
    }
    
  });

  $(".language-button").on("click", function() {
    var language = $(this).data("language");
    var audioPlayer = $(".audio-player");
    var audioSource = audioPlayer.data("audio-" + language);

    $(".language-button").removeClass("is-active");
    $(this).addClass("is-active");
    $(".language-content").removeClass("is-visible");
    $(".language-content-" + language).addClass("is-visible");

    if (audioSource && $("#jquery_jplayer_1").length) {
      $("#jquery_jplayer_1").jPlayer("setMedia", { title: "", mp3: audioSource });
    }
  });

});