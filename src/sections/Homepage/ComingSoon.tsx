import SectionName from "@/src/components/SectionName";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

export default function ComingSoon() {
  return (
    <section className="text-[#e0e0e0] py-28">
      <div className="max-w-[1240px] mx-auto px-4">
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

        <div className="relative overflow-hidden bg-[#2F2F3080] flex gap-3 items-center rounded-xl border border-[#5F5F61] transition-all duration-500 ease-in-out group hover-gradient">
          <div className="relative z-10 flex flex-wrap justify-center items-center gap-4 py-[24px] px-[32px] hover-gradient">
            <p className="text-[24px] font-semibold md:text-base">
              Look out for the addition of :
            </p>
            <div className="flex items-center gap-7">
              <Image
                src="/logos/westernUnion-logo.svg"
                alt="Western Union"
                width={150}
                height={150}
                className="w-[205px] h-[59px]"
              />
              <Image
                src="/logos/world-remit-logo.svg"
                alt="WorldRemit"
                width={150}
                height={150}
                className="w-[205px] h-[59px]"
              />
              <Image
                src="/logos/moneyGram-icon.svg"
                alt="MoneyGram"
                width={150}
                height={150}
                className="w-[205px] h-[59px]"
              />
              <Image
                src="/logos/ria-icon.svg"
                alt="Ria"
                width={100}
                height={150}
                className="w-[205px] h-[59px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
