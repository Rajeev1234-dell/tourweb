import React from "react";
import { choosetype } from "@/TypeScript/type";
import Image from "next/image";

type props = {
  choosedata: choosetype;
};

function Choose({ choosedata }: props) {
  return (
    <section className="container">
      <div className="max-w-[700px] m-auto text-center">
        <h2>{choosedata.title}</h2>
        <p className="mt-[1.625rem] text-cardtext">{choosedata.desc}</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-11 sm:gap-[5.375rem] mt-[3.625rem]">
        {choosedata.items.map((item, index) => {
          return (
            <div className="text-center" key={index}>
              <Image
                src={item.icon}
                alt=""
                width={100}
                height={100}
                className="w-[4.5rem] h-auto m-auto"
              />
              <h3 className="mt-6">{item.heading}</h3>
              <p className="mt-3 text-cardtext">{item.content}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Choose;
