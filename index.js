$('.slider').slick({
    infinite: true,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      fade: true,
      fadeSpeed: 1000
  });
  
  var myCarousel = document.querySelector('#myCarousel')
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000,
    wrap: false
  })