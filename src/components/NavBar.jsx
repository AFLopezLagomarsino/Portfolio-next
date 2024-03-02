"use client";
import Link from "next/link";
import NavLink from "./NavLink";
import { navLinks } from "../utils/navlinks";
import {useState, useEffect} from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import Logo from "../../public/LogoXII.png";
const NavBar = () => {
  const [section, setSection] = useState("hero");
  const [open, setOpen] = useState(false);

  function handleScroll() {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const e = document.getElementById(section.id);
      if(section.getBoundingClientRect().top < 100) {
        setSection(section.id);
      }
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  })

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-95">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
          <Image src={Logo} alt="Logo" width={100} height={100}/>
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
              <li key={index} className= {section===path ?"text-white" : "text-[#ADB7BE]"}>
                <NavLink href={`#${path}`} title={title} />
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
