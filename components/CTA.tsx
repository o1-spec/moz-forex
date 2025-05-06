import { ArrowRight } from "lucide-react";
import React from "react";

function CTA() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-20">
      <div
        className="rounded-xl w-full shadow-lg bg-cover bg-center py-8 px-8"
        style={{ backgroundImage: "url('/home-cta.jpg')" }}
      >
        <div className="bg-[#2F2F301A] backdrop-blur-sm rounded-lg flex flex-col items-center gap-5 py-14 px-8">
          <h4 className="text-[28px] md:text-[37px] font-bold text-center text-[#E0E0E0] max-w-3xl">
            Ready to experience the <span className="font-normal">Mozforex </span>
            difference? Join our community and unlock a world of financial opportunities.
          </h4>
          <button className="flex items-center gap-2 border border-white rounded-lg px-4 py-3 bg-transparent uppercase text-[13px] cursor-pointer text-[#e0e0e0]">
            Contact Us
            <ArrowRight width={12} height={12} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CTA;
