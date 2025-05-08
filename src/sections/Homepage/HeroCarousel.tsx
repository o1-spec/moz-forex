"use client";
import { useState, useEffect } from "react";
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
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrent((prevCurrent) => (prevCurrent + 1) % slides.length);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAnimating]);
  
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 1000); 
      
      return () => clearTimeout(timer);
    }
  }, [current, isAnimating]);

  return (
    <div className="relative h-[600px] max-w-[1240px] overflow-hidden py-20 mx-auto flex flex-col items-center justify-center">
      <div className="relative w-[1140px] h-full rounded-3xl">
        {slides.map((slide, index) => {
          const isActive = index === current;
          
          return (
            <div
              key={slide.id}
              className={classNames(
                "absolute inset-0 w-full h-full bg-cover bg-center flex items-center justify-center text-white px-6 transition-opacity duration-1000",
                {
                  "opacity-100 z-20": isActive,
                  "opacity-0 z-10": !isActive,
                }
              )}
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg flex flex-col items-center gap-5 p-[42px]  max-w-[603px] text-center">
                <h2 className="text-[48px] font-bold">{slide.title}</h2>
                <p className="text-[24px]">{slide.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="absolute bottom-6 flex">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrent(index);
              }
            }}
            className={classNames(
              "w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md transition-colors duration-300",
              current === index ? "text-yellow-300" : "text-white"
            )}
            disabled={isAnimating}
          >
            0{index + 1} -
          </button>
        ))}
      </div>
    </div>
  );
}