import React from "react";
import { abouttype } from "@/TypeScript/type";
import Image from "next/image";

type props = {
  aboutdata: abouttype;
};

function About({ aboutdata }: props) {
  return (
    <section className="container">
      <div className="max-w-[664px] m-auto">
        <h2 className="text-center">{aboutdata.title}</h2>
        <p className="text-center mt-[26px] text-cardtext">{aboutdata.desc}</p>
      </div>
      <div className="bg-skincolor min-h-[100px] max-sm:h-[35px] max-sm:mt-[90px] max-md:mt-[190px] mt-[640px] rounded-[2.5rem] relative">
        <div className="max-sm:max-w-[100px] max-md:max-w-[150px] sm:w-80 h-auto absolute left-0 bottom-0">
          <Image src={aboutdata.profile_img} alt="" width={100} height={100} />
        </div>
        <div className="max-sm:max-w-[100px] max-md:max-w-[150px] sm:w-[525px] h-auto absolute left-1/2 transform -translate-x-1/2 md:left-[471px] bottom-0">
          <Image src={aboutdata.liberty_img} alt="" width={100} height={100} />
        </div>
        <div className="max-sm:max-w-[100px] max-md:max-w-[150px] sm:w-[233px] h-auto absolute right-[70px] sm:right-[250px] bottom[0] sm:bottom-[-31px] max-sm:hidden bag max-md:hidden">
          <Image src={aboutdata.bag_img} alt="" width={100} height={100} />
        </div>
        <div className="max-sm:max-w-[100px] max-md:max-w-[150px] sm:w-[303px] h-auto absolute md:right-[-31px] right-[-10px] bottom-0">
          <Image src={aboutdata.minar_img} alt="" width={100} height={100} />
        </div>
      </div>
    </section>
  );
}

export default About;
