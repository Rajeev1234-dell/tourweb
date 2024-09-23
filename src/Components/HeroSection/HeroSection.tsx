import React from "react";
import { herotype } from "@/TypeScript/type";
import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";
import HeroTab from "./HeroTab";

interface heroprops {
  herodata: herotype;
}

function HeroSection({ herodata }: heroprops) {
  return (
    <section className="container relative max-sm:mb-[500px]">
      <Navbar navdata={herodata} />
      <div
        style={{ backgroundImage: `url(${herodata.hero_img})` }}
        className="bg-cover bg-center sm:px-[2rem] md:px-[4.75rem] rounded-[2.5rem] pt-8 pb-[14.5rem]"
      >
        <div className="flex text-white items-center gap-4 max-sm:mx-5 max-sm:gap-1">
          <p className="text-sm">{herodata.offer_title}</p>
          <div className="border-[1px] border-x-white w-[66%] h-0"></div>
          <p className="text-sm">{herodata.offer_date}</p>
        </div>
        <div className="sm:max-w-[48.375rem] sm:mt-[7.5rem] mt-[4rem]">
          <h1 className="tracking-wide md:max-sm:text-center md:mx-5">
            {herodata.title}
          </h1>
          <div className="max-w-[566px]">
            <p className="text-xl leading-6 mt-11 text-white font-bold max-sm:text-center max-sm:mx-5">
              {herodata.desc}
            </p>
          </div>
          <div className="mt-[3.875rem] flex gap-4 max-sm:justify-center max-sm:flex-col max-sm:mx-5">
            <Button
              label={herodata.hero_btn.label}
              link={herodata.hero_btn.url}
              variation={herodata.hero_btn.variation}
              // arrow_icon=""
            />
            <Button
              arrow_icon=""
              label={herodata.hero_more.label}
              link={herodata.hero_more.url}
              variation={herodata.hero_more.variation}
            />
          </div>
        </div>
        <div className="absolute base:bottom-[-70px] max-sm:bottom[50px] shadow-2xl rounded-b-3xl w-[80%] left-1/2 transform -translate-x-1/2">
          <HeroTab data={herodata.tab_inputs} />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
