"use client";
import React from "react";
import { footertype } from "@/TypeScript/type";
import Logo from "../Logo/Logo";
import FooterItem from "./FooterItem";
import Image from "next/image";

type footerprops = {
  footerdata: footertype;
};
function Footer({ footerdata }: footerprops) {
  return (
    <section className="bg-skincolor pt-16 pb-6 mb-0">
      <div className="container">
        <div className="md:flex gap-[7.75rem] w-full items-center">
          <div className="sm:w-1/4">
            <div className="max-w-[6.75rem] h-auto">
              <Logo image={footerdata.logo.src} />
              <p className="text-[2.625rem] mt-3 font-semibold text-lightyellow font-clash">
                {footerdata.logo.logo_name}
              </p>
            </div>
            <p className="mt-[2.875rem] font-manrope text-lightgray sm:max-w-[15.913rem]">
              {footerdata.desc}
            </p>
          </div>
          <FooterItem item={footerdata?.items} />
        </div>
        <div className="border-t-[1px] mt-[3.125rem] border-solidcolor pt-5">
          <div className="sm:flex justify-between">
            <div className="flex gap-x-3 max-sm:justify-center">
              {footerdata.icons.map((social, index) => (
                <Image
                  src={social.src}
                  alt=""
                  width={100}
                  height={100}
                  className="w-[1.625rem] h-auto cursor-pointer hover:animate-bounce"
                />
              ))}
            </div>
            <p className="font-medium font-clash text-cardtext max-sm:text-center max-sm:mt-5 hover:text-black cursor-pointer">
              {footerdata.title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
