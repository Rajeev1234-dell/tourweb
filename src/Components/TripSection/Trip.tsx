import React from "react";
import { triptype } from "@/TypeScript/type";
import Image from "next/image";

type props = {
  tripdata: triptype;
};

function Trip({ tripdata }: props) {
  return (
    <section className="bg-skincolor pt-[50px] sm:pt-[72px] pb-[60px] sm:pb-[80px]">
      <div className="container md:flex gap-[4.75rem] items-center">
        <div className="md:w-[50%]">
          <h2 className="text-[32px] leading-[36px] sm:text-[2.5rem] sm:leading-[54px] md:max-w-[457px] max-sm:text-center">
            {tripdata.title}
          </h2>
          <p className="mt-7 text-cardtext">{tripdata.desc}</p>
          {tripdata.instruction?.map((content, index) => (
            <div
              className="mt-5 flex gap-4 items-start max-sm:mt-[50px]"
              key={index}
            >
              <span className="bg-primarybg py-2 px-4 rounded-lg text-2xl font-medium">
                {content.no}
              </span>
              <div>
                <p className="font-bold">{content.heading}</p>
                <p className="mt-2 text-cardtext leading-4">
                  {content.content}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="md:w-[50%] max-sm:mt-7">
          <Image
            src={tripdata.tripimg}
            width={100}
            height={100}
            alt=""
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}

export default Trip;
