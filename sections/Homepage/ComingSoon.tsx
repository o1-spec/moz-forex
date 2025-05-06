import Image from "next/image";

export default function ComingSoon() {
  return (
    <section className="bg-[#121212] text-white py-28 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-5">
          <span
            className="text-sm text-white px-4 py-3 rounded-lg"
            style={{
              background: "linear-gradient(90deg, #5F5F61, #BEB66580)",
            }}
          >
            Coming Soon
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          Expand your options for
          <span className="text-[#F7E967]"> transfers</span>
        </h2>

        <p className="text-gray-400 mb-12 text-lg">
          We are expanding our services to provide you with even more options
          for global money transfers.
        </p>

        <div className="bg-[#1e1e1e] flex gap-10 items-center rounded-xl border border-[#5F5F61] p-6 md:p-4">
          <p className="text-gray-300 text-sm md:text-base">
            Look out for the addition of :
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <Image
              src="/logos/westernUnion-logo.png"
              alt="Western Union"
              width={150}
              height={150}
            />
            <Image
              src="/logos/world-remit-logo.png"
              alt="WorldRemit"
              width={150}
              height={150}
            />
            <Image
              src="/logos/moneyGram-icon.png"
              alt="MoneyGram"
              width={150}
              height={150}
            />
            <Image
              src="/logos/ria-icon.png"
              alt="Ria"
              width={100}
              height={150}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
