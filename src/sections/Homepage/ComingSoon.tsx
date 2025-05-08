import SectionName from "@/src/components/SectionName";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

export default function ComingSoon() {
  return (
    <section className="text-[#e0e0e0] py-28 px-6 md:px-12">
      <div className="max-w-[1240px] mx-auto">
        <SectionName name={"Coming Soon"} />

        <h2 className="text-3xl md:text-[56px] font-semibold mb-2">
          Expand your options for
          <span className={`${playfair.className} text-[#F7E967]`}>
            {" "}
            transfers
          </span>
        </h2>

        <p className="text-[24px] mb-12">
          We are expanding our services to provide you with even more options
          for global money transfers.
        </p>

        <div className="relative overflow-hidden bg-[#1e1e1e] flex gap-3 items-center rounded-xl border border-[#5F5F61] py-[24px] px-[32px] transition-all duration-500 ease-in-out group">
  {/* Your gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#2b2a28]/80 via-[#4f4c33]/80 to-[#2b2a28]/80 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 rounded-xl"></div>

  {/* Your content */}
  <div className="relative z-10 flex flex-wrap justify-center items-center gap-4">
    <p className="text-[24px] font-semibold md:text-base">
      Look out for the addition of :
    </p>
    <Image
      src="/logos/westernUnion-logo.png"
      alt="Western Union"
      width={150}
      height={150}
      className="w-[205px] h-[59px]"
    />
    <Image
      src="/logos/world-remit-logo.png"
      alt="WorldRemit"
      width={150}
      height={150}
      className="w-[205px] h-[59px]"
    />
    <Image
      src="/logos/moneyGram-icon.png"
      alt="MoneyGram"
      width={150}
      height={150}
      className="w-[205px] h-[59px]"
    />
    <Image
      src="/logos/ria-icon.png"
      alt="Ria"
      width={100}
      height={150}
      className="w-[205px] h-[59px]"
    />
  </div>
</div>
      </div>
    </section>
  );
}
