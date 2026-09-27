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

  $(document).on("click", ".language-button", function(event) {
    event.preventDefault();

    var language = this.getAttribute("data-language");
    var audioPlayer = $(".audio-player");
    var audioSource = audioPlayer.data("audio-" + language);

    $(".language-button").removeClass("is-active").attr("aria-pressed", "false");
    this.classList.add("is-active");
    this.setAttribute("aria-pressed", "true");

    document.querySelectorAll(".language-content").forEach(function(content) {
      content.hidden = true;
    });
    document.querySelectorAll(".language-content-" + language).forEach(function(content) {
      content.hidden = false;
    });

    if (audioSource && $("#jquery_jplayer_1").length) {
      $("#jquery_jplayer_1").jPlayer("setMedia", { title: "", mp3: audioSource });
    }
  });

});