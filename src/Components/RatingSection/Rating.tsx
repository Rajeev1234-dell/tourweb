"use client";
import React from "react";
import { ratingtype } from "@/TypeScript/type";
import Image from "next/image";

type props = {
  data: ratingtype;
};

function Rating({ data }: props) {
  return (
    <section className="container md:flex gap-[86px] items-center">
      <div className="md:w-[55%]">
        <h2 className="max-sm:text-center">{data.title}</h2>
        <div className="md:max-w-[500px] max-sm:text-center">
          <p className="mt-7 text-lightgray">{data.desc}</p>
          <p className="mt-7 text-lightgray">{data.sub_desc}</p>
        </div>
      </div>
      <div className="md:w-[45%] max-sm:mt-6">
        <Image src={data.image} width={100} height={100} alt="" unoptimized />
      </div>
    </section>
  );
}

export default Rating;
