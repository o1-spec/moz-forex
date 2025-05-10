import CommentEditor from "@/src/components/CommentEditor";
import Image from "next/image";
import React from "react";

function ContactForm() {
  return (
    <div>
      <form className="max-w-[680px] mx-auto px-4 flex flex-col gap-6 pt-28 pb-40">
        <input
          type="text"
          placeholder="Enter your full name"
          className="bg-[#2F2F30] border border-[#5F5F61] shadow-lg py-[20px] px-[24px] rounded-lg placeholder:text-[#C4C4C4] focus:border-[#F7E967] focus:outline-none text-white"
        />
        <input
          type="email"
          placeholder="Enter your email address"
          className="bg-[#2F2F30] border border-[#5F5F61] shadow-lg py-[20px] px-[24px] rounded-lg placeholder:text-[#C4C4C4] focus:border-[#F7E967] focus:outline-none text-white"
        />
        <CommentEditor />
        <button
          type="submit"
          className="border border-[#F7E967] px-[16px] py-[20px] rounded-lg flex items-center gap-2 justify-center hover:bg-[#f7e967] hover:text-black text-[#F7E967] text-[20px] transition-all duration-300 cursor-pointer my-3"
        >
          <span>Contact Us</span>
          <Image src="/arrow-right-yellow.svg" alt="Arrow" width={20} height={20} className="w-[16px] h-[16px]" />
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
