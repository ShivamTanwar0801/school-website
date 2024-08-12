import React from "react";
import Heading from "./Heading";
import { infrastructure } from "../constants";
import Button from "./Button";

export const Infrastructure = () => {
  return (
    <div className="container py-12">
      <div>
        <Heading
          title="Explore Our State-of-the-Art Campus"
          tag="INFRASTRUCTURS ANd FACILITY"
          text="Our modern infrastructure includes advanced science and computer labs, spacious classrooms, and a well-stocked library with a vast collection of books and digital resources."
          tagStyles="text-n-5 bg-color-5"
          titleStyles="text-n-2"
          textStyles="text-color-2"
        />
      </div>
      <div className="mx-[30px] flex gap-4 flex-wrap flex-col md:flex-row">
        {infrastructure.map((item) => (
          <div key={item.id} className="flex-1 flex justify-center flex-col items-center">
            <div>
              <img
                src={item.image}
                width={290}
                height={240}
                className="object-cover aspect-[290/240]"
              />
            </div>
            <h4 className="text-[16px] font-medium text-n-2 py-4 font-poppins pl-[4px] max-w-[290px]">
              {item.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};
