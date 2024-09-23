import React from "react";
import { partnertype } from "@/TypeScript/type";
import Image from "next/image";

type props = {
  data: partnertype;
};

function Partner({ data }: props) {
  return (
    <section className="container mt-[100px]">
      <div className="max-w-[858px] m-auto">
        <h2 className="text-center">{data.title}</h2>
        <p className="text-center sm:px-11 mt-[1.625rem] text-cardtext">
          {data.desc}
        </p>
      </div>
      <div className="flex justify-center gap-10 sm:gap-[4rem] items-center mt-[3.25rem] flex-wrap">
        {data.brands?.map((brand, index) => (
          <div className="" key={index}>
            <Image
              src={brand.src}
              alt=""
              width={100}
              height={100}
              className="w-20 sm:w-auto h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Partner;
