import SectionName from "@/src/components/SectionName";
import Image from "next/image";
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
});

export default function TraderPerks() {
  return (
    <section className="text-[#e0e0e0] bg-[#2F2F304D] py-16
    ">
      <div className="max-w-[1240px] mx-auto">
      <SectionName name={"MozaForex benefits"}/>

        <h2 className="text-md md:text-[56px] font-semibold mb-2">
          Premium perks as a trader with
          <span className={`${playfair.className} text-[#F7E967]`}> MozForex</span>
          </h2>
        <p className="mb-12 text-[24px]">
          Become a trader and gain access to premium perks designed to elevate
          your trading experience.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="col-span-2 bg-[#2F2F3080] shadow-lg py-[56px] px-[24px]  rounded-xl border border-[#5F5F61] flex flex-col items-center text-center">
            <div className="rounded-full bg-[##2F2F30] thick-shadow p-4 mb-4">
              <Image
                src="/exchange-icon.png"
                alt="Mozforex"
                width={30}
                height={30}
                className="w-[30px] h-[30px]"
              />
            </div>
            <h3 className="text-[32px] font-semibold mb-2">
              Preferred Exchange Rates
            </h3>
            <p className="max-w-[1174px] px-56 text-[20px]">
              Gain a competitive edge with access to tighter spreads and
              favorable exchange rates. Whether you&apos;re trading major pairs
              or emerging markets, you’ll benefit from optimized pricing
              designed to maximize your profit potential.
            </p>
          </div>

          <div className="bg-[#2F2F3080] shadow-lg py-[56px] px-[24px] rounded-xl border border-[#5F5F61] flex flex-col items-center text-center">
            <div className="rounded-full bg-[##2F2F30] thick-shadow p-6 mb-4">
              <Image
                src="/chart-icon.png"
                alt="Mozforex"
                width={30}
                height={30}
                className="w-[30px] h-[30px]"
              />
            </div>
            <h3 className="text-[32px] font-semibold mb-2">
              Personalized market insights
            </h3>
            <p className="px-6 max-w-[570px] text-[20px]">
              Get personalized insights with real-time updates, trend alerts,
              and curated reports tailored to your trading style.
            </p>
          </div>

          <div className="bg-[#2F2F3080] shadow-lg py-[56px] px-[24px] rounded-xl border border-[#5F5F61] flex flex-col items-center text-center">
            <div className="rounded-full bg-[##2F2F30] thick-shadow p-4 mb-4">
              <Image
                src="/person-icon.png"
                alt="Mozforex"
                width={30}
                height={30}
                className="w-[30px] h-[30px]"
              />
            </div>
            <h3 className="text-[32px] font-semibold mb-2">
              Priority support access
            </h3>
            <p className="px-14 text-[20px]">
              Get VIP support with faster responses and direct access to expert
              traders anytime you need it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
