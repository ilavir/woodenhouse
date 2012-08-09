/* Author:

 */

function equalHeight(group) {
  tallest = 0;
  group.each(function () {
    thisHeight = $(this).height();
    if (thisHeight > tallest) {
      tallest = thisHeight;
    }
  });
  group.height(tallest);
}

function leftMenuFontSize() {
  var sidebarLeftInnerHeight = $(window).height();
  var $a = $('.b-menu-left a');
  if (sidebarLeftInnerHeight < 900) {
    $a.css('font-size', '14px');
  } else {
    $a.css('font-size', '15px');
  }
}

function fMenuTopInnerWidht() {
  var menuTopInnerWidht = $('.l-content_inner').width() + 92;
  $('.l-menu-top_inner').width(menuTopInnerWidht);
  var liCount = $('.b-menu-top li').size();
  var liMargins = Number($('.b-menu-top li:first-child').css('margin-right').replace('px', '')) * (liCount - 1);
  var liWidth = (menuTopInnerWidht - liMargins) / liCount;
  $('.b-menu-top li').width(liWidth);
}

/* function fMenuTopAVertAlign() {
 var aLineHeight = Number($('.b-menu-top a').css('line-height').replace('px', ''));
 var aVertHeight = Number($('.b-menu-top a').height());
 var aVertAlign = aVertHeight - aLineHeight;
 alert(aVertAlign);
 } */

function footerWidth() {
  var footerWidht = $('body').width() - 124;
  $('.b-footer').width(footerWidht);
}

function picsSliderSmallIndexChange() {
  $('.b-pics-slider_small a').hover(
      function () {
        var currentIndex = $(this).css('z-index');
        $(this).css('z-index', '70');
      },
      function () {
        $(this).css('z-index', '10');
        alert(currentIndex);
      }
  )
}

$(window).bind('resize', function () {
  //if ($('.l-sidebar-left_inner').size()) {leftMenuFontSize();}
  if ($('.l-menu-top_inner nav').size()) {
    //$('.l-menu-top_inner').horizontalNav();
  }
  if ($('.b-footer').size()) {
    //footerWidth();
  }
});

$(function () {
  //if ($('.l-sidebar-left_inner').size()) {leftMenuFontSize();}
  if ($('.l-menu-top_inner').size()) {
    $('.l-menu-top_inner nav').horizontalNav();
    /* fMenuTopInnerWidht();
     equalHeight($('.b-menu-top li'));
     equalHeight($('.b-menu-top a')); */
    //fMenuTopAVertAlign();
  }
  if ($('.b-footer').size()) {
    //footerWidth();
  }
  //if ($('.l-sidebar-left_inner--cont').size()) {$('.l-sidebar-left_inner--cont').jScrollPane({scrollbarOnLeft:true});}
  Cufon.replace('.b-header_inner h1'); // Works without a selector engine
  //if ($('.b-pics-slider_small').size()) {picsSliderSmallIndexChange();}
});

$(window).load(function () {
  $('#slider').nivoSlider({
    effect:'random', // Specify sets like: 'fold,fade,sliceDown'
    slices:15, // For slice animations
    boxCols:8, // For box animations
    boxRows:4, // For box animations
    animSpeed:500, // Slide transition speed
    pauseTime:3000, // How long each slide will show
    startSlide:0, // Set starting Slide (0 index)
    directionNav:true, // Next & Prev navigation
    directionNavHide:true, // Only show on hover
    controlNav:true, // 1,2,3... navigation
    controlNavThumbs:false, // Use thumbnails for Control Nav
    pauseOnHover:true, // Stop animation while hovering
    manualAdvance:false, // Force manual transitions
    prevText:'Prev', // Prev directionNav text
    nextText:'Next', // Next directionNav text
    randomStart:false, // Start on a random slide
    beforeChange:function () {
    }, // Triggers before a slide transition
    afterChange:function () {
    }, // Triggers after a slide transition
    slideshowEnd:function () {
    }, // Triggers after all slides have been shown
    lastSlide:function () {
    }, // Triggers when last slide is shown
    afterLoad:function () {
    } // Triggers when slider has loaded
  });
});
