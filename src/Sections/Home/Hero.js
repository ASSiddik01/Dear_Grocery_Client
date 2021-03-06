import React from "react";
import Slider from "react-slick";
import hero from "../../assets/img/hero.png";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="hero lg:min-h-screen bg-accent rounded ">
          <div className="hero-content flex-col lg:flex-row-reverse lg:p-16 lg:pb-0">
            <div className="hidden lg:block">
              <img alt="" src={hero} className="lg:max-w-md rounded-lg " />
            </div>
            <div className="lg:w-2/4">
              <h4 className="text-xl text-primary mb-4">Save up 30% off</h4>
              <h1 className="text-5xl font-bold text-neutral">
                Bengal Vegetable <br /> farm Organic 100%
              </h1>
              <p className="py-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vehicula faucibus massa est elit maecenas.
              </p>
              <button className="btn btn-primary rounded-full text-base-100 px-8 mb-2">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div className="hero lg:min-h-screen bg-accent rounded ">
          <div className="hero-content flex-col lg:flex-row-reverse lg:p-16 lg:pb-0">
            <div className="hidden lg:block">
              <img alt="" src={hero} className="lg:max-w-md rounded-lg " />
            </div>
            <div className="lg:w-2/4">
              <h4 className="text-xl text-primary mb-4">Save up 50% off</h4>
              <h1 className="text-5xl font-bold text-neutral">
                Bengal Vegetable <br /> farm Organic 100%
              </h1>
              <p className="py-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vehicula faucibus massa est elit maecenas.
              </p>
              <button className="btn btn-primary rounded-full text-base-100 px-8 mb-2">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
