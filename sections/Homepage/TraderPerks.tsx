import Image from "next/image";

export default function TraderPerks() {
  return (
    <section className="text-[#e0e0e0] bg-[#2F2F304D] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <span
            className="text-sm text-white px-4 py-3 rounded-lg"
            style={{
              background: "linear-gradient(60deg, #5F5F61, #BEB66580)",
            }}
          >
            Mozaforex benefits
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          Premium perks as a trader with
          <span className="text-[#F7E967]"> Mozforex</span>
        </h2>
        <p className="mb-12 text-[16px]">
          Become a trader and gain access to premium perks designed to elevate
          your trading experience.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="col-span-2 bg-[#2F2F3080] shadow-lg px-16 py-16 rounded-xl border border-[#5F5F61] flex flex-col items-center text-center">
            <div className="rounded-full bg-[##2F2F30] thick-shadow p-4 mb-4">
              <Image
                src="/exchange-icon.png"
                alt="Mozforex"
                width={30}
                height={30}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Preferred Exchange Rates
            </h3>
            <p className="max-w-[560px]">
              Gain a competitive edge with access to tighter spreads and
              favorable exchange rates. Whether you&apos;re trading major pairs
              or emerging markets, you’ll benefit from optimized pricing
              designed to maximize your profit potential.
            </p>
          </div>

          <div className="bg-[#2F2F3080] shadow-lg p-8 rounded-xl border border-[#5F5F61] flex flex-col items-center text-center">
            <div className="rounded-full bg-[##2F2F30] thick-shadow p-4 mb-4">
              <Image
                src="/chart-icon.png"
                alt="Mozforex"
                width={30}
                height={30}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Personalized market insights
            </h3>
            <p className="px-14">
              Get personalized insights with real-time updates, trend alerts,
              and curated reports tailored to your trading style.
            </p>
          </div>

          <div className="bg-[#2F2F3080] shadow-lg p-8 rounded-xl border border-[#5F5F61] flex flex-col items-center text-center">
            <div className="rounded-full bg-[##2F2F30] thick-shadow p-4 mb-4">
              <Image
                src="/person-icon.png"
                alt="Mozforex"
                width={30}
                height={30}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Priority support access
            </h3>
            <p className="px-14">
              Get VIP support with faster responses and direct access to expert
              traders anytime you need it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
