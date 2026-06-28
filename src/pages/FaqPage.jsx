import PageLayout from "../components/layout/PageLayout";
import FaqSection from "../components/sections/FaqSection";
import Breadcrumb from "../components/layout/Breadcrumb";

export default function FaqPage() {
  return (
    <PageLayout
      title="Makkah Laundry Center - Frequently Asked Questions"
      description="Find answers to common questions about Makkah Laundry Center services, pricing, pickup & delivery, and more."
    >
      <div className="react-fragment">
        <Breadcrumb
          title="Frequently Asked Questions"
          items={[{ label: "Home", href: "/" }, { label: "FAQs" }]}
          bgImg="/assets/img/bg/breadcum-bg.webp"
          animation={false}
        />
        <FaqSection />
        {/*==============================
Cta Area  
==============================*/}
        <div className="cta-area-1  space overflow-hidden position-relative z-index-2">
          <div className="container">
            <div className="row gy-30  align-items-start">
              <div className="col-xl-7">
                <div className="cta-img">
                  <img
                    src="/assets/img/normal/feature-card.webp"
                    alt="Featured Card Point"
                  />
                </div>
              </div>
              <div className="col-xl-5 col-lg-7">
                <div className="cta-wrap4">
                  <div className="title-area text-left mb-0">
                    <span
                      className="sub-title2 style3 bg-gray-color"
                     
                    >
                      Get a Free Quote
                    </span>
                    <h2
                      className="sec-title style6 text-anim2"
                     
                    >
                      Schedule Your <span>Laundry</span>
                      <br /> Pickup Today!
                    </h2>
                    <p className="sec-text2">
                      Professional laundry and dry cleaning services with free
                      pickup and delivery across Makkah.
                    </p>
                    <div className="btn-group">
                      <a href="https://wa.me/966569385700" className="th-btn ">
                        Schedule a Pickup
                        <span className="after-bg" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="cta-thumb1-2-shape bg-mask"
            data-mask-src="/assets/img/shape/cta-thumb1-1-shape.png"
          >
            <img src="/assets/img/shape/cta-bg-shape.png" alt />
          </div>
        </div>

        {/*==============================
	Footer Area
==============================*/}
      </div>
    </PageLayout>
  );
}
