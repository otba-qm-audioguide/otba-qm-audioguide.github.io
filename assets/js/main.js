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

  function setLanguage(language, savePreference) {
    if (!$(".language-button[data-language='" + language + "']").length) {
      language = "en";
    }

    var audioPlayer = $(".audio-player");
    var audioSource = audioPlayer.attr("data-audio-" + language);

    $(".language-button").removeClass("is-active").attr("aria-pressed", "false");
    $(".language-button[data-language='" + language + "']")
      .addClass("is-active")
      .attr("aria-pressed", "true");

    document.querySelectorAll(".language-content").forEach(function(content) {
      content.hidden = true;
    });
    document.querySelectorAll(".language-content-" + language).forEach(function(content) {
      content.hidden = false;
    });

    if (audioSource && $("#jquery_jplayer_1").length) {
      $("#jquery_jplayer_1").jPlayer("setMedia", { title: "", mp3: audioSource });
    }

    if (savePreference) {
      window.localStorage.setItem("audioGuideLanguage", language);
    }
  }

  $(document).on("click", ".language-button", function(event) {
    event.preventDefault();
    setLanguage(this.getAttribute("data-language"), true);
  });

  var savedLanguage = window.localStorage.getItem("audioGuideLanguage");
  if (savedLanguage) {
    setLanguage(savedLanguage, false);
  }

});