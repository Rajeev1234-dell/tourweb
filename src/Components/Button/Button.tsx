import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface btnprops {
  variation: string;
  label: string;
  link: string;
  arrow_icon?: string;
}

function Button({ variation, label, link, arrow_icon }: btnprops) {
  return (
    <div
      className={`flex items-center max-sm:justify-center gap-2 hover:bg-yellow-100 btn ${
        variation === "primary" ? "btn_primary" : "btn_secondary"
      }`}
    >
      <Link href={link} className="text-xl">
        {label}
      </Link>
      {arrow_icon && (
        <Image
          src={arrow_icon}
          alt=""
          width={100}
          height={100}
          className="w-auto h-[16px]"
        />
      )}
    </div>
  );
}

export default Button;
