$('.sl').slick({
  infinite: true,
  dots: true,
  mobileFirst: true,
  slidesToShow: 1,
  arrows: false,
  rows: 1,
  slidesPerRow: 1,
  centerMode: true,
  centerPadding: '20px',
  variableWidth: true,
  responsive: [
    {
      breakpoint: '767',
      settings: {
        slidesToShow: 2,
        centerMode: false,
        arrows: true,
        rows: 2,
        slidesToScroll: 2,
        variableWidth: false,
      }
    },
    {
      breakpoint: '1279',
      settings: {
        slidesToShow: 3,
        centerMode: false,
        arrows: true,
        rows: 2,
        slidesToScroll: 2,
        variableWidth: false
      }
    }
  ] 
});