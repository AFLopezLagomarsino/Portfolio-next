"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import { navLinks } from "../utils/navlinks";
import {useState} from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
const NavBar = () => {

  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-95">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
          LOGO
        </Link>
        <div className="mobile-menu block md:hidden">
          {
            !open ? (
              <button onClick={() => setOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button onClick={() => setOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                <XMarkIcon className="h-5 w-5" />
              </button>
            )
          }
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map(({ path, title }, index) => (
              <li key={index}>
                <NavLink href={path} title={title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {
        open && <MenuOverlay links={navLinks} />
      }
    </nav>
  );
};

export default NavBar;
