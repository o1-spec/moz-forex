import SectionName from "@/src/components/SectionName";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Services() {
  return (
    <section className="text-[#e0e0e0] py-20 ">
      <div className="max-w-[1240px] mx-auto">
        <SectionName name={"Our Services"} />
        <h2 className="text-3xl md:text-[56px] font-semibold mb-2">
          Unlock precision, trade with
          <span className={`${playfair.className} text-[#F7E967]`}> Power</span>
        </h2>

        <p className="mb-12 text-[24px]">
          Powerful tools, real-time data, and secure systems to trade with total
          confidence.
        </p>

        <div className="grid md:grid-cols-3">
          <div className="bg-[#2F2F3080] p-8 rounded-xl rounded-r-none border border-[#353535] border-r-0 flex flex-col items-start text-left">
            <div className="rounded-full thick-shadow bg-[##2F2F30] p-4 mb-4">
              <Image
                src="/exchange.png"
                alt="excchange"
                width={28}
                height={28}
                className="w-[24px] h-[24px]"
              />
            </div>
            <h3 className="text-[32px] font-semibold mb-2">Money Exchange</h3>
            <p className="text-[18px]">
              Enjoy competitive exchange rates and fast, secure transfers to a
              wide range of global destinations with Mozaforex.
            </p>
          </div>

          <div className="bg-[#2F2F30]/50  p-8 flex flex-col border border-[#353535] items-start text-left">
            <div className="rounded-full thick-shadow bg-[##2F2F30] p-4 mb-4">
              <Image
                src="/upward-spiral.png"
                alt="Trading"
                width={28}
                height={28}
                className="w-[24px] h-[24px]"
              />
            </div>
            <h3 className="text-[32px] font-semibold mb-2">Trading Services</h3>
            <p className="text-[18px]">
              Utilize Mozaforex’s powerful trading platforms and tools to
              capitalize on market several opportunities.
            </p>
          </div>

          <div className="bg-[#2F2F3080] p-8 rounded-r-xl border border-[#353535] border-l-0 flex flex-col items-start text-left">
            <div className="rounded-full thick-shadow bg-[##2F2F30] p-4 mb-4">
              <Image
                src="/percent.png"
                alt="Percent"
                width={28}
                height={28}
                className="w-[24px] h-[24px]"
              />
            </div>
            <h3 className="text-[32px] font-semibold mb-2">
              Brokerage Services
            </h3>
            <p className="text-[18px]">
              With Mozaforex you have access expert guidance and personalized
              investment strategies from our experienced brokers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
