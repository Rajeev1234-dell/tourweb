"use client";
import React from "react";
import { travelertype } from "@/TypeScript/type";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type props = {
  traveldata: travelertype;
};

function TravelerSection({ traveldata }: props) {
  var settings = {
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
    <section className="bg-skincolor pt-[72px] pb-24">
      <div className="container">
        <div className="max-w-[470px] m-auto text-center">
          <h2>{traveldata.title}</h2>
        </div>
        <div className="lg:w-[832px] m-auto text-center mt-7">
          <p className="text-cardtext">{traveldata.desc}</p>
        </div>
        {/* <div className="flex w-full gap-x-14 m-11 border-2 border-red-500"> */}
        {/* <div className="w-full"></div> */}
        {/* <Slider {...settings}> */}
        <div className="w-full flex gap-6 mt-[44px]">
          <div className="container">
            <Slider {...settings}>
              {traveldata.items?.map((item, index) => (
                <div
                  className="w-full px-4 pb-6 pt-4 bg-white rounded-3xl"
                  key={index}
                >
                  <Image src={item.img} alt="" width={100} height={100} />
                  <p className="text-2xl font-bold mt-4">{item.img_desc}</p>
                  <div className="mt-11 flex items-center justify-between">
                    <div>
                      <p className="text-maptext font-bold">
                        {item.profile_name}
                      </p>
                      <p className="text-xs text-grayvariation">{item.date} </p>
                    </div>
                    <div className="flex items-center gap-[18px]">
                      <div className="flex gap-1 items-center">
                        <Image
                          src={item.likes_icon}
                          alt=""
                          width={100}
                          height={100}
                          className="w-[22px] h-[19px]"
                        />
                        <p className="font-display font-bold text-cardtext">
                          {item.comments}
                        </p>
                      </div>
                      <div className="flex gap-1 items-center">
                        <Image
                          src={item.comments_icon}
                          alt=""
                          width={100}
                          height={100}
                          className="w-[21px] h-[21px]"
                        />
                        <p className="font-display font-bold text-cardtext">
                          {item.likes}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            {/* <div className="flex gap-6 mt-20">
              {traveldata.items?.map((item) => (
                <div className="w-full px-4 pb-6 pt-4 bg-white rounded-3xl">
                  <Image src={item.img} alt="" width={100} height={100} />
                  <p className="text-2xl font-bold mt-4">{item.img_desc}</p>
                  <div className="mt-11 flex items-center justify-between">
                    <div>
                      <p className="text-maptext font-bold">
                        {item.profile_name}
                      </p>
                      <p className="text-xs text-grayvariation">{item.date} </p>
                    </div>
                    <div className="flex items-center gap-[18px]">
                      <div className="flex gap-1 items-center">
                        <Image
                          src={item.likes_icon}
                          alt=""
                          width={100}
                          height={100}
                          className="w-[22px] h-[19px]"
                        />
                        <p className="font-display font-bold text-cardtext">
                          {item.comments}
                        </p>
                      </div>
                      <div className="flex gap-1 items-center">
                        <Image
                          src={item.comments_icon}
                          alt=""
                          width={100}
                          height={100}
                          className="w-[21px] h-[21px]"
                        />
                        <p className="font-display font-bold text-cardtext">
                          {item.likes}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
        {/* </Slider> */}
      </div>
      {/* </div> */}
    </section>
  );
}

export default TravelerSection;
