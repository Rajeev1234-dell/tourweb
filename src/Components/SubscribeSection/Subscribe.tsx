"use client";
import React from "react";
import { subscribetype } from "@/TypeScript/type";
import Button from "../Button/Button";

type subsprops = {
  subscribedata: subscribetype;
};

function Subscribe({ subscribedata }: subsprops) {
  const { title, desc } = subscribedata;
  const formatedtext = title.replace(":", ": \n");

  return (
    <section className="container">
      <div className="m-auto sm:max-w-[866px]">
        <h2 className="text-center whitespace-pre-wrap sm:leading-[3.375rem]">
          {formatedtext}
        </h2>
        <p className="text-center sm:w-[568px] m-auto mt-7 text-lightgray">
          {desc}
        </p>
      </div>
      <div className="max-w-[765px] m-auto sm:flex mt-11">
        <input
          type="text"
          placeholder="Enter your name"
          className="sm:w-[70%] max-sm:w-full rounded-xl sm:ps-5 max-sm:p-4 focus:outline-none max-sm:text-center"
          style={{ backgroundColor: "#F6F6F6" }}
        />
        <div className="whitespace-nowrap max-sm:mt-6">
          <Button
            label={subscribedata.btn.label}
            link={subscribedata.btn.url}
            variation={subscribedata.btn.variation}
            arrow_icon=""
          />
        </div>
      </div>
      {/* <div className="max-w-[576px]">
        <input type="text" className="w-full" />
        <span>
          <Button
            label={subscribedata.btn.label}
            link={subscribedata.btn.url}
            variation={subscribedata.btn.variation}
          />
        </span>
      </div> */}
    </section>
  );
}

export default Subscribe;
