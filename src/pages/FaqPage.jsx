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
        />
  <FaqSection />
  {/*==============================
Cta Area  
==============================*/}
  <div className="cta-area-1  space overflow-hidden position-relative z-index-2">
    <div className="container">
      <div className="row gy-30  align-items-start">
        <div className="col-xl-7">
          <div className="cta-img" data-cue="slideInUp">
            <img src="/assets/img/normal/cta-img4-1.jpg" alt />
            <a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk" className="play-btn style5 popup-video">
              <i className="fa-sharp-duotone fa-solid fa-play" />
            </a>
          </div>
        </div>
        <div className="col-xl-5 col-lg-7">
          <div className="cta-wrap4" data-cue="slideInUp">
            <div className="title-area text-left mb-0">
              <span className="sub-title2 style3 bg-gray-color" data-cue="slideInUp">Get a Free Quote</span>
              <h2 className="sec-title style6 text-anim2" data-cue="slideInUp">Need <span>Laundry</span><br /> Care? We’ve Got You Covered!</h2>
              <p className="sec-text2" data-cue="slideInUp">Professional laundry and dry cleaning services with free pickup and delivery across Makkah.</p>
              <div className="btn-group" data-cue="slideInUp">
                <a href="https://wa.me/966569385700" className="th-btn ">
                  Get Free Quote
                  <span className="after-bg" />
                </a>
                <a href="/contact" className="th-btn style8 style11 style12">
                  Contact Us
                  <span className="after-bg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="price-bg-shape1-1 shape-mockup d-none d-xxl-inline" data-bottom="7%" data-right="-6%">
      <img src="/assets/img/shape/cta-shape.png" alt="img" />
    </div>
    <div className="cta-thumb1-2-shape bg-mask" data-mask-src="/assets/img/shape/cta-thumb1-1-shape.png">
      <img src="/assets/img/shape/cta-bg-shape.png" alt />
    </div>
  </div>
  {/*==============================
Brand Area  
==============================*/}
  <div className="overflow-hidden space brand-area-5 position-relative z-index-2">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6">
          <div className="title-area text-center">
            <span className="sub-title2 style3 bg-gray-color " data-cue="slideInUp">Trusted Partners</span>
            <h2 className="sec-title style6 text-anim2" data-cue="slideInUp">Our Trusted Partners</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="brand-wrap5 ">
        <div className="swiper th-slider" data-cue="slideInUp" id="brandSlider1" data-slider-options="{&quot;breakpoints&quot;:{&quot;0&quot;:{&quot;slidesPerView&quot;:&quot;auto&quot;}},
       &quot;autoplay&quot;:{&quot;delay&quot;:0,&quot;disableOnInteraction&quot;:false},&quot;noSwiping&quot;:&quot;false&quot;,&quot;speed&quot;:6000,&quot;spaceBetween&quot;:125}">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand3-1.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand3-2.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand3-3.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand3-4.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand3-5.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand3-6.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand3-1.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand3-2.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand3-3.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand3-4.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand3-5.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand3-6.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand3-1.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand3-2.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand3-3.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand3-4.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand3-5.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand3-6.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand3-1.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand3-2.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand3-3.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand3-4.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand3-5.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand3-6.svg" alt="Brand Logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==============================
	Footer Area
==============================*/}</div>

    </PageLayout>
  );
}
