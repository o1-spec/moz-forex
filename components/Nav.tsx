import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactBtn from "./ContactBtn";

function Nav({ name }: { name?: string }) {
  return (
    <div className="py-12 pt-10 px-4 max-w-[1150px] mx-auto">
      <div className="bg-[#2F2F3040] p-6 py-3 rounded-xl flex justify-between items-center border border-[#2F2F30] shadow-lg">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={70} height={70} />
        </Link>
        <nav className="flex gap-12 items-center text-[13px]">
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
            FAQ
          </Link>
          <ContactBtn/>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
