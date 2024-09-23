import React from "react";
import { footertype } from "@/TypeScript/type";
import Link from "next/link";

type itemprops = {
  item: footertype["items"];
};

function FooterItem({ item }: itemprops) {
  return (
    <div className="flex justify-between sm:w-3/4 max-sm:mt-7 gap-9 flex-wrap">
      {item?.map((item, index) => (
        <div>
          <p className="font-bold">{item.title}</p>
          <ul className="mt-5">
            {item.links.map((links, index) => (
              <li className="mt-5 font-medium text-base text-cardtext font-display">
                <Link href="/" className="border-hover">
                  {links}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default FooterItem;
