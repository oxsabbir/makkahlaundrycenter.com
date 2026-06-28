import PageLayout from "../components/layout/PageLayout";
import Breadcrumb from "../components/layout/Breadcrumb";
import ContactSection from "../components/sections/ContactSection";

export default function ContactPage() {
  return (
    <PageLayout
      title="Contact Us - Makkah Laundry Center"
      description="Get in touch with Makkah Laundry Center for all your laundry needs in Makkah"
    >
      <div className="react-fragment">
        <Breadcrumb
          title="Contact Us"
          items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
          bgImg="/assets/img/bg/breadcum-bg.webp"
          animation={false}
        />
        <style>{`
          .contact-info-premium {
            background: #fff;
            border-radius: 20px;
            padding: 32px 28px;
            display: flex;
            align-items: center;
            gap: 20px;
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
            border: 1px solid rgba(0, 0, 0, 0.04);
          }
          .contact-info-premium:hover {
            box-shadow: 0 16px 48px rgba(0, 82, 218, 0.10);
            transform: translateY(-4px);
            border-color: rgba(0, 82, 218, 0.25);
            background: rgba(0, 82, 218, 0.04);
          }
          .contact-info-premium .cip-icon {
            width: 56px;
            height: 56px;
            border-radius: 16px;
            background: linear-gradient(135deg, rgba(0, 82, 218, 0.08), rgba(253, 181, 42, 0.08));
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            color: var(--theme-color);
            flex-shrink: 0;
            transition: all 0.45s ease;
          }
          .contact-info-premium:hover .cip-icon {
            background: var(--theme-color);
            color: #fff;
          }
          .contact-info-premium .cip-content {
            flex: 1;
            min-width: 0;
          }
          .contact-info-premium .cip-label {
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1.2px;
            color: rgba(0, 0, 0, 0.55);
            margin-bottom: 4px;
          }
          .contact-info-premium .cip-value {
            font-size: 17px;
            font-weight: 600;
            color: var(--title-color);
            margin: 0;
            line-height: 1.45;
          }
          .contact-info-premium .cip-value a {
            color: var(--title-color);
            text-decoration: none;
          }
          .contact-info-premium .cip-value a:hover {
            color: var(--theme-color);
          }
          @media (max-width: 991px) {
            .contact-info-premium {
              padding: 24px 22px;
            }
            .contact-info-premium .cip-value {
              font-size: 15px;
            }
          }
          @media (max-width: 767px) {
            .contact-info-premium {
              padding: 20px;
              gap: 16px;
            }
            .contact-info-premium .cip-icon {
              width: 46px;
              height: 46px;
              font-size: 20px;
            }
            .contact-info-premium .cip-label {
              font-size: 11px;
            }
            .contact-info-premium .cip-value {
              font-size: 14px;
            }
          }
        `}</style>
        {/*==============================
         Contact Area   
         ==============================*/}
        <div
          className="space overflow-hidden contact-area-1 position-relative z-index-common"
          id="contact-info-sec"
        >
          <div className="container">
            <div className="row gy-4 justify-content-center">
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="contact-info-premium">
                  <div className="cip-icon">
                    <i className="fal fa-map-marker-alt" />
                  </div>
                  <div className="cip-content">
                    <div className="cip-label">Our Address</div>
                    <p className="cip-value">
                      The Clock Tower Al Haram, Makkah 24231
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="contact-info-premium">
                  <div className="cip-icon">
                    <i className="fal fa-phone" />
                  </div>
                  <div className="cip-content">
                    <div className="cip-label">Phone Number</div>
                    <p className="cip-value">
                      <a href="tel:+966569385700">+966 56 938 5700</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6">
                <div className="contact-info-premium">
                  <div className="cip-icon">
                    <i className="fal fa-envelope" />
                  </div>
                  <div className="cip-content">
                    <div className="cip-label">Email Address</div>
                    <p className="cip-value">
                      <a href="mailto:info@makkahlaundrycenter.com">
                        info@makkahlaundrycenter.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ContactSection />
        {/*==============================
Map Area  
==============================*/}
        <div className="overflow-hidden contact-page-v1">
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.1487!2d39.8262!3d21.4225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDI1JzIxLjAiTiAzOcKwNDknMzQuMiJF!5e0!3m2!1sen!2ssa!4v1"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
        {/*==============================
	Footer Area
==============================*/}
      </div>
    </PageLayout>
  );
}
