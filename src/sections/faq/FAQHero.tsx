import React from "react";
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
});

function FAQHero() {
  return (
    <div className="max-w-[1240px] mx-auto px-4 pt-8">
      <div className="flex text-[#E0E0E0] flex-col items-center gap-8">
        <div className="pb-6">
          <h4 className="text-[72px] font-bold text-center pb-3">
             Frequently asked<br></br> questions about
            <span className={`${playfair.className} text-[#F7E967]`}> MozForex</span>
            </h4>
          <p className="text-center text-[20px]">
            Got questions? We’ve got answers. Explore common topics to get the
            clarity you need fast and straight to the point.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQHero;
