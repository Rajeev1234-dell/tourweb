"use client";
import React from "react";
import { placetype } from "@/TypeScript/type";
import Image from "next/image";
import Button from "../Button/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type itemsprops = {
  items: placetype["items"];
};
function DestinationItem({ items }: itemsprops) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container mt-[42px]">
      <Slider {...settings}>
        {items?.map((item, index) => (
          <div
            className="pb-9 rounded-3xl relative box border-[1px]"
            key={index}
          >
            <div className="flex gap-2 items-center bg-mapbtn absolute top-8 right-5 px-5 rounded-xl py-1">
              <Image
                src={item.star}
                alt=""
                width={100}
                height={100}
                className="w-[16px] h-[16px]"
              />
              <p className="font-bold text-tourtext">{item.rating}</p>
            </div>
            <div className="">
              <Image
                className="rounded-t-3xl"
                src={item.image.src1}
                alt={item.image.alt}
                width={100}
                height={100}
                unoptimized
              />
            </div>
            <div className="px-[1.125rem]">
              <h3 className="mt-5">{item.placename}</h3>
              <div className="flex gap-x-3 mt-3">
                <Image
                  src={item.location}
                  alt=""
                  width={100}
                  height={100}
                  className="w-6 h-auto"
                />
                <p className="text-cardtext font-bold">{item.city}</p>
              </div>
              <div className="flex justify-between items-center mt-5">
                <div>
                  <p className="text-lightyellow font-extrabold text-2xl">
                    {item.currency}
                    <span>{item.price}</span>
                  </p>
                  <p className="text-lightgray font-medium">{item.person}</p>
                </div>
                <Button
                  label={item.btn.label}
                  link={item.btn.url}
                  variation={item.btn.variation}
                  arrow_icon=""
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default DestinationItem;
