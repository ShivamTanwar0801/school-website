import React from "react";
import Button from "./Button";
import { home } from "../assets";
import school from "/videos/school.mp4";

const Hero = () => {
  return (
    <div className="relative overflow-visible">
      <div className="bg-color-6 w-full h-[716px]">
        <div className="container pt-[4rem]" id="hero">
          <div className="max-w-[62rem] mx-auto text-center">
            <h1 className="h1 text-n-1">
              Empowering Young Minds for a Brighter Tomorrow
            </h1>
            <p className="body-1 text-n-1/80 max-w-[730px] pt-12 mx-auto">
              Join us at Springdale Public School, where education meets
              innovation. Discover a nurturing environment that fosters academic
              excellence, creativity, and lifelong learning. Let's build a
              brighter future together.
            </p>
            <Button className="bg-color-3 mx-2 sm:my-12 mt-8" arrowButton>
              Book a Counselling Session
            </Button>
            <Button className="border mx-2 my-8 s" arrowButton>
              Admission Process
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-center absolute left-0 right-0 top-[70%] mt-[120px] xs:mt-[80px] mds:mt-[40px]">
        <video
          width={1220}
          loop={true}
          autoPlay
          muted
          playsInline
          className="aspect-[2/1] w-full max-w-[1220px]"
        >
          <source src={school} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Hero;
