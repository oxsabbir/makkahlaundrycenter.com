import PageLayout from "../components/layout/PageLayout";
import Breadcrumb from "../components/layout/Breadcrumb";
import AboutSection from "../components/sections/AboutSection";
import FeatureSection from "../components/sections/FeatureSection";
import ProcessSection from "../components/sections/ProcessSection";
import WhyChooseUsSection from "../components/sections/WhyChooseUsSection";

import TestimonialSection from "../components/sections/TestimonialSection";

export default function AboutPage() {
  return (
    <PageLayout
      title="About Us - Makkah Laundry Center"
      description="Professional laundry care across Makkah with WhatsApp booking, hotel pickup, and careful garment handling."
    >
      <div className="react-fragment">
        <Breadcrumb
          title="About Us"
          items={[{ label: "Home", href: "/" }, { label: "About Us" }]}
          bgImg="/assets/img/bg/breadcum-bg.jpg"
          animation={false}
        />
        <AboutSection />
        <FeatureSection />
        <ProcessSection isHomePage={false} />
        <WhyChooseUsSection />
        <TestimonialSection ishomePage={false} />
        {/*==============================
	Footer Area
==============================*/}
      </div>
    </PageLayout>
  );
}
