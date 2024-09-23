import React from "react";
import { herotype } from "@/TypeScript/type";
import Navitem from "@/Components/Navbar/Navitem";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import arrow from "../../../public/Icons/arrow.svg";

interface navprops {
  navdata: herotype;
}

function Navbar({ navdata }: navprops) {
  return (
    <nav className="flex items-center justify-between my-12">
      <Logo image={navdata.logo} />
      <Navitem navLinks={navdata.links} />
      <Button
        arrow_icon={arrow}
        variation={navdata.nav_btn.variation}
        label={navdata.nav_btn.label}
        link={navdata.nav_btn.url}
      />
    </nav>
  );
}

export default Navbar;
