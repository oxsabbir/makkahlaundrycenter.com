import PageLayout from "../components/layout/PageLayout";
import OurServicesSection from "../components/services/OurServicesSection";
import { laundryServices } from "../data/services";

export default function HomePage() {
  return (
    <PageLayout
      title="Makkah Laundry Center - Professional Laundry & Dry Cleaning Services"
      description="Makkah Laundry Center - Professional Laundry & Dry Cleaning Services"
    >
      <div className="react-fragment">
        {/*==============================
Hero Area
==============================*/}
        <div
          className="th-hero-wrapper hero-1 bg-mask"
          id="hero"
          data-mask-src="/assets/img/shape/hero-thumb1-1-shape.png"
        >
          <div
            className="swiper th-slider"
            id="heroSlider8"
            data-slider-options='{"effect":"fade", "autoHeight": "true"}'
          >
            <div className="swiper-wrapper">
              <div
                className="swiper-slide"
                data-bg-src="/assets/img/hero/hero_bg_1_1.jpg"
              >
                <div className="hero-inner">
                  <div className="container">
                    <div className="hero-style1">
                      <span
                        className="sub-title style5"
                        data-ani="slideinup"
                        data-ani-delay="0.2s"
                      >
                        {" "}
                        Professional Laundry &amp; Dry Cleaning Services
                      </span>
                      <h1 className="hero-title text-white">
                        <span
                          className="title1"
                          data-ani="slideinup"
                          data-ani-delay="0.4s"
                        >
                          Fresh &amp; Clean, Delivered to Your Door
                        </span>
                      </h1>
                      <p
                        className="hero-text text-white"
                        data-ani="slideinup"
                        data-ani-delay="0.6s"
                      >
                        Free pickup &amp; delivery. Same-day turnaround. Premium
                        care for all your fabrics — because your clothes deserve
                        the best.
                      </p>
                      <div
                        className="btn-group"
                        data-ani="slideinup"
                        data-ani-delay="0.7s"
                      >
                        <a
                          href="https://wa.me/966569385700?text=Hi%20Makkah%20Laundry%20Center!%20I%27d%20like%20to%20inquire%20about%20your%20laundry%20services.%20Please%20share%20details%20and%20preferred%20pickup%20time."
                          target="_blank"
                          className="th-btn"
                        >
                          Schedule a Pickup
                          <span className="after-bg" />
                        </a>
                        <a href="/contact" className="th-btn style2">
                          Contact Us
                          <span className="after-bg" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                data-bg-src="/assets/img/hero/hero_bg_1_2.jpg"
              >
                <div className="hero-inner">
                  <div className="container">
                    <div className="hero-style1">
                      <span
                        className="sub-title style5"
                        data-ani="slideinup"
                        data-ani-delay="0.2s"
                      >
                        {" "}
                        Expert Care for Every Fabric
                      </span>
                      <h1 className="hero-title text-white">
                        <span
                          className="title1"
                          data-ani="slideinup"
                          data-ani-delay="0.4s"
                        >
                          Your Clothes Deserve the Best
                        </span>
                      </h1>
                      <p
                        className="hero-text text-white"
                        data-ani="slideinup"
                        data-ani-delay="0.6s"
                      >
                        Eco-friendly washing, expert stain removal, and
                        professional pressing — handled with care. We treat your
                        garments like our own.
                      </p>
                      <div
                        className="btn-group"
                        data-ani="slideinup"
                        data-ani-delay="0.7s"
                      >
                        <a
                          href="https://wa.me/966569385700?text=Hi%20Makkah%20Laundry%20Center!%20I%27d%20like%20to%20inquire%20about%20your%20laundry%20services.%20Please%20share%20details%20and%20preferred%20pickup%20time."
                          target="_blank"
                          className="th-btn"
                        >
                          Book Now
                          <span className="after-bg" />
                        </a>
                        <a href="/contact" className="th-btn style2">
                          Get a Quote
                          <span className="after-bg" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="icon-box">
              <button
                data-slider-prev="#heroSlider8"
                className="slider-arrow style2 default"
              >
                <img src="/assets/img/icon/left-arrow.svg" alt />
              </button>
              <button
                data-slider-next="#heroSlider8"
                className="slider-arrow style2 default"
              >
                <img src="/assets/img/icon/right-arrow.svg" alt />
              </button>
            </div>
          </div>
          <div className="scroll-down">
            <a href="#about-sec" className="scroll-wrap">
              Scroll Down
              <span>
                <img src="/assets/img/icon/down-arrow.svg" alt />
              </span>
            </a>
          </div>
        </div>
        {/*======== / Hero Section ========*/}
        {/*==============================
Feature Area  
==============================*/}
        <section className=" feature-area-1 position-relative pt-40">
          <div className="container">
            <div className="row gy-4 justify-content-center">
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <div className="feature-card" data-cue="slideInUp">
                  <div className="box-icon">
                    <div>
                      <img
                        src="/assets/img/icon/feature-icon1-1.svg"
                        alt="icon"
                      />
                    </div>
                  </div>
                  <div className="feature-card-details text-left">
                    <h3 className="box-title">Premium Wash &amp; Fold</h3>
                    <p className="box-text">
                      Your clothes are sorted, washed, and folded with care
                      using premium detergents for a fresh, clean result every
                      time.
                    </p>
                    <a
                      href="https://wa.me/966569385700?text=Hi%20Makkah%20Laundry%20Center!%20I%27d%20like%20to%20inquire%20about%20your%20laundry%20services.%20Please%20share%20details%20and%20preferred%20pickup%20time."
                      target="_blank"
                      className="link-btn2"
                    >
                      <span>Book Now</span>
                      <div className="icon"></div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <div className="feature-card" data-cue="slideInUp">
                  <div className="box-icon">
                    <div>
                      <img
                        src="/assets/img/icon/feature-icon1-2.svg"
                        alt="icon"
                      />
                    </div>
                  </div>
                  <div className="feature-card-details text-left">
                    <h3 className="box-title">Free Pickup &amp; Delivery</h3>
                    <p className="box-text">
                      We collect your laundry from your doorstep and return it
                      fresh and neatly folded — no driving, no waiting.
                    </p>
                    <a
                      href="https://wa.me/966569385700?text=Hi%20Makkah%20Laundry%20Center!%20I%27d%20like%20to%20inquire%20about%20your%20laundry%20services.%20Please%20share%20details%20and%20preferred%20pickup%20time."
                      target="_blank"
                      className="link-btn2"
                    >
                      <span>Book Now</span>
                      <div className="icon"></div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <div className="feature-card" data-cue="slideInUp">
                  <div className="box-icon">
                    <div>
                      <img
                        src="/assets/img/icon/feature-icon1-3.svg"
                        alt="icon"
                      />
                    </div>
                  </div>
                  <div className="feature-card-details text-left">
                    <h3 className="box-title">Expert Dry Cleaning</h3>
                    <p className="box-text">
                      Delicate fabrics and special garments get the professional
                      dry cleaning treatment they deserve — gentle yet
                      effective.
                    </p>
                    <a
                      href="https://wa.me/966569385700?text=Hi%20Makkah%20Laundry%20Center!%20I%27d%20like%20to%20inquire%20about%20your%20laundry%20services.%20Please%20share%20details%20and%20preferred%20pickup%20time."
                      target="_blank"
                      className="link-btn2"
                    >
                      <span>Book Now</span>
                      <div className="icon"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>{" "}
        {/*==============================
About Area  
==============================*/}
        <div className="overflow-hidden space overflow-hidden " id="about-sec">
          <div className="container">
            <div className="about-wrap1">
              <div className="title-area">
                <div className="row gx-60 justify-content-center align-items-start">
                  <div className="col-auto">
                    <div className="text-center">
                      <span
                        className="sub-title style2 text-anim after-none before-none"
                        data-cue="slideInUp"
                      >
                        Who we Are
                      </span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="text-center">
                      <h2
                        className="sec-title style2 text-anim2 mb-0"
                        data-cue="slideInUp"
                      >
                        About Us
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row gx-60">
                <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div
                    className="img-box1"
                    data-cue="slideInUp"
                    data-delay={300}
                  >
                    <div
                      className="img2 bg-mask"
                      data-mask-src="/assets/img/shape/about-thumb1-1-shape.png"
                    >
                      <img
                        src="/assets/img/normal/about-us-center.webp"
                        alt="About"
                      />
                    </div>
                    <div className="circle-tag d-none d-xxl-block">
                      <span className="circle-title-anime">
                        Years of Experience Years of Experience
                      </span>
                      <h2 className="box-number">
                        <span className="counter-number">12</span>
                        <span className="counter-marker">+</span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className="about-wrap" data-cue="slideInUp">
                    <div className="title-area mb-40">
                      <p>
                        Our laundry services are designed to provide fast,
                        reliable, and professional care for all your garments.
                        Whether it&rsquo;s everyday wash &amp; fold, delicate
                        dry cleaning, expert stain removal, or special Ihram
                        care, our trained team handles every fabric with
                        precision
                      </p>
                    </div>
                    <div className="checklist style">
                      <ul>
                        <li>Free pickup &amp; delivery across Makkah</li>
                        <li>
                          Eco-friendly detergents &amp; gentle fabric care
                        </li>
                        <li>Customer satisfaction is our top priority</li>
                      </ul>
                    </div>
                    <div className="btn-wrap mt-40">
                      <a href="/services" className="th-btn">
                        Our Services
                        <span className="after-bg" />
                      </a>
                    </div>
                  </div>
                  <div className="img-box2 d-none d-xxl-block d-xl-block">
                    <div className="row">
                      <div className="col-xxl-6 col-md-6" data-cue="slideInUp">
                        <div className="img-box1">
                          <div className="img1">
                            <img
                              src="/assets/img/normal/about-us-center-1.webp"
                              alt="About"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-6 col-md-6" data-cue="slideInUp">
                        <div className="img-box1">
                          <div className="img1">
                            <img
                              src="/assets/img/normal/why-choose-us-center-2.webp"
                              alt="About"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="shape-mockup jump d-none d-xxl-block  "
                style={{ bottom: "0%", left: "4%" }}
              >
                <img src="/assets/img/shape/bg-shape2.png" alt="shape" />
              </div>
            </div>
          </div>
        </div>
        {/*==============================
Marquee Area  
==============================*/}
        <div className="overflow-hidden pb-85" data-cue="slideInUp">
          <div className="container-fluid p-0">
            <div
              className="swiper th-slider marquee-slider1"
              data-slider-options='{"breakpoints":{"0":{"slidesPerView":"auto"}},"autoplay":{"delay":0,"disableOnInteraction":false},"noSwiping":"true","speed":10000,"spaceBetween":30}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="marquee-card">
                    <div className="marquee-icon color-masking">
                      <div
                        className="masking-src"
                        data-mask-src="/assets/img/shape/star-shape1.png"
                      />
                      <img src="/assets/img/shape/star-shape1.png" alt="img" />
                    </div>
                    <a target="_blank" href="#" data-hover="Wash &amp; Fold">
                      Wash &amp; Fold{" "}
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="marquee-card">
                    <div className="marquee-icon color-masking">
                      <div
                        className="masking-src"
                        data-mask-src="/assets/img/shape/star-shape1.png"
                      />
                      <img src="/assets/img/shape/star-shape1.png" alt="img" />
                    </div>
                    <a target="_blank" href="#" data-hover="Dry Cleaning">
                      Dry Cleaning{" "}
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="marquee-card">
                    <div className="marquee-icon color-masking">
                      <div
                        className="masking-src"
                        data-mask-src="/assets/img/shape/star-shape1.png"
                      />
                      <img src="/assets/img/shape/star-shape1.png" alt="img" />
                    </div>
                    <a target="_blank" href="#" data-hover="Stain Removal">
                      Stain Removal{" "}
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="marquee-card">
                    <div className="marquee-icon color-masking">
                      <div
                        className="masking-src"
                        data-mask-src="/assets/img/shape/star-shape1.png"
                      />
                      <img src="/assets/img/shape/star-shape1.png" alt="img" />
                    </div>
                    <a target="_blank" href="#" data-hover="Wash &amp; Fold">
                      Wash &amp; Fold{" "}
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="marquee-card">
                    <div className="marquee-icon color-masking">
                      <div
                        className="masking-src"
                        data-mask-src="/assets/img/shape/star-shape1.png"
                      />
                      <img src="/assets/img/shape/star-shape1.png" alt="img" />
                    </div>
                    <a target="_blank" href="#" data-hover="Dry Cleaning">
                      Dry Cleaning{" "}
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="marquee-card">
                    <div className="marquee-icon color-masking">
                      <div
                        className="masking-src"
                        data-mask-src="/assets/img/shape/star-shape1.png"
                      />
                      <img src="/assets/img/shape/star-shape1.png" alt="img" />
                    </div>
                    <a target="_blank" href="#" data-hover="Stain Removal">
                      Stain Removal{" "}
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="marquee-card">
                    <div className="marquee-icon color-masking">
                      <div
                        className="masking-src"
                        data-mask-src="/assets/img/shape/star-shape1.png"
                      />
                      <img src="/assets/img/shape/star-shape1.png" alt="img" />
                    </div>
                    <a target="_blank" href="#" data-hover="Wash &amp; Fold">
                      Wash &amp; Fold{" "}
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="marquee-card">
                    <div className="marquee-icon color-masking">
                      <div
                        className="masking-src"
                        data-mask-src="/assets/img/shape/star-shape1.png"
                      />
                      <img src="/assets/img/shape/star-shape1.png" alt="img" />
                    </div>
                    <a target="_blank" href="#" data-hover="Dry Cleaning">
                      Dry Cleaning{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <OurServicesSection services={laundryServices} />
        {/*==============================
Counter Area  
==============================*/}
        <div
          className="counter-area-2 space overflow-hidden position-relative z-index-2"
          data-bg-src="/assets/img/normal/funfact-img.jpg"
        >
          <div className="container">
            <div className="counter-wrap2">
              <div className="counter-card2" data-cue="slideInUp">
                <div className="media-body">
                  <h2 className="box-number">
                    <span className="counter-number">98</span>%
                  </h2>
                  <p className="box-text">Happy Customers</p>
                </div>
              </div>
              <div className="counter-card2" data-cue="slideInUp">
                <div className="media-body">
                  <h2 className="box-number">
                    <span className="counter-number">52</span>k
                  </h2>
                  <p className="box-text">Garments Cleaned</p>
                </div>
              </div>
              <div className="counter-card2" data-cue="slideInUp">
                <div className="media-body">
                  <h2 className="box-number">
                    <span className="counter-number">2</span>K
                  </h2>
                  <p className="box-text">Expert Staff</p>
                </div>
              </div>
              <div className="counter-card2" data-cue="slideInUp">
                <div className="media-body">
                  <h2 className="box-number">
                    <span className="counter-number">1</span>k
                  </h2>
                  <p className="box-text">Daily Deliveries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*==============================
Why Choose Us Area  
==============================*/}
        <div className="why-sec-1 overflow-hidden space  overflow-hidden">
          <div className="container">
            <div className="row gy-40 gx-80">
              <div className="col-xxl-6 ">
                <div className="title-area mb-60">
                  <span
                    className="sub-title style2 text-anim after-none before-none"
                    data-cue="slideInLeft"
                  >
                    Why Choose Us
                  </span>
                  <h2
                    className="sec-title style3 text-anim2"
                    data-cue="slideInLeft"
                  >
                    Why Makkah Trusts <br />
                    Us For <span>Clean, Fresh Laundry</span>
                  </h2>
                </div>
                <div className="why-img-box1" data-cue="slideInUp">
                  <img
                    src="/assets/img/normal/why-choose-us-center.webp"
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-xxl-6">
                <div className="why-card-wrap">
                  <div className="row gy-4 justify-content-center">
                    <div className="col-xxl-6 col-lg-6 col-md-6">
                      <div className="why-card" data-cue="slideInUp">
                        <div className="box-icon">
                          <img
                            src="/assets/img/icon/why-icon1-1.svg"
                            alt="why-icon"
                          />
                        </div>
                        <div className="box-details">
                          <h4 className="box-title">
                            Free Pickup &amp; Delivery
                          </h4>
                          <p className="box-text">
                            We collect your laundry from your doorstep and
                            return it fresh and folded — no driving, no waiting.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-lg-6 col-md-6">
                      <div className="why-card" data-cue="slideInUp">
                        <div className="box-icon">
                          <img
                            src="/assets/img/icon/why-icon1-2.svg"
                            alt="why-icon"
                          />
                        </div>
                        <div className="box-details">
                          <h4 className="box-title">Eco-Friendly Cleaning</h4>
                          <p className="box-text">
                            We use non-toxic, eco-friendly detergents and
                            solvents that are safe for your family and the
                            environment.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-lg-6 col-md-6">
                      <div className="why-card" data-cue="slideInUp">
                        <div className="box-icon">
                          <img
                            src="/assets/img/icon/why-icon1-3.svg"
                            alt="why-icon"
                          />
                        </div>
                        <div className="box-details">
                          <h4 className="box-title">Transparent Pricing</h4>
                          <p className="box-text">
                            What you see is what you pay. No hidden fees, no
                            surprises — just honest, affordable rates.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-lg-6 col-md-6">
                      <div className="why-card" data-cue="slideInUp">
                        <div className="box-icon">
                          <img
                            src="/assets/img/icon/why-icon1-4.svg"
                            alt="why-icon"
                          />
                        </div>
                        <div className="box-details">
                          <h4 className="box-title">Expert Garment Care</h4>
                          <p className="box-text">
                            Trained professionals handle every fabric with care
                            — from delicate silks to everyday cotton and wool.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*==============================
Process Area  
==============================*/}
        <section
          className="position-relative process1 bg-black-color2 space-top overflow-hidden"
          data-bg-src="/assets/img/shape/bg-shape5.png"
        >
          <div className="container">
            <div className="row">
              <div className="col-xxl-4">
                <div className="title-area mb-60">
                  <span
                    className="sub-title style2 text-theme2 border-theme2 text-anim after-none before-none"
                    data-cue="slideInLeft"
                  >
                    Work Process
                  </span>
                  <h2
                    className="sec-title style3 text-white text-anim2"
                    data-cue="slideInLeft"
                  >
                    How We Work!
                  </h2>
                </div>
              </div>
              <div className="col-xxl-8">
                <div className="process-card-wrap">
                  <div className="row gy-30">
                    <div className="col-xl-4 col-lg-4 col-md-4">
                      <div className="process-card" data-cue="slideInUp">
                        <div className="box-content">
                          <h3 className="box-title">Book a Pickup</h3>
                          <p className="box-text">
                            Contact us via WhatsApp or phone to schedule a free
                            pickup at your convenience. We'll be at your door.
                          </p>
                        </div>
                        <div className="box-thumb-wrap">
                          <div className="box-thumb">
                            <img
                              src="/assets/img/icon/process_1_1.svg"
                              alt="img"
                            />
                          </div>
                        </div>
                        <div className="box-bg-shape">
                          <img
                            src="/assets/img/icon/process-bg-shape.png"
                            alt
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4">
                      <div className="process-card" data-cue="slideInUp">
                        <div className="box-content">
                          <h3 className="box-title">We Clean &amp; Care</h3>
                          <p className="box-text">
                            We sort, treat stains, and clean your garments using
                            eco-friendly products. Each item gets the care it
                            deserves.
                          </p>
                        </div>
                        <div className="box-thumb-wrap">
                          <div className="box-thumb">
                            <img
                              src="/assets/img/icon/process_1_2.svg"
                              alt="img"
                            />
                          </div>
                        </div>
                        <div className="box-bg-shape">
                          <img
                            src="/assets/img/icon/process-bg-shape.png"
                            alt
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4">
                      <div className="process-card" data-cue="slideInUp">
                        <div className="box-content">
                          <h3 className="box-title">Delivered Fresh</h3>
                          <p className="box-box">
                            Fresh and neatly folded laundry delivered back to
                            your doorstep. Enjoy that fresh, clean feel every
                            time.
                          </p>
                        </div>
                        <div className="box-thumb-wrap">
                          <div className="box-thumb">
                            <img
                              src="/assets/img/icon/process_1_3.svg"
                              alt="img"
                            />
                          </div>
                        </div>
                        <div className="box-bg-shape">
                          <img
                            src="/assets/img/icon/process-bg-shape.png"
                            alt
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*==============================
Video Area  
==============================*/}
        <div
          className=" video-area-1 position-relative overflow-hidden"
          data-sec-pos="top-half"
          data-pos-for="#feature-sec"
        >
          <div
            className="price-bg-shape1-1 shape-mockup d-none d-xxl-block"
            data-bottom={0}
            data-left="7%"
          >
            <img src="/assets/img/shape/video_shape.png" alt="img" />
          </div>
          <div className="video-wrap">
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="video-thumb1-1 video-box-center"
                  data-overlay="black"
                  data-opacity={3}
                >
                  <img src="/assets/img/normal/video1-1.jpg" alt="img" />
                  <a
                    href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                    className="play-btn style2 popup-video"
                  >
                    <i className="fa-sharp fa-solid fa-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*==============================
Contact Area   
==============================*/}
        <div
          className="space overflow-hidden contact-area-1 position-relative z-index-common"
          id="contact-sec"
        >
          <div className="container">
            <div className="consulting-wrap1">
              <div className="row gy-60 align-items-center">
                <div className="col-xxl-6">
                  <div className="page-img mb-0">
                    <img
                      src="/assets/img/normal/consulting-thumb1-1.jpg"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="col-xxl-6">
                  <div className="consulting-form-wrap1">
                    <div className="title-area mb-60 ">
                      <span
                        className="sub-title style2 text-white border-white text-anim after-none before-none"
                        data-cue="slideInLeft"
                      >
                        Get In Touch
                      </span>
                      <h2 className="sec-title text-white">
                        Get Your Free <span>Estimate!</span>
                      </h2>
                    </div>
                    {/*==============================
Contact Area  
==============================*/}
                    <div className="contact-form-v1 ">
                      <form
                        action="/mail.php"
                        method="POST"
                        className="contact-form ajax-contact"
                      >
                        <div className="row">
                          <div className="form-group style-border col-md-6">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              id="name"
                              placeholder="Your name"
                            />
                            <i className="far fa-user" />
                          </div>
                          <div className="form-group style-border col-md-6">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              id="email"
                              placeholder="Email Address"
                            />
                            <i className="far fa-envelope" />
                          </div>
                          <div className="form-group style-border col-md-6">
                            <input
                              type="number"
                              className="form-control"
                              name="number"
                              id="number"
                              placeholder="Phone Number"
                            />
                            <i className="far fa-phone" />
                          </div>
                          <div className="form-group style-border col-md-6">
                            <select
                              name="subject"
                              id="subject"
                              className="form-select bg-white"
                            >
                              <option value disabled selected hidden>
                                Select Service
                              </option>
                              <option value="Wash &amp; Fold">
                                Wash &amp; Fold
                              </option>
                              <option value="Dry Cleaning">Dry Cleaning</option>
                              <option value="Stain Removal">
                                Stain Removal
                              </option>
                              <option value="Ironing &amp; Pressing">
                                Ironing &amp; Pressing
                              </option>
                            </select>
                          </div>
                          <div className="form-group style-border col-12">
                            <textarea
                              name="message"
                              id="message"
                              cols={30}
                              rows={3}
                              className="form-control"
                              placeholder="Write Message...."
                              defaultValue={""}
                            />
                            <i className="fa-light fa-pen" />
                          </div>
                          <div className="form-group col-12">
                            <div className="custom-checkbox">
                              <input type="checkbox" id="remembermylogin" />
                              <label
                                htmlFor="remembermylogin"
                                className="text-white"
                              >
                                I agree with the privacy policy
                              </label>
                            </div>
                          </div>
                          <div className="form-btn col-12">
                            <a
                              href="https://wa.me/966569385700?text=Hi%20Makkah%20Laundry%20Center!%20I%27d%20like%20to%20inquire%20about%20your%20laundry%20services.%20Please%20share%20details%20and%20preferred%20pickup%20time."
                              target="_blank"
                              className="th-btn style5"
                            >
                              Request A Quote
                              <span className="after-bg" />
                            </a>
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
          <div
            className="contact-thumb1-1-shape bg-mask"
            data-mask-src="/assets/img/shape/contact-thumb1-1-shape.jpg"
          >
            <img src="/assets/img/shape/bg-shape6.png" alt />
          </div>
        </div>
        {/*==============================
Testimonial Area  
==============================*/}
        <section
          className="testi-area-1 space-top overflow-hidden "
          id="testi-sec"
        >
          <div
            className="price-bg-shape1-1 shape-mockup "
            data-top="3%"
            data-right={0}
          >
            <img src="/assets/img/shape/bg-shape7.png" alt="img" />
          </div>
          <div className="container">
            <div className="row">
              <div className="title-area text-xl-start text-center">
                <div className="row ">
                  <div className="col-xl-3">
                    <h2
                      className="sub-title style2 text-anim after-none before-none  justify-content-xl-start justify-content-center"
                      data-cue="slideInLeft"
                    >
                      What Our Clients Say
                    </h2>
                  </div>
                  <div className="col-xl-6">
                    <h2
                      className="sec-title style2 text-anim2 mb-0"
                      data-cue="slideInLeft"
                    >
                      Reviews.
                    </h2>
                    <p className="sec-text" data-cue="slideInUp">
                      See what our customers in Makkah have to say about our
                      laundry and dry cleaning services. From wash &amp; fold to
                      premium dry cleaning, we take pride in every garment we
                      handle. Your satisfaction is what drives us to deliver the
                      best care for your clothes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row gy-50 flex-row-reverse">
              <div className="col-xl-6">
                <div className="testi-thumb1-1">
                  <div className="quote-icon">
                    <img src="/assets/img/icon/quote-icon2.svg" alt />
                  </div>
                  <div
                    className="img1 bg-mask"
                    data-mask-src="/assets/img/shape/testi-shape.png"
                  >
                    <img
                      src="/assets/img/testimonial/testi-thumb1-1.jpg"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="slider-area testi-slider1">
                  <div
                    className="swiper th-slider has-shadow"
                    id="testiSlide1"
                    data-slider-options='{"autoHeight": "true","breakpoints":{"0":{"slidesPerView":1},"768":{"slidesPerView":"1"},"992":{"slidesPerView":"1"},"1200":{"slidesPerView":"1"},"1600":{"slidesPerView":"1"}}}'
                  >
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="testi-card">
                          <div className="testi-card_review">
                            <i className="fa-sharp fa-solid fa-star" />
                            <i className="fa-sharp fa-solid fa-star" />
                            <i className="fa-sharp fa-solid fa-star" />
                            <i className="fa-sharp fa-solid fa-star" />
                            <i className="fa-sharp fa-solid fa-star" />
                          </div>
                          <p className="box-text">
                            Makkah Laundry Center has been a blessing for my
                            family. Their wash and fold service is excellent,
                            and the free pickup &amp; delivery saves me so much
                            time. Highly recommended!
                          </p>
                          <div className="testi-card-profile">
                            <div className="testi-card-profile-detaile">
                              <h3 className="box-title">Ahmed Al-Maliki</h3>
                              <p className="box-desig">Regular Client</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testi-card">
                          <div className="testi-card_review">
                            <i className="fa-sharp fa-solid fa-star" />
                            <i className="fa-sharp fa-solid fa-star" />
                            <i className="fa-sharp fa-solid fa-star" />
                            <i className="fa-sharp fa-solid fa-star" />
                            <i className="fa-sharp fa-solid fa-star" />
                          </div>
                          <p className="box-text">
                            I've been using Makkah Laundry Center for my
                            business shirts for months. The dry cleaning and
                            ironing are always perfect. They never disappoint
                            and always deliver on time.
                          </p>
                          <div className="testi-card-profile">
                            <div className="testi-card-profile-detaile">
                              <h3 className="box-title">Khalid Al-Ghamdi</h3>
                              <p className="box-desig">Business Client</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testi-card">
                          <div className="testi-card_review">
                            <i className="fa-sharp fa-solid fa-star" />
                            <i className="fa-sharp fa-solid fa-star" />
                            <i className="fa-sharp fa-solid fa-star" />
                            <i className="fa-sharp fa-solid fa-star" />
                            <i className="fa-sharp fa-solid fa-star" />
                          </div>
                          <p className="box-text">
                            Their stain removal service is incredible — my kids'
                            clothes come back looking brand new every time. Fair
                            prices and very professional. Makkah Laundry Center
                            is the best in town.
                          </p>
                          <div className="testi-card-profile">
                            <div className="testi-card-profile-detaile">
                              <h3 className="box-title">Ibrahim Al-Qahtani</h3>
                              <p className="box-desig">Happy Customer</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testi-card">
                          <div className="testi-card_review">
                            <i className="fa-sharp fa-solid fa-star" />
                            <i className="fa-sharp fa-solid fa-star" />
                            <i className="fa-sharp fa-solid fa-star" />
                            <i className="fa-sharp fa-solid fa-star" />
                            <i className="fa-sharp fa-solid fa-star" />
                          </div>
                          <p className="box-text">
                            Convenient, reliable, and high-quality service.
                            Booking via WhatsApp is so easy and they always
                            arrive on time. Makkah Laundry Center makes laundry
                            day effortless.
                          </p>
                          <div className="testi-card-profile">
                            <div className="testi-card-profile-detaile">
                              <h3 className="box-title">Mohammed Al-Harbi</h3>
                              <p className="box-desig">Regular Client</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="slider-pagination-wrap ">
                      <button
                        data-slider-prev="#testiSlide1"
                        className="slider-arrow style3 default"
                      >
                        <img src="/assets/img/icon/left-arrow.svg" alt />
                      </button>
                      <button
                        data-slider-next="#testiSlide1"
                        className="slider-arrow style3 default"
                      >
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
Brand Area  
==============================*/}
        <div className=" space overflow-hidden brand-area-1">
          <div className="container-fluid p-0">
            <div className="brand-wrap1 text-center">
              <div
                className="swiper th-slider"
                data-cue="slideInUp"
                id="brandSlider1"
                data-slider-options='{"breakpoints":{"0":{"slidesPerView":"auto"}},
       "autoplay":{"delay":0,"disableOnInteraction":false},"noSwiping":"true","speed":8000,"spaceBetween":126}'
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <a href="/services" className="brand-box">
                      <img
                        src="/assets/img/brand/brand1-1.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="/services" className="brand-box">
                      <img
                        src="/assets/img/brand/brand1-2.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="/services" className="brand-box">
                      <img
                        src="/assets/img/brand/brand1-3.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="/services" className="brand-box">
                      <img
                        src="/assets/img/brand/brand1-4.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="/services" className="brand-box">
                      <img
                        src="/assets/img/brand/brand1-5.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="/services" className="brand-box">
                      <img
                        src="/assets/img/brand/brand1-6.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="/services" className="brand-box">
                      <img
                        src="/assets/img/brand/brand1-1.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="/services" className="brand-box">
                      <img
                        src="/assets/img/brand/brand1-2.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="/services" className="brand-box">
                      <img
                        src="/assets/img/brand/brand1-3.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="/services" className="brand-box">
                      <img
                        src="/assets/img/brand/brand1-4.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="/services" className="brand-box">
                      <img
                        src="/assets/img/brand/brand1-5.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="/services" className="brand-box">
                      <img
                        src="/assets/img/brand/brand1-6.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="/services" className="brand-box">
                      <img
                        src="/assets/img/brand/brand1-1.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="/services" className="brand-box">
                      <img
                        src="/assets/img/brand/brand1-2.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="/services" className="brand-box">
                      <img
                        src="/assets/img/brand/brand1-3.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="/services" className="brand-box">
                      <img
                        src="/assets/img/brand/brand1-4.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="/services" className="brand-box">
                      <img
                        src="/assets/img/brand/brand1-5.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="/services" className="brand-box">
                      <img
                        src="/assets/img/brand/brand1-6.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="/services" className="brand-box">
                      <img
                        src="/assets/img/brand/brand1-1.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="/services" className="brand-box">
                      <img
                        src="/assets/img/brand/brand1-2.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="/services" className="brand-box">
                      <img
                        src="/assets/img/brand/brand1-3.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="/services" className="brand-box">
                      <img
                        src="/assets/img/brand/brand1-4.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="/services" className="brand-box">
                      <img
                        src="/assets/img/brand/brand1-5.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="/services" className="brand-box">
                      <img
                        src="/assets/img/brand/brand1-6.svg"
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*==============================
	Footer Area
==============================*/}
      </div>
    </PageLayout>
  );
}
