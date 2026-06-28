import PageLayout from "../components/layout/PageLayout";
import OurServicesSection from "../components/services/OurServicesSection";
import ContactSection from "../components/sections/ContactSection";
import TestimonialSection from "../components/sections/TestimonialSection";
import { laundryServices } from "../data/services";
import Breadcrumb from "../components/layout/Breadcrumb";

export default function ServicesPage() {
  return (
    <PageLayout
      title="Our Services - Makkah Laundry Center"
      description="Premium laundry, dry cleaning, and garment care services in Makkah"
    >
      <div className="react-fragment">
        <Breadcrumb
          title="Our Services"
          items={[{ label: "Home", href: "/" }, { label: "Services" }]}
          bgImg="/assets/img/bg/breadcum-bg.jpg"
          animation={false}
        />
        <OurServicesSection services={laundryServices} />
        <ContactSection />
        <TestimonialSection ishomePage={false} />
        {/*==============================
	Footer Area
==============================*/}
      </div>
    </PageLayout>
  );
}
