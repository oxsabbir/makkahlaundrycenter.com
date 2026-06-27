import PageLayout from "../components/layout/PageLayout";
import ServiceGrid from "../components/services/ServiceGrid";
import { generalServices } from "../data/services";

export default function ServicesPage() {
  return (
    <PageLayout
      title="Shared on THEMELOCK.COM - Pamar - Plumbing & Repair Service HTML Template - Services"
      description="Pamar - Plumbing & Repair Service HTML Template"
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
              Our Services </h1>
            <ul className="breadcumb-menu" data-cue="slideInUp" data-delay={300}>
              <li><a href="/">Home</a></li>
              <li>Services</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==============================
Service Area  
==============================*/}
  <section className="space" id="service-sec">
    <div className="service-bg-shape1-1 shape-mockup" data-bottom={0} data-left="50%">
      <img src="/assets/img/shape/bg-shape3.png" alt="img" />
    </div>
    <div className="container">
      <div className="title-area style2 common-style-for-title ">
        {/* row justify-content-center align-items-center */}
        <div>
          {/* col-xxl-6 col-xl-6 col-lg-6 */}
          <div className=" ">
            <div className="text-xxl-end text-xl-end text-lg-end text-start">
              <span className="sub-title style2 after-none before-none" data-cue="slideInUp">OUR SERVICES</span>
              <h2 className="sec-title style3 style7 mb-0" data-cue="slideInUp">We Provide Best Plumbing <br /> <span>Services for You</span></h2>
            </div>
          </div>
          <div>
            <div className="title-area-right text-start" data-cue="slideInUp">
              <p className="mb-0">Our plumbing services are designed to provide fast, reliable, and long-lasting solutions for both residential and commercial needs. Whether it’s a leaky faucet, clogged drain, burst pipe,</p>
            </div>
          </div>
        </div>
      </div>
      <ServiceGrid services={generalServices} />
    </div>
  </section>
  {/*==============================
Contact Area   
==============================*/}
  <div className="space overflow-hidden contact-area-1 position-relative z-index-common" id="contact-sec">
    <div className="container">
      <div className="consulting-wrap1">
        <div className="row gy-60 align-items-center">
          <div className="col-xxl-6">
            <div className="page-img mb-0">
              <img src="/assets/img/normal/consulting-thumb1-1.jpg" alt="img" />
            </div>
          </div>
          <div className="col-xxl-6">
            <div className="consulting-form-wrap1">
              <div className="title-area mb-60 ">
                <span className="sub-title style2 text-white border-white text-anim after-none before-none" data-cue="slideInLeft">Get In Touch</span>
                <h2 className="sec-title text-white">Get Your Free <span>Estimate!</span></h2>
              </div>
              {/*==============================
Contact Area  
==============================*/}
              <div className="contact-form-v1 ">
                <form action="/mail.php" method="POST" className="contact-form ajax-contact">
                  <div className="row">
                    <div className="form-group style-border col-md-6">
                      <input type="text" className="form-control" name="name" id="name" placeholder="Your name" />
                      <i className="far fa-user" />
                    </div>
                    <div className="form-group style-border col-md-6">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Email Address" />
                      <i className="far fa-envelope" />
                    </div>
                    <div className="form-group style-border col-md-6">
                      <input type="number" className="form-control" name="number" id="number" placeholder="Phone Number" />
                      <i className="far fa-phone" />
                    </div>
                    <div className="form-group style-border col-md-6">
                      <select name="subject" id="subject" className="form-select bg-white">
                        <option value disabled selected hidden>Select Service</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Brand Marketing">Brand Marketing</option>
                        <option value="UI/UX Designing">UI/UX Designing</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                      </select>
                    </div>
                    <div className="form-group style-border col-12">
                      <textarea name="message" id="message" cols={30} rows={3} className="form-control" placeholder="Write Message...." defaultValue={""} />
                      <i className="fa-light fa-pen" />
                    </div>
                    <div className="form-group col-12">
                      <div className="custom-checkbox">
                        <input type="checkbox" id="remembermylogin" />
                        <label htmlFor="remembermylogin" className="text-white">I agree with the privacy policy</label>
                      </div>
                    </div>
                    <div className="form-btn col-12">
                      <button className="th-btn style5 ">
                        Request A Quote
                        <span className="after-bg" />
                      </button>
                    </div>
                  </div>
                  <p className="form-messages mb-0 mt-3" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="contact-thumb1-1-shape bg-mask" data-mask-src="/assets/img/shape/contact-thumb1-1-shape.jpg">
      <img src="/assets/img/shape/bg-shape6.png" alt />
    </div>
  </div>{/*==============================
Price Area  
==============================*/}
  <section className="overflow-hidden">
    <div className="price-wrap1 space">
      <div className="price-bg-shape1-1 shape-mockup " data-top={0} data-left="8%">
        <img src="/assets/img/shape/bg-shape1.png" alt="img" />
      </div>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-xxl-12">
            <div className="title-area text-center pt-1">
              <span className="sub-title text-anim after-none before-none" data-cue="slideInUp">Affordable Pricing Plan</span>
              <h2 className="sec-title text-anim2" data-cue="slideInUp">Explore Range Flexible <br />
                <span>Service Packages.</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-30 justify-content-center">
          <div className="col-xl-4 col-md-6" data-cue="slideInUp">
            <div className="price-card ">
              <div className="box-top">
                <div className="box-content">
                  <h3 className="box-title">Basic
                    Package</h3>
                  <p className="box-subtitle" />
                </div>
                <div className="box-image">
                  <img src="/assets/img/price/price_1_1.jpg" alt="price" />
                </div>
              </div>
              <div className="price_card-wrap">
                <h4 className="price-card_price">$290<span className="duration">/month</span>
                </h4>
                <div className="checklist">
                  <ul>
                    <li><img src="/assets/img/icon/check-icon1-3.svg" alt="img" /> 10% Off On All Services</li>
                    <li><img src="/assets/img/icon/check-icon1-3.svg" alt="img" /> Priority Scheduling</li>
                    <li><img src="/assets/img/icon/check-icon1-3.svg" alt="img" /> Maintained Equipment</li>
                    <li><img src="/assets/img/icon/check-icon1-3.svg" alt="img" /> Trusted, certified technicians</li>
                    <li><img src="/assets/img/icon/check-icon1-3.svg" alt="img" /> 1 Annual Plumbing Inspection</li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <a href="/contact" className="th-btn style4">
                    Choose Package
                    <span className="after-bg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6" data-cue="slideInUp">
            <div className="price-card active">
              <div className="box-top">
                <div className="box-content">
                  <h3 className="box-title">Standard
                    Package</h3>
                  <p className="box-subtitle">Popular</p>
                </div>
                <div className="box-image">
                  <img src="/assets/img/price/price_1_2.jpg" alt="price" />
                </div>
              </div>
              <div className="price_card-wrap">
                <h4 className="price-card_price">$390<span className="duration">/month</span>
                </h4>
                <div className="checklist">
                  <ul>
                    <li><img src="/assets/img/icon/check-icon1-3.svg" alt="img" /> 10% Off On All Services</li>
                    <li><img src="/assets/img/icon/check-icon1-3.svg" alt="img" /> Priority Scheduling</li>
                    <li><img src="/assets/img/icon/check-icon1-3.svg" alt="img" /> Maintained Equipment</li>
                    <li><img src="/assets/img/icon/check-icon1-3.svg" alt="img" /> Trusted, certified technicians</li>
                    <li><img src="/assets/img/icon/check-icon1-3.svg" alt="img" /> 1 Annual Plumbing Inspection</li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <a href="/contact" className="th-btn style4">
                    Choose Package
                    <span className="after-bg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6" data-cue="slideInUp">
            <div className="price-card ">
              <div className="box-top">
                <div className="box-content">
                  <h3 className="box-title">Premium
                    Package</h3>
                  <p className="box-subtitle" />
                </div>
                <div className="box-image">
                  <img src="/assets/img/price/price_1_3.jpg" alt="price" />
                </div>
              </div>
              <div className="price_card-wrap">
                <h4 className="price-card_price">$490<span className="duration">/month</span>
                </h4>
                <div className="checklist">
                  <ul>
                    <li><img src="/assets/img/icon/check-icon1-3.svg" alt="img" /> 10% Off On All Services</li>
                    <li><img src="/assets/img/icon/check-icon1-3.svg" alt="img" /> Priority Scheduling</li>
                    <li><img src="/assets/img/icon/check-icon1-3.svg" alt="img" /> Maintained Equipment</li>
                    <li><img src="/assets/img/icon/check-icon1-3.svg" alt="img" /> Trusted, certified technicians</li>
                    <li><img src="/assets/img/icon/check-icon1-3.svg" alt="img" /> 1 Annual Plumbing Inspection</li>
                  </ul>
                </div>
                <div className="btn-wrap">
                  <a href="/contact" className="th-btn style4">
                    Choose Package
                    <span className="after-bg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*==============================
Testimonial Area  
==============================*/}
  <section className="testi-area-4 space-bottom overflow-hidden " id="testi-sec">
    <div className="price-bg-shape1-1 shape-mockup " data-top="3%" data-right={0}>
      <img src="/assets/img/shape/bg-shape7.png" alt="img" />
    </div>
    <div className="container">
      <div className="row">
        <div className="title-area text-xl-start text-center">
          <div className="row ">
            <div className="col-xl-3">
              <h2 className="sub-title style2 text-anim after-none before-none  justify-content-xl-start justify-content-center" data-cue="slideInLeft">Testimonials</h2>
            </div>
            <div className="col-xl-6">
              <h2 className="sec-title style2 text-anim2 mb-0" data-cue="slideInLeft">Clients Say</h2>
              <p className="sec-text" data-cue="slideInUp">Whether it’s a small repair or a major installation, our team of licensed and experienced plumber is committed to getting the job done right — the first time. We use modern tools</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row gy-50 flex-row-reverse">
        <div className="col-xl-6">
          <div className="testi-thumb1-1 style2">
            <div className="quote-icon">
              <img src="/assets/img/icon/quote-icon4.svg" alt />
            </div>
            <div className="img1 bg-mask" data-mask-src="/assets/img/shape/testi-shape.png">
              <img src="/assets/img/testimonial/testi-3-1.jpg" alt="img" />
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="slider-area testi-slider1">
            <div className="swiper th-slider has-shadow" id="testiSlide1" data-slider-options="{&quot;autoHeight&quot;: &quot;true&quot;,&quot;breakpoints&quot;:{&quot;0&quot;:{&quot;slidesPerView&quot;:1},&quot;768&quot;:{&quot;slidesPerView&quot;:&quot;1&quot;},&quot;992&quot;:{&quot;slidesPerView&quot;:&quot;1&quot;},&quot;1200&quot;:{&quot;slidesPerView&quot;:&quot;1&quot;},&quot;1600&quot;:{&quot;slidesPerView&quot;:&quot;1&quot;}}}">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testi-card style4">
                    <div className="testi-card_review">
                      <i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" />
                    </div>
                    <p className="box-text">“With transparent pricing, fast response times, and 24/7 emergency availability, we’re always here when you need us. Our customer-first approach means we treat every job with care, cleanliness, and professionalism.”</p>
                    <div className="testi-card-profile">
                      <div className="testi-card-profile-detaile">
                        <h3 className="box-title">Michael Lacefield</h3>
                        <p className="box-desig">Co-founder, XYZ</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card style4">
                    <div className="testi-card_review">
                      <i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" />
                    </div>
                    <p className="box-text">“With transparent pricing, fast response times, and 24/7 emergency availability, we’re always here when you need us. Our customer-first approach means we treat every job with care, cleanliness, and professionalism.”</p>
                    <div className="testi-card-profile">
                      <div className="testi-card-profile-detaile">
                        <h3 className="box-title">Harry Callum</h3>
                        <p className="box-desig">Co-founder</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card style4">
                    <div className="testi-card_review">
                      <i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" />
                    </div>
                    <p className="box-text">“With transparent pricing, fast response times, and 24/7 emergency availability, we’re always here when you need us. Our customer-first approach means we treat every job with care, cleanliness, and professionalism.”</p>
                    <div className="testi-card-profile">
                      <div className="testi-card-profile-detaile">
                        <h3 className="box-title">Mason Robert</h3>
                        <p className="box-desig">Co-founder, XYZ</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card style4">
                    <div className="testi-card_review">
                      <i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" />
                    </div>
                    <p className="box-text">“With transparent pricing, fast response times, and 24/7 emergency availability, we’re always here when you need us. Our customer-first approach means we treat every job with care, cleanliness, and professionalism.”</p>
                    <div className="testi-card-profile">
                      <div className="testi-card-profile-detaile">
                        <h3 className="box-title">Amelia Margaret</h3>
                        <p className="box-desig">Co-founder</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card style4">
                    <div className="testi-card_review">
                      <i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" />
                    </div>
                    <p className="box-text">“With transparent pricing, fast response times, and 24/7 emergency availability, we’re always here when you need us. Our customer-first approach means we treat every job with care, cleanliness, and professionalism.”</p>
                    <div className="testi-card-profile">
                      <div className="testi-card-profile-detaile">
                        <h3 className="box-title">Sophia Jennifer</h3>
                        <p className="box-desig">Co-founder, XYZ</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card style4">
                    <div className="testi-card_review">
                      <i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" />
                    </div>
                    <p className="box-text">“With transparent pricing, fast response times, and 24/7 emergency availability, we’re always here when you need us. Our customer-first approach means we treat every job with care, cleanliness, and professionalism.”</p>
                    <div className="testi-card-profile">
                      <div className="testi-card-profile-detaile">
                        <h3 className="box-title">Daniel Thomas</h3>
                        <p className="box-desig">Co-founder</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card style4">
                    <div className="testi-card_review">
                      <i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" />
                    </div>
                    <p className="box-text">“With transparent pricing, fast response times, and 24/7 emergency availability, we’re always here when you need us. Our customer-first approach means we treat every job with care, cleanliness, and professionalism.”</p>
                    <div className="testi-card-profile">
                      <div className="testi-card-profile-detaile">
                        <h3 className="box-title">James Charles</h3>
                        <p className="box-desig">Co-founder, XYZ</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card style4">
                    <div className="testi-card_review">
                      <i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" />
                    </div>
                    <p className="box-text">“With transparent pricing, fast response times, and 24/7 emergency availability, we’re always here when you need us. Our customer-first approach means we treat every job with care, cleanliness, and professionalism.”</p>
                    <div className="testi-card-profile">
                      <div className="testi-card-profile-detaile">
                        <h3 className="box-title">Alexander Joseph</h3>
                        <p className="box-desig">Co-founder</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testi-card style4">
                    <div className="testi-card_review">
                      <i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" />
                    </div>
                    <p className="box-text">“With transparent pricing, fast response times, and 24/7 emergency availability, we’re always here when you need us. Our customer-first approach means we treat every job with care, cleanliness, and professionalism.”</p>
                    <div className="testi-card-profile">
                      <div className="testi-card-profile-detaile">
                        <h3 className="box-title">Jessica Madison</h3>
                        <p className="box-desig">Co-founder, XYZ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-pagination-wrap ">
                <button data-slider-prev="#testiSlide1" className="slider-arrow style3 default">
                  <img src="/assets/img/icon/left-arrow.svg" alt />
                </button>
                <button data-slider-next="#testiSlide1" className="slider-arrow style3 default">
                  <img src="/assets/img/icon/right-arrow.svg" alt />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*==============================
	Footer Area
==============================*/}</div>

    </PageLayout>
  );
}
