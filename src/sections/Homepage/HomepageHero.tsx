import Link from "next/link";
import React from "react";
import HeroCarousel from "./HeroCarousel";
import ContactBtn from "@/src/components/ContactBtn";
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
});


function HomepageHero() {
  return (
    <div>
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="flex text-[#E0E0E0] flex-col items-center gap-8">
          <div>
            <h4 className="text-[72px] font-bold text-center pb-3">
              Unlock global financial opportunities with
              <span className={`${playfair.className} text-[#F7E967]`}> MozForex.</span>
              </h4>
            <p className="text-center text-[20px]">
              Seamless money exchange, expert brokerage, and powerful trading
              tools – All in one place.
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <ContactBtn isArrowRight={true} />
            <Link href="#" className="underline text-[16px]">
              EXPLORE OUR SERVICES
            </Link>
          </div>
        </div>
      </div>
      <HeroCarousel/>
    </div>
  );
}

export default HomepageHero;
