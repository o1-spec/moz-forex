import SectionName from "@/components/SectionName";
import React from "react";

function LegalInfo() {
  return (
    <section className="text-[#e0e0e0] py-28 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <SectionName name={"Legal Information"} />

        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          Legal and regulatory
          <span className="text-[#F7E967]"> information </span>
        </h2>

        <p className="text-gray-400 mb-12 text-[15px]">
          Transparency and compliance are at the core of everything we do. for
          global money transfers.
        </p>
        <div>
          <p className="text-[30px]">
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
