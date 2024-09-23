import React from "react";
import { placetype } from "@/TypeScript/type";
import DestinationItem from "./DestinationItem";

type props = {
  placedata: placetype;
};

function Destination({ placedata }: props) {
  return (
    <section className="container">
      <div className="max-w-[742px] m-auto text-center">
        <h2>{placedata.title}</h2>
        <p className="text-lightgray sm:px-10 mt-[1.625rem]">
          {placedata.desc}
        </p>
      </div>
      <DestinationItem items={placedata.items} />
    </section>
  );
}

export default Destination;
