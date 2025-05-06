import CommentEditor from "@/components/CommentEditor";
import { ArrowRight } from "lucide-react";
import React from "react";

function ContactForm() {
  return (
    <div>
      <form className="max-w-[500px] mx-auto px-4 flex flex-col gap-6 pt-20 pb-28">
        <input
          type="text"
          placeholder="Enter your full name"
          className="bg-[#2F2F30] border border-[#5F5F61] shadow-lg py-4 px-6 rounded-lg placeholder:text-[#C4C4C4] focus:border-[#F7E967] focus:outline-none text-white"
        />
        <input
          type="email"
          placeholder="Enter your email address"
          className="bg-[#2F2F30] border border-[#5F5F61] shadow-lg py-4 px-6 rounded-lg placeholder:text-[#C4C4C4] focus:border-[#F7E967] focus:outline-none text-white"
        />
        <CommentEditor />
        <button
          type="submit"
          className="border border-[#F7E967] px-4 py-2.5 rounded-lg flex items-center gap-2 justify-center hover:bg-transparent text-[#F7E967] transition-all duration-300 cursor-pointer my-3"
        >
          <span>Contact Us</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
