import React from "react";
import { pointer } from "../assets";

export const Subjects = ({ subjects }) => {
  const list = subjects.split(",");
  console.log(list);
  return (
    <ul className="px-4 py-4">
      {list.map((item, index) => (
        <li key={index} className="flex">
          <div>
            <img src={pointer} width={16} height={24}/>
          </div>
          <p className="text-[16px] font-normal px-4">{item.trim()}</p>
        </li>
      ))}
    </ul>
  );
};
