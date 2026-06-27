import PageLayout from "../components/layout/PageLayout";
import TestimonialList from "../components/testimonials/TestimonialList";
import { testimonials } from "../data/testimonials";

export default function TestimonialsPage() {
  return (
    <PageLayout
      title="Testimonials - Makkah Laundry Center"
      description="See what our customers say about Makkah Laundry Center"
    >
<div className="react-fragment">{/*==============================
    Breadcumb
============================== */}
  <div className="breadcumb-wrapper bg-mask " data-mask-src="/assets/img/shape/breadcumb-shape.png" data-bg-src="/assets/img/bg/breadcumb-bg.jpg">
    <div className="container">
      <div className="row">
        <div className="col-xxl-12">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title text-anim" data-cue="slideInUp" data-delay={100}>
              Customer Testimonials </h1>
            <ul className="breadcumb-menu" data-cue="slideInUp" data-delay={300}>
              <li><a href="/">Home</a></li>
              <li>Testimonials</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==============================
Testimonial Area  
==============================*/}
  <section className="position-relative z-index-2 space">
    <div className="container">
      <TestimonialList testimonials={testimonials} />
    </div>
  </section>
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
              <h2 className="sec-title style6 text-anim2" data-cue="slideInUp">Need <span>Professional</span><br /> Laundry Care? We've Got You Covered!</h2>
              <p className="sec-text2" data-cue="slideInUp">Free pickup &amp; delivery across Makkah. Premium wash, dry cleaning, and ironing services tailored to your needs.</p>
              <div className="btn-group" data-cue="slideInUp">
                <a href="/about" className="th-btn ">
                  Request a Quote
                  <span className="after-bg" />
                </a>
                <a href="/contact" className="th-btn style8 style11 style12">
                  Book a Pickup
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
	Footer Area
==============================*/}</div>

    </PageLayout>
  );
}
