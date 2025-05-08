import Image from "next/image";
import React from "react";
import SectionName from "./SectionName";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

const testimonials = [
  {
    stars: 3,
    text: "From the personalized insights to the easy order execution, I feel like I’m always one step ahead.",
    name: "Bashir teniola",
    role: "Forex trader",
    avatar: "/assets/avatar.jpg",
  },
  {
    stars: 3,
    text: "From the personalized insights to the easy order execution, I feel like I’m always one step ahead.",
    name: "Bashir teniola",
    role: "Forex trader",
    avatar: "/assets/avatar.jpg",
  },
  {
    stars: 3,
    text: "From the personalized insights to the easy order execution, I feel like I’m always one step ahead.",
    name: "Bashir teniola",
    role: "Forex trader",
    avatar: "/assets/avatar.jpg",
  },
  {
    stars: 3,
    text: "From the personalized insights to the easy order execution, I feel like I’m always one step ahead.",
    name: "Bashir teniola",
    role: "Forex trader",
    avatar: "/assets/avatar.jpg",
  },
  {
    stars: 3,
    text: "From the personalized insights to the easy order execution, I feel like I’m always one step ahead.",
    name: "Bashir teniola",
    role: "Forex trader",
    avatar: "/assets/avatar.jpg",
  },
  {
    stars: 3,
    text: "From the personalized insights to the easy order execution, I feel like I’m always one step ahead.",
    name: "Bashir teniola",
    role: "Forex trader",
    avatar: "/assets/avatar.jpg",
  },
];

function Testimonials() {
  return (
    <section className="max-w-[1240px] mx-auto px-4 py-28  text-[#E0E0E0]">
      <SectionName name={"Our Testimonials"} />

      <h2 className="text-[56px] font-bold mb-2">
        What our traders are
        <span className={`${playfair.className} text-[#F7E967]`}> saying</span>
      </h2>
      <p className="text-[24px]">
        We are expanding our services to provide you with more options for
        global money transfers.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 mt-16 lg:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <div
          key={index}
          className="bg-[#2F2F301A] border duration-300 hover:border-[#5F5F61] border-[#2F2F30] rounded-lg p-6 flex flex-col gap-4 hover:bg-gradient-to-r hover:from-[#2b2a28]/50 hover:via-[#4f4c33]/50 hover:to-[#2b2a28]/50 transition-all"
        >
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-[#F7E967]">
                  {i < item.stars ? (
                    <Image src="/star-colored.png" width={10} height={10} className="w-[16px]" alt="Star" />
                  ) : (
                    <Image src="/star-outline.png" width={10} height={10} className="w-[16px]" alt="Star" />
                  )}
                </span>
              ))}
            </div>
            <p className="text-[18px] text-gray-300">{item.text}</p>

            <div className="flex items-center gap-3 mt-auto">
              <Image
                src={item.avatar}
                alt={item.name}
                width={40}
                height={40}
                className="w-[50px] h-[50px] rounded-full object-cover"
              />
              <div>
                <p className="text-[20px] font-semibold">{item.name}</p>
                <p className="text-[14px] text-gray-400">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
