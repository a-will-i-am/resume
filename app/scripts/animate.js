//jQuery: runs when the document is ready
$(document).ready(function() {
//gives us our sidenav with click to close, check Materialize documentation for more options
  $('#sidenav-toggle').sideNav({
    closeOnClick: true
  });

//

  $(document).ready(function(){
    $('.slider').slider();
  });
      $('.carousel.carousel-slider').carousel({fullWidth: true});

});
