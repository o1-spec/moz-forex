import Image from "next/image";
import React from "react";

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
    <section className="max-w-[1200px] mx-auto px-4 py-28  text-[#E0E0E0]">
      <div className="mb-5">
        <span
          className="text-sm text-white px-4 py-3 rounded-lg"
          style={{
            background: "linear-gradient(90deg, #5F5F61, #BEB66580)",
          }}
        >
          Our testimonials
        </span>
      </div>

      <h2 className="text-4xl font-bold mb-2">
        What our traders are <span className="text-[#F7E967]">saying</span>
      </h2>
      <p className="mb-12 text-gray-400 max-w-2xl">
        We are expanding our services to provide you with more options for
        global money transfers.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-[#2F2F301A] backdrop-blur-md rounded-lg p-6 flex flex-col gap-4"
          >
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-[#F7E967]">
                  {i < item.stars ? "★" : "☆"}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-300">{item.text}</p>

            <div className="flex items-center gap-3 mt-auto">
              <Image
                src={item.avatar}
                alt={item.name}
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-xs text-gray-400">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
