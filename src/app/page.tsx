import Footer from "@/src/components/Footer";
import Nav from "@/src/components/Nav";
import FAQSection from "@/src/sections/faq/FAQSection";
import CTA from "@/src/components/CTA";
import Testimonials from "@/src/components/Testimonials";
import TraderPerks from "@/src/sections/Homepage/TraderPerks";
import ComingSoon from "@/src/sections/Homepage/ComingSoon";
import Services from "@/src/sections/Homepage/Services";
import HomepageHero from "@/src/sections/Homepage/HomepageHero";

export default function Home() {
  return (
    <div>
      <Nav />
      <HomepageHero/>
      <Services />
      <TraderPerks />
      <ComingSoon />
      <div className="bg-[#2F2F304D]">
        <Testimonials />
      </div>
      <CTA />
      <FAQSection />
      <Footer />
    </div>
  );
}
