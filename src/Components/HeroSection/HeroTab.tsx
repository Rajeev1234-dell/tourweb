import React from "react";
import { herotype } from "@/TypeScript/type";
import Image from "next/image";
import Button from "../Button/Button";
import search from "../../../public/Icons/Search.svg";
import { Input } from "postcss";

interface tabprops {
  data: herotype["tab_inputs"];
  btn: herotype["nav_search"];
}

function HeroTab({ data, btn }: tabprops) {
  console.log(data);

  return (
    <>
      <div className="base:w-[55%] bg-white mt-10 flex px-8 py-5 justify-between rounded-t-xl sm:flex-wrap">
        <div className="bg-primarybg font-display font-bold max-sm:px-2 sm:px-5 sm:py-2 rounded-lg text-primary text-base">
          💼 <span className="max-sm:hidden">Tours</span>
        </div>
        <div className="bg-secondarybg font-display font-bold max-sm:px-2 sm:px-5 sm:py-2 rounded-lg text-secondary text-base">
          🏨 <span className="max-sm:hidden">Hotels</span>
        </div>
        <div className="bg-secondarybg font-display font-bold max-sm:px-2 sm:px-5 sm:py-2 rounded-lg text-secondary text-base">
          ✈ <span className="max-sm:hidden">Flights</span>
        </div>
        <div className="bg-secondarybg font-display font-bold max-sm:px-2 sm:px-5 sm:py-2 rounded-lg text-secondary text-base">
          🎪 <span className="max-sm:hidden">Shows</span>
        </div>
      </div>
      <div className="w-full bg-white flex max-sm:flex-col max-base:flex-wrap gap-[20px] p-6 rounded-b-xl max-base:rounded-e-none rounded-e-xl md:justify-between">
        {data.map((item, index) => {
          return (
            <div className="w-fit max-sm:m-auto" key={index}>
              <div className="flex items-center gap-[8px]">
                <p className="text-xl font-bold text-primary max-sm:m-auto ">
                  {item.inputs}
                </p>
                <Image
                  src={item.dropdown}
                  width={100}
                  height={100}
                  alt=""
                  className="w-[12px] mt-[5px]"
                />
              </div>
              <input
                type="text"
                className="bg-custom-gray mt-4 text-center text-sm font-display font-medium inline-block min-w-0 p-3 rounded-xl"
                placeholder={item.placeholder}
              />
            </div>
          );
        })}
        <div className="item sm:self-end flex items-center gap-[10px] bg-primarybg py-3 ps-4 sm:pe-8 pe-4 rounded-xl max-sm:m-auto">
          <a
            href="/"
            className="font-display font-bold text-base text-primary block"
          >
            Search
          </a>
          <Image src={search} alt="" width={100} height={100} />
        </div>
      </div>
    </>
  );
}

export default HeroTab;
