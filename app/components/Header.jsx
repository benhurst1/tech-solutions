"use client";

import NavBar from "./Navbar";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="bg-slate-100 flex justify-between w-full px-[20%]">
      <Image
        src="/images/logo.jpg"
        width={100}
        height={100}
        priority={true}
        alt="logo of brand"
      />
      {navOpen ? (
        <div>
          <button
            className="md:hidden text-slate-700"
            onClick={() => setNavOpen(false)}
          >
            X
          </button>
          <nav className="md:hidden  text-slate-700 flex flex-col  justify-center gap-[3%] pb-3 items-end w-full">
            <NavBar />
          </nav>
        </div>
      ) : (
        <button
          className="md:hidden text-slate-700"
          onClick={() => setNavOpen(true)}
        >
          =
        </button>
      )}

      <nav className="md:visible hidden text-slate-700 md:flex flex-row  justify-center gap-[3%] pb-3 items-end w-full">
        <NavBar />
      </nav>
    </div>
  );
}
