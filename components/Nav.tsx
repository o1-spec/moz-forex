import Image from "next/image";
import Link from "next/link";
import React from "react";

function Nav({ name }: { name?: string }) {
  return (
    <div className="py-12 pt-10 px-4 max-w-[1200px] mx-auto">
      <div className="bg-[#2F2F3040] p-6 py-3 rounded-xl flex justify-between items-center border border-[#2F2F30] shadow-lg">
        <div>
          <Image src="/logo.png" alt="Logo" width={70} height={70} />
        </div>
        <nav className="flex gap-12 items-center text-[13px]">
          <Link
            href="/"
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
          <Link
            href="/contact"
            className="border border-[#F7E967] text-[#F7E967] px-4 py-2 rounded-lg"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
