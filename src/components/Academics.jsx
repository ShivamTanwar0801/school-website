import React from "react";
import Heading from "./Heading";
import Button from "./Button";
import { curriculum } from "../constants";
import { Subjects } from "./Subjects";

const Academics = () => {
  return (
    <div className="container py-12" id="academics">
      <div className="flex justify-between items-center">
        <div className="max-w-[976px]">
          <Heading
            title="Comprehensive Academic Programs"
            tag="ACADEMICS"
            text="Our academic programs are designed to challenge and inspire students across all grade levels, from primary through senior secondary."
            tagStyles="text-n-5 bg-color-5"
            titleStyles="text-n-2"
            textStyles="text-color-2"
            className="md:text-start sm:mx-[30px]"
          />
        </div>
        <div className="mb-16">
          <Button arrowButton className="bg-color-3">
            Contact us now
          </Button>
        </div>
      </div>
      <div className="mt-4 flex gap-4 px-4 flex-wrap flex-col md:flex-row">
        {curriculum.map((item) => (
          <div key={item.id} className="border flex-1 border-color-8 min-w-[205px]">
            <div className="max-w-[258px]">
              <h3 className="font-semibold text-[24px] px-4 py-4 font-poppins">{item.grade}</h3>
            </div>
            <Subjects subjects={item.subjects} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Academics;
