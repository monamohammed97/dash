$(".business-slick").slick({
  infinite: true,
  lazyLoad: 'ondemand',
  slidesToShow: 3,
  slidesToScroll: 3,
  // autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  dots: true,
  infinite: true,
  speed: 500,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(".clients-slick").slick({
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  arrows: true,
  infinite: true,
  speed: 500,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});
