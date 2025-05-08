"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    question: "What is Mozforex?",
    answer:
      "Mozforex is a financial services platform offering a range of trading and exchange services.",
  },
  {
    question: "How can I become a Moz Trader?",
    answer:
      "You can become a Moz Trader by signing up on our platform and completing the verification process.",
  },
  {
    question: "Is Mozforex a registered company?",
    answer:
      "Yes, Mozforex is a fully registered company operating under regulatory compliance.",
  },
  {
    question: "What currency exchange services does Mozforex offer?",
    answer:
      "Mozforex offers competitive currency exchange services across multiple global currencies.",
  },
  {
    question: "What brokerage services are available through Mozforex?",
    answer:
      "We provide brokerage services including access to forex markets, commodities, and indices.",
  },
  {
    question: "What trading services does Mozforex provide?",
    answer:
      "Mozforex offers online trading, portfolio management, and advanced trading tools.",
  },
  {
    question: "What upcoming services will Mozforex offer?",
    answer:
      "We are working on launching crypto trading, enhanced analytics, and automated trading bots.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[1238px] mx-auto px-4 pb-40 pt-10 text-[#E0E0E0] relative">
      <div className="flex bg-[#2F2F3080] p-12 rounded-2xl shadow-lg">
        <div className="basis-1/2 relative">
          <div className="w-[60%]">
            <h2 className="text-[32px] font-semibold mb-6">
              Frequently Asked Questions (FAQ)
            </h2>
          </div>
          <div className="absolute -left-10 -bottom-16">
            <Image
              src="/question.png"
              alt="question"
              width={200}
              height={200}
              className="mb-4"
            />
          </div>
        </div>
        <div className="basis-1/2 h-[400px] overflow-y-auto flex flex-col gap-3 pr-2 hide-scrollbar">
        {faqs.map((faq, index) => (
            <div key={index} className="shadow-xl">
              <button
                className="w-full flex justify-between items-center rounded-lg bg-[#2F2F30]  text-left text-[16px] font-medium cursor-pointer py-[16px] px-[8px] pl-[30px]"
                onClick={() => toggleFAQ(index)}
              >
                Q: {faq.question}
                {openIndex === index ? (
                  <Minus className="w-[17.5px] h-[17.5px]" />
                ) : (
                  <Plus className="w-[17.5px] h-[17.5px]" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out rounded-lg bg-[#2F2F30] ${
                  openIndex === index
                    ? "max-h-40 py-[16px] px-[8px] pl-[30px] mt-1"
                    : "max-h-0"
                }`}
              >
                <p className="text-[16px] text-gray-300 px-3">
                  A: {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
