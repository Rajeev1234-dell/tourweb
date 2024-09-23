import React from "react";
import { herotype } from "@/TypeScript/type";
import Link from "next/link";

interface navitemprops {
  navLinks: herotype["links"];
}

function Navitem({ navLinks }: navitemprops) {
  return (
    <div>
      <ul className="flex gap-x-10 max-md:hidden">
        {navLinks?.map((item, index) => (
          <li
            key={index}
            className="font-clash font-medium text-base text-subheading hover:text-orange-700 hover:shadow-lg"
          >
            <Link href={item.url}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navitem;
