import React from "react";
import Link from "next/link";
import OurStory from "./OurStory";
import ContactBtn from "@/components/ContactBtn";
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
});

function AboutHero() {
  return (
    <div className="pb-16">
      <div className="max-w-[700px] mx-auto px-4">
        <div className="flex text-[#E0E0E0] flex-col items-center gap-8">
          <div>
            <h4 className="text-[43px] font-bold text-center pb-3">
              Welcome to
              <span className={`${playfair.className} text-[#F7E967]`}> MozForex,</span>
              your gateway to the finance world
            </h4>
            <p className="text-center text-[13px]">
              We&apos;re more than just a money exchange service; we&apos;re your partner
              in navigating the complexities of international finance
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <ContactBtn isArrowRight={true} />
            <Link href="#" className="underline text-[15px]">
              EXPLORE OUR SERVICES
            </Link>
          </div>
        </div>
      </div>
      <OurStory/>
    </div>
  );
}

export default AboutHero;
