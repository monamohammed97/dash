$(".business-slick").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
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
      breakpoint: 600,
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
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
