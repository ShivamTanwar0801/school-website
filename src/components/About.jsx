import React from "react";
import { aboutBackground, principal } from "../assets";
import Heading from "./Heading";
import { about } from "../constants";

const About = () => {
  return (
    <div className="w-full h-full bg-color-6 relative" id="about-us">
      <div
        className=" w-full h-full opacity-15 absolute bg-no-repeat bg-cover left-0 right-0 top-0"
        style={{
          backgroundImage: `url(${aboutBackground})`,
        }}
      />
      <div className="container py-12 md:px-[130px]">
        <div className="">
          <Heading
            title="A Tradition of Excellence and Innovation"
            text="Founded in 1985, Springdale Public School has been a beacon of academic excellence and holistic development for over three decades. Our mission is to empower students with the knowledge, skills, and values necessary to navigate an ever-changing world."
            tag="About us"
            className="text-white flex justify-center flex-col items-center"
            tagStyles="bg-color-2"
          />
        </div>

        <div className="flex flex-wrap gap-4 justify-center xl:items-end xl:justify-end relative flex-col lg:flex-row">
          {about.map((item) => (
            <div
              key={item.id}
              className="flex-1 lg:min-w-[560px] max-w-[775px] border bg-color-7 z-5 min-h-[240px]"
            >
              <h4 className="text-[24px] font-semibold text-n-1 leading-[31px] pt-8 pb-6 px-6">
                {item.title}
              </h4>
              <p className="text-[18px] text-n-1 px-6 pb-8 font-thin">
                {item.info}
              </p>
            </div>
          ))}
          <div className="absolute border hidden bg-color-7 z-5 xl:flex flex-col left-0">
            <div className="mx-11 my-7">
              <img src={principal} width={255} height={264} />
            </div>
            <div className="pl-10 pb-4">
              <h4 className="text-n-6 text-[24px] font-semibold">
                Emma Williams
              </h4>
              <p className="text-[18px] font-medium text-n-1">Principal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
