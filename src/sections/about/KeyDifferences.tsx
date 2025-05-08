import SectionName from "@/src/components/SectionName";
import React from "react";
import { MessageSquare, Shield, CheckCircle, Gem } from "lucide-react";
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
});


const features = [
  {
    icon: <MessageSquare size={24} />,
    title: "Comprehensive services",
    description:
      "From seamless currency exchange to professional brokerage and advanced trading platforms, we cater to all your financial needs.",
  },
  {
    icon: <Shield size={24} />,
    title: "Secure & reliable",
    description:
      "We place a high priority on the security of your transactions, implementing robust measures to protect your information.",
  },
  {
    icon: <CheckCircle size={24} />,
    title: "Trusted expertise",
    description:
      "Our team of experienced professionals is dedicated to providing you with personalized support and guidance.",
  },
  {
    icon: <Gem size={24} />,
    title: "Moz trader benefits",
    description:
      "Gain access to exclusive rates, personalized insights, and advanced trading tools by becoming a Moz Trader.",
  },
];

function KeyDifferences() {
  return (
    <section className="text-[#e0e0e0] pb-36 pt-8 px-6 md:px-12">
      <div className="max-w-[1240px] mx-auto">
        <SectionName name={"Key Differentiators"} />
        <h2 className="text-3xl md:text-[72px] font-semibold mb-2">
          What sets Mozforex <span className={`${playfair.className} text-[#F7E967]`}> apart</span>

        </h2>

        <p className="mb-12 text-[20px]">
          Explore the unique benefits that set us apart from other trading
          platforms.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-700 rounded-2xl overflow-hidden">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`
              flex flex-col gap-4 p-8 bg-[#2F2F3080]
              ${idx % 2 === 0 && "border-r border-[#2F2F30]"}
              ${idx < 2 ? "border-b border-[#2F2F30]" : ""}
            `}
            >
              <div className="bg-[#2F2F3080] thick-shadow p-3 rounded-full w-fit">
                {feature.icon}
              </div>
              <h3 className="text-[32px] font-semibold">
                {feature.title}
              </h3>
              <p className="text-[18px]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KeyDifferences;
