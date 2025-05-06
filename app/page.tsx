import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import FAQSection from "@/sections/faq/FAQSection";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import TraderPerks from "@/sections/Homepage/TraderPerks";
import ComingSoon from "@/sections/Homepage/ComingSoon";
import Services from "@/sections/Homepage/Services";
import HomepageHero from "@/sections/Homepage/HomepageHero";

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
