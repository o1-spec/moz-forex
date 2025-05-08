import SectionName from "@/src/components/SectionName";
import React from "react";
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'], 
});



function LegalInfo() {
  return (
    <section className="text-[#e0e0e0] py-32 px-6 md:px-12">
      <div className="max-w-[1240px] mx-auto">
        <SectionName name={"Legal Information"} />

        <h2 className="text-[56px] md:text-4xl font-semibold mb-2">
          Legal and regulatory
          <span className={`${playfair.className} text-[#F7E967]`}> information</span>
          </h2>

        <p className="mb-12 text-[24px]">
          Transparency and compliance are at the core of everything we do. for
          global money transfers.
        </p>
        <div>
          <p className="text-[32px]">
            Mozforex - Sociedade Unipessoal, Limitada is registered under NUEL
            105031087. Our objectives include purchases and sales of online
            currencies, consultancy and services, human resources, supply of
            office supplies, accounting and auditing, office consumables, supply
            and sale of computer equipment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default LegalInfo;
