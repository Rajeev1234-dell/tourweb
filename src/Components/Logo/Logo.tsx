import Image from "next/image";
import React from "react";

interface logoprops {
  image: string;
}

function Logo({ image }: logoprops) {
  return (
    <div className="logo">
      <div className="logo__image">
        <Image src={image} width={100} height={100} alt="" />
      </div>
    </div>
  );
}

export default Logo;
