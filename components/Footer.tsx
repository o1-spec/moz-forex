import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Phone, Mail, ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <div className="text-[#E0E0E0] px-4 max-w-[1150px] mx-auto">
      <div className="flex justify-between pb-12">
        <div>
          <div className="pb-16">
            <Image
              src="/logo.png"
              alt="Logo"
              width={70}
              height={70}
              className="pb-3"
            />
            <div className="flex gap-7 items-center">
              <Link href="#" className="text-[14px]">
                Facebook
              </Link>
              <Link href="#" className="text-[14px]">
                Instagram
              </Link>
              <Link href="#" className="text-[14px]">
                Youtube
              </Link>
              <Link href="#" className="text-[14px]">
                Twitter(X)
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-white mb-4">Sign up for newsletter</h3>
            <div className="relative w-full border-b border-[#2F2F30]">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-transparent placeholder:text-[13px] text-white py-4 pr-10 focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-white"
              >
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-20 -translate-y-7">
          <div className="flex flex-col gap-2.5">
            <h6 className="text-[15px]">Contact Information</h6>
            <Link
              href="#"
              className="opacity-70 text-[13px] flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              998-09865-443
            </Link>
            <Link
              href="#"
              className="opacity-70 text-[13px] flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Mozforexcorporate@gmail.com
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="text-[15px]">Quick Links</h6>
            <Link href="#" className="opacity-70 text-[13px]">
              About Us
            </Link>
            <Link href="#" className="opacity-70 text-[13px]">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-[13px] py-10 border-t border-[#2F2F30]">
        <p className="text-[13px]">&copy; 2025 Mozforex.All right reserved</p>
        <div className="flex items-center gap-3 text-[13px]">
          <Link href="#">Terms and Condition</Link>
          <Link href="#">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
