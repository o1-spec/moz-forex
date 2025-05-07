import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function ContactBtn({ isArrowRight }: { isArrowRight?: boolean }) {
  return (
    <Link
      href="/contact"
      className="border border-[#F7E967] text-[#F7E967] px-4 flex gap-2 items-center py-2 rounded-lg"
    >
      Contact Us
      {isArrowRight && <ArrowRight width={14} height={14} />}
    </Link>
  );
}

export default ContactBtn;
