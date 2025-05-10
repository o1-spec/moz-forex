import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="text-[#E0E0E0] px-4 max-w-[1240px] mx-auto">
      <div className="flex justify-between pb-20">
        <div>
          <div className="pb-16">
            <Image
              src="/logo.png"
              alt="Logo"
              width={70}
              height={70}
              className="pb-3 w-[80px] h-[62px]"
            />
            <div className="flex gap-7 items-center">
              <Link href="#" className="text-[18px]">
                Facebook
              </Link>
              <Link href="#" className="text-[18px]">
                Instagram
              </Link>
              <Link href="#" className="text-[18px]">
                Youtube
              </Link>
              <Link href="#" className="text-[18px]">
                Twitter(X)
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-white text-[20px] mb-4">
              Sign up for newsletter
            </h3>
            <div className="relative w-[330px] border-b border-[#2F2F30]">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-transparent placeholder:text-[16px] text-white py-6 pr-5 focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-white"
              >
                <Image
                  src="/logos/top-right-arrow.svg"
                  alt="mail"
                  width={20}
                  height={20}
                  className="w-[16px]"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-20 -translate-y-7">
          <div className="flex flex-col gap-2.5">
            <h6 className="text-[20px]">Contact Information</h6>
            <Link
              href="#"
              className="opacity-70 text-[16px] flex items-center gap-2"
            >
              <Image
                src="/logos/call.svg"
                alt="call"
                width={20}
                height={20}
                className="w-[19.5px]"
              />
              998-09865-443
            </Link>
            <Link
              href="#"
              className="opacity-70 text-[16px] flex items-center gap-2"
            >
              <Image
                src="/logos/mail.svg"
                alt="mail"
                width={20}
                height={20}
                className="w-[19.5px]"
              />
              Mozforexcorporate@gmail.com
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="text-[20px]">Quick Links</h6>
            <Link href="#" className="opacity-70 text-[16px]">
              About Us
            </Link>
            <Link href="#" className="opacity-70 text-[16px]">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-[13px] py-14 border-t border-[#2F2F30]">
        <p className="text-[18px]">&copy; 2025 Mozforex.All right reserved</p>
        <div className="flex items-center gap-3 text-[16px]">
          <Link href="#">Terms and Condition</Link>
          <Link href="#">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
