import React from "react";
import { Logo } from "./logo";
import Search from "./Search";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="fixed top-0 w-full h-20 z-[49] px-2 bg-zinc-800 lg:px-4 flex justify-between items-center shadow-sm">
      <Logo />
      <Search />
    </nav>
  );
};

export default Navbar;
