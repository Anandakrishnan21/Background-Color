import { Link } from "@nextui-org/react";
import { Button } from "antd";
import React from "react";
import { links } from "../utils/data";

function Header() {
  return (
    <nav className="border-b-[1px] border-neutral-300 flex justify-between items-center p-3 px-5 md:px-12 sticky top-0 z-[10]">
      <header className="text-xl font-bold">
        <p className="hidden md:flex">COLORGRAD</p>
        <p className="flex md:hidden">CG</p>
      </header>
      <div className="flex gap-2">
        <Button
          type="dashed"
          className="border-neutral-600 hover:text-neutral-900"
        >
          Introducing v1.0.cg
        </Button>
        <ul className="flex gap-2">
          {links.map((link) => (
            <Link key={link.id} href={link.href} color="foreground">
              <link.icon size={24} className="text-neutral-800" />
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
