import { ArrowRight } from "lucide-react";
import React from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

function CTA() {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-28">
  <div
    className="relative rounded-2xl w-full  bg-cover bg-center py-8 px-10 overflow-hidden"
    style={{ backgroundImage: "url('/home-cta.jpg')" }}
  >
    {/* <div className="absolute inset-0 bg-black/40 z-0" /> */}

    <div className="relative z-10 flex flex-col items-center justify-center py-14 px-8 backdrop-blur-lg bg-[#2F2F301A] rounded-2xl">
      <h4 className="text-[38px] md:text-[48px] font-bold text-center text-white max-w-[1074px]">
        Ready to experience the{" "}
        <span className={`${playfair.className} font-normal italic`}>
          MozForex
        </span>{" "}
        difference? Join our community and unlock a world of financial
        opportunities.
      </h4>
      <button className="mt-8 flex items-center gap-2 border border-white rounded-lg px-[32px] py-[16px] bg-transparent uppercase text-[18px] cursor-pointer text-white hover:bg-black hover:border-black transition">
        Contact Us
        <ArrowRight width={12} height={12} />
      </button>
    </div>
  </div>
</div>

  );
}

export default CTA;
