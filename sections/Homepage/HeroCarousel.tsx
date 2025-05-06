"use client";
import { useState, useEffect, SetStateAction } from "react";
import classNames from "classnames";

const slides = [
  {
    id: 1,
    image: "/hero-img1.jpg",
    title: "Precision that pays off",
    description: "Advanced analytics for next-level trading. Dominate the market with clarity.",
  },
  {
    id: 2,
    image: "/hero-img2.jpg",
    title: "Seamless Integration",
    description: "Connect your workflow like never before.",
  },
  {
    id: 3,
    image: "/home-cta.jpg",
    title: "Performance & Reliability",
    description: "Engineered for speed, built for reliability.",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const getDirection = (newIndex: number) => {
    if (prev === null) return "";
    return newIndex > prev ? "right" : "left";
  };

  const handleClick = (index: SetStateAction<number>) => {
    if (index !== current && !isAnimating) {
      setIsAnimating(true);
      setPrev(current);
      setCurrent(index);
    }
  };

  useEffect(() => {
    if (prev !== null) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 700); // Match this to your transition duration
      
      return () => clearTimeout(timer);
    }
  }, [current, prev]);

  return (
    <div className="relative h-[600px] max-w-[1100px] overflow-hidden py-20 mx-auto flex flex-col items-center justify-center">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => {
          const isActive = index === current;
          const wasActive = index === prev;
          const direction = getDirection(current);
          
          return (
            <div
              key={slide.id}
              className={classNames(
                "absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 ease-in-out flex items-center justify-center text-white px-6",
                {
                  "z-20 translate-x-0": isActive,
                  "z-10": wasActive,
                  "translate-x-full": 
                    (wasActive && direction === "right") || 
                    (!isActive && !wasActive && index > current),
                  "-translate-x-full": 
                    (wasActive && direction === "left") || 
                    (!isActive && !wasActive && index < current),
                }
              )}
              style={{
                backgroundImage: `url(${slide.image})`,
                opacity: isActive || wasActive ? 1 : 0,
              }}
            >
              <div className="bg-[#2F2F301A] backdrop-blur-[4px] rounded-lg flex flex-col items-center gap-5 py-20 px-12 max-w-[500px] text-center">
                <h2 className="text-3xl font-bold">{slide.title}</h2>
                <p className="text-lg">{slide.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-6 flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={classNames(
              "w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md transition",
              current === index ? "text-[#f7e967]" : "text-white"
            )}
            disabled={isAnimating}
          >
            0{index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}