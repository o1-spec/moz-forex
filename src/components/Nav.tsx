"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ContactBtn from "./ContactBtn";

function Nav({ name }: { name?: string }) {
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navInitialPosition = 40;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > navInitialPosition) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`py-12 pt-10 px-4 max-w-[1240px] mx-auto transition-all duration-300 ${
      isSticky ? "pt-0 fixed top-0 left-0 right-0 z-50 max-w-full px-4" : ""
    }`}>
      <div className={`bg-[#2F2F3040] p-6 py-5 rounded-xl h-[90px] flex justify-between items-center border border-[#2F2F30] shadow-lg backdrop-blur-sm transition-all duration-300 ${
        isSticky ? "rounded-none rounded-b-xl border-t-0 -translate-y-[30px] -z-20" : ""
      }`}>
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={70} height={70} className="w-[81px] h-[50px]" />
        </Link>
        <nav className="flex gap-12 items-center text-[18px]">
          <Link
            href="/about"
            className={`${
              name === "about" ? "text-[#F7E967]" : "text-white"
            } hover:text-[#F7E967]`}
          >
            About Us
          </Link>
          <Link
            href="/faq"
            className={`${
              name === "faq" ? "text-[#F7E967]" : "text-white"
            } hover:text-[#F7E967]`}
          >
            FAQs
          </Link>
          <ContactBtn isArrowRight={true} />
        </nav>
      </div>
      {isSticky && <div className="h-[122px]"></div>} 
    </div>
  );
}

export default Nav;