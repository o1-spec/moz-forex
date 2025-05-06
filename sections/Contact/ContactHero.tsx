import React from "react";

function ContactHero() {
  return (
    <div className="max-w-[700px] mx-auto px-4">
      <div className="flex text-[#E0E0E0] flex-col items-center gap-8">
        <div className="pb-6">
          <h4 className="text-[43px] font-bold text-center pb-3">
            Connect With <span className="text-[#F7E967]">MozForex</span>
          </h4>
          <p className="text-center text-[13px]">
            Our team is here to assist you. Reach out anytime and we’ll get back
            to you promptly.
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="bg-[#2F2F3080] p-4 rounded-xl flex flex-col gap-2">
            <span className="text-[14px]">Avalability</span>
            <p className="font-semibold text-[16px]">
              Monday- Sunday 24/7 (round the clock)
            </p>
          </div>
          <div className="bg-[#2F2F3080] p-4 rounded-xl flex flex-col gap-2">
            <span className="text-[14px]">Address</span>
            <p className="font-semibold text-[16px]">
              99-9 Mozalin estate, Mozambique
            </p>
          </div>
          <div className="bg-[#2F2F3080] p-4 rounded-xl flex flex-col gap-2">
            <span className="text-[14px]">Call</span>
            <p className="font-semibold text-[16px]">
              +998-09865-443 +100-19865-443
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactHero;
