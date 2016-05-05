/*DOCKING NAVBAR AND "CURRENT" STATE*/

$(window).scroll(function (e) {
  var leadheight = $('#top').height();
  var section1 = leadheight + $('#section1').height();
  var section2 = section1 + $('#section2').height();

  $('#navpadding').height($('nav').height());

  var nav1 = document.getElementById("nav1");
  var nav2 = document.getElementById("nav2");
  var nav3 = document.getElementById("nav3");

  if ($(this).scrollTop() < leadheight && $('#backtotop').css('display') == 'block') {
    $('#backtotop').css({ 'display':'none' });
    $('nav').css({ 'position':'relative' });
    $('#navpadding').css({ 'display':'none' });
  } else if ($(this).scrollTop() > leadheight && $('#backtotop').css('display') != 'block') {
    $('#backtotop').css({ 'display':'block' });
    $('nav').css({ 'position':'fixed' , 'top':'0' , 'width':'100%' });
    $('#navpadding').css({ 'display':'block' });
  }

  if ($(this).scrollTop() < leadheight) {
    $('#navtext').css({ 'display':'none' });
  } else if ($(this).width() >= 769 && $(this).scrollTop() > leadheight) {
    $('#navtext').css({ 'display':'inline-block' });
  }

  if ($(this).scrollTop() < leadheight) {
    nav1.className = nav1.className.replace( /(?:^|\s)selected(?!\S)/g , '' );
    nav2.className = nav2.className.replace( /(?:^|\s)selected(?!\S)/g , '' );
    nav3.className = nav3.className.replace( /(?:^|\s)selected(?!\S)/g , '' );
    $('nav').css({ 'position':'relative' });
  } else if ($(this).scrollTop() > leadheight && $(this).scrollTop() < section1) {
    nav1.className = 'selected';
    nav2.className = nav2.className.replace( /(?:^|\s)selected(?!\S)/g , '' );
    nav3.className = nav3.className.replace( /(?:^|\s)selected(?!\S)/g , '' );
  } else if ($(this).scrollTop() > section1 && $(this).scrollTop() < section2) {
    nav1.className = nav1.className.replace( /(?:^|\s)selected(?!\S)/g , '' );
    nav2.className = 'selected';
    nav3.className = nav3.className.replace( /(?:^|\s)selected(?!\S)/g , '' );
  } else if ($(this).scrollTop() > section2) {
    nav1.className = nav1.className.replace( /(?:^|\s)selected(?!\S)/g , '' );
    nav2.className = nav2.className.replace( /(?:^|\s)selected(?!\S)/g , '' );
    nav3.className = 'selected';
  }
});

/*SMOOTH SCROLLING*/
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });
});

/*SQUARE ASPECT RATIOS*/
$(document).ready(function(){
  var projectSquare = $('.project').width();
  $('.project').height(projectSquare);
  $('.projecttext').height(projectSquare);

  var musicSquare = $('.album').width();
  $('.album').height(musicSquare);
});

$(window).resize(function(){
  var projectSquare = $('.project').width();
  $('.project').height(projectSquare);
  $('.projecttext').height(projectSquare);

  var musicSquare = $('.album').width();
  $('.album').height(musicSquare);
});

/* VIDEO ASPECT RATIO*/

$(document).ready(function(){
  var videoWidth = $('#section2').width();
  var videoHeight = videoWidth * 0.5625;
  $('.breakvideo').width(videoWidth);
  $('.breakvideo').height(videoHeight);
  $('.video').height(videoHeight);
});

$(window).resize(function(){
  var videoWidth = $('#section2').width();
  var videoHeight = videoWidth * 0.5625;
  $('.breakvideo').width(videoWidth);
  $('.breakvideo').height(videoHeight);
  $('.video').height(videoHeight);
});
