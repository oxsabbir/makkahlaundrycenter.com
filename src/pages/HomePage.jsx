import PageLayout from "../components/layout/PageLayout";
import OurServicesSection from "../components/services/OurServicesSection";
import FaqSection from "../components/sections/FaqSection";
import HeroSection from "../components/sections/HeroSection";
import FeatureSection from "../components/sections/FeatureSection";
import AboutSection from "../components/sections/AboutSection";
import MarqueeSection from "../components/sections/MarqueeSection";
import WhyChooseUsSection from "../components/sections/WhyChooseUsSection";
import ProcessSection from "../components/sections/ProcessSection";
import VideoSection from "../components/sections/VideoSection";
import ContactSection from "../components/sections/ContactSection";
import TestimonialSection from "../components/sections/TestimonialSection";
import BrandSection from "../components/sections/BrandSection";
import { laundryServices } from "../data/services";

export default function HomePage() {
  return (
    <PageLayout
      title="Makkah Laundry Center - Professional Laundry & Dry Cleaning Services"
      description="Makkah Laundry Center - Professional Laundry & Dry Cleaning Services"
    >
      <div className="react-fragment">
        <HeroSection />
        <FeatureSection />
        <AboutSection />
        <MarqueeSection />
        <OurServicesSection services={laundryServices} />
        <WhyChooseUsSection />
        <ProcessSection isHomePage={true} />
        <VideoSection />
        <ContactSection />
        <TestimonialSection />
        <FaqSection limit={6} />
        {/* <BrandSection /> */}
      </div>
    </PageLayout>
  );
}
