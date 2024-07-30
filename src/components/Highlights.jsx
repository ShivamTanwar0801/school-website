import React from "react";
import Heading from "./Heading";
import { carousel, stats } from "../constants";
import Slider from "react-slick";

const Highlights = () => {
  var settings = {
    infinite: true,
    speed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container md:mt-[300px] lg:mt-[450px] xl:mt-[500px] mt-[150px] xs:mt-[180px] sm:mt-[220px]">
      <div className="flex justify-center">
        <Heading
          title="What's Happening at Springdale Public School"
          text="From sports and science exhibitions to cultural festivities, our vibrant community celebrates diversity, innovation, and excellence. Discover the exciting moments that make our school a place of learning, growth, and joy."
          tag="our HIGHLIGHTS"
          titleStyles="text-n-2"
          textStyles="text-color-2"
          tagStyles="text-n-5 bg-color-5"
        />
      </div>

      <div className="flex gap-4 flex-col justify-center">
        <Slider {...settings}>
          {carousel.map((item) => (
            <div key={item.id} className="max-w-[600px] flex-1 h-[468px] pr-6">
              <img src={item.image} />
              <div>
                <h4 className="text-[24px] font-semibold my-4">{item.title}</h4>
                <p className="body-2 font-normal">{item.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="bg-white my-[4rem] border border-color-4 border-t-[6px] mx-[30px] flex flex-col flex-wrap md:flex-row lg:flex-nowrap items-center">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="h-[162px] flex justify-center flex-col items-center lg:w-full w-[263px]"
          >
            <h1 className="font-semibold text-[36px] md:text-[42] lg:text-[64px] text-n-3 leading-[83px]">
              {stat.title}
            </h1>
            <p className="font-normal text-[12px] md:text-[18px] text-n-5 leading-[27px] pt-2">
              {stat.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
