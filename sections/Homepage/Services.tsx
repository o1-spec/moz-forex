import SectionName from "@/components/SectionName";
import { Banknote, LineChart, Briefcase } from "lucide-react";
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
});


export default function Services() {
  return (
    <section className="text-[#e0e0e0] py-16 px-6 md:px-12">
      <div className="max-w-[1150px] mx-auto">
       <SectionName name={"Our Services"} />
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          Unlock precision, trade with
          <span className={`${playfair.className} text-[#F7E967]`}> Power</span>
          </h2>

        <p className="text-gray-400 mb-12 text-lg">
          Powerful tools, real-time data, and secure systems to trade with total
          confidence.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#1e1e1e] p-8 rounded-xl border border-gray-700 flex flex-col items-start text-left">
            <div className="rounded-full bg-[##2F2F30] thick-shadow p-4 mb-4">
              <Banknote size={28} className="text-gray-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Money Exchange</h3>
            <p className="text-gray-400">
              Enjoy competitive exchange rates and fast, secure transfers to a
              wide range of global destinations with Mozaforex.
            </p>
          </div>

          <div className="bg-[#1e1e1e] p-8 rounded-xl border border-gray-700 flex flex-col items-start text-left">
            <div className="rounded-full bg-[##2F2F30] thick-shadow p-4 mb-4">
              <LineChart size={28} className=" text-gray-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Trading Services</h3>
            <p className="text-gray-400">
              Utilize Mozaforex’s powerful trading platforms and tools to
              capitalize on market several opportunities.
            </p>
          </div>

          <div className="bg-[#1e1e1e] p-8 rounded-xl border border-gray-700 flex flex-col items-start text-left">
            <div className="rounded-full bg-[##2F2F30] thick-shadow p-4 mb-4">
              <Briefcase size={28} className=" text-gray-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Brokerage Services</h3>
            <p className="text-gray-400">
              With Mozaforex you have access expert guidance and personalized
              investment strategies from our experienced brokers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
