import Slider from "react-slick";

export const Carousel = ({ images }) => {
  const settings = {
    autoplay: true,
    adaptativeHeight: true,
    lazyLoad: true,
    infinite: true,
    autoplaySpeed: 4000,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    draggable: true,
    pauseOnHover: false,
  };
  
  return (
    <Slider {...settings}>
      {images.map((image) => {
        return (
          <div key={image}>
            <img
              alt="slider-img"
              src={image}
              className="h-[70vh] max-w-screen w-full object-cover"
            />
          </div>
        );
      })}
    </Slider>
  );
};