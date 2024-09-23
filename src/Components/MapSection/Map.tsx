import React from "react";
import { maptype } from "@/TypeScript/type";
import Image from "next/image";

type props = {
  mapdata: maptype;
};

function Map({ mapdata }: props) {
  return (
    <section className="container">
      <div className="max-w-[780px] m-auto text-center">
        <h2>{mapdata.title}</h2>
        <p className="sm:px-12 text-cardtext mt-[26px]">{mapdata.desc}</p>
      </div>
      <div className="md:flex gap-x-24 mt-14 items-center">
        <div className="md:w-[40%]">
          <p className="text-xl font-normal text-maptext font-display">
            {mapdata.content}
          </p>
          <p className="mt-4 font-bold text-maptext font-display italic">
            {mapdata.address}
          </p>
          <div className="flex justify-between mt-2 items-center">
            <div className="rounded-[32px] flex gap-2 bg-mapbtn py-2 px-5 items-center">
              <Image
                className="w-3"
                src={mapdata.star_icon}
                alt=""
                width={100}
                height={100}
              />
              <p className="">{mapdata.rating}</p>
            </div>
            <div className="flex gap-4">
              <Image
                src={mapdata.left_arrow}
                alt=""
                width={100}
                height={100}
                className="w-9 h-auto"
              />
              <Image
                src={mapdata.right_arrow}
                alt=""
                width={100}
                height={100}
                className="w-9 h-auto"
              />
            </div>
          </div>
        </div>
        <div className="md:w-[60%] relative max-sm:mt-10 max-md:mt-20">
          <Image src={mapdata.map} alt="" width={100} height={100} />
          <div className="max-md:display-none w-16 absolute top-[94px] left-[84px]">
            <Image src={mapdata.profile1} alt="" width={100} height={100} />
          </div>
          <div className="max-md:display-none map_image absolute bottom-[34px] left-[150px]">
            <Image src={mapdata.profile2} alt="" width={100} height={100} />
          </div>
          <div className="max-md:display-none map_image absolute top-[119px] right-[286px]">
            <Image src={mapdata.profile3} alt="" width={100} height={100} />
          </div>
          <div className="max-md:display-none map_image absolute top-[50px] right-[223px]">
            <Image src={mapdata.profile4} alt="" width={100} height={100} />
          </div>
          <div className="max-md:display-none map_image absolute top-[155px] right-[151px]">
            <Image src={mapdata.profile5} alt="" width={100} height={100} />
          </div>
          <div className="max-md:display-none map_image absolute top-[120px] right-[58px]">
            <Image src={mapdata.profile6} alt="" width={100} height={100} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Map;
