import PageLayout from "../components/layout/PageLayout";
import ServiceGrid from "../components/services/ServiceGrid";
import { laundryServices } from "../data/services";

export default function HomePage() {
  return (
    <PageLayout
      variant="homeOne"
      title="Makkah Laundry Center - Professional Laundry & Dry Cleaning Services"
      description="Makkah Laundry Center - Professional Laundry & Dry Cleaning Services"
    >
<div className="react-fragment">{/*==============================
Hero Area
==============================*/}
  <div className="th-hero-wrapper hero-1 bg-mask" id="hero" data-mask-src="/assets/img/shape/hero-thumb1-1-shape.png">
    <div className="swiper th-slider" id="heroSlider8" data-slider-options="{&quot;effect&quot;:&quot;fade&quot;, &quot;autoHeight&quot;: &quot;true&quot;}">
      <div className="swiper-wrapper">
        <div className="swiper-slide" data-bg-src="/assets/img/hero/hero_bg_1_1.jpg">
          <div className="hero-inner">
            <div className="container">
              <div className="hero-style1">
                <span className="sub-title style5" data-ani="slideinup" data-ani-delay="0.2s"> Professional Laundry &amp; Dry Cleaning Services</span>
                <h1 className="hero-title text-white">
                  <span className="title1" data-ani="slideinup" data-ani-delay="0.4s">Fresh &amp; Clean, Delivered to Your Door</span>
                </h1>
                <p className="hero-text text-white" data-ani="slideinup" data-ani-delay="0.6s">Free pickup &amp; delivery. Same-day turnaround. Premium care for all your fabrics — because your clothes deserve the best.</p>
                <div className="btn-group" data-ani="slideinup" data-ani-delay="0.7s">
                  <a href="https://wa.me/966569385700?text=Hi%20Makkah%20Laundry%20Center!%20I%27d%20like%20to%20inquire%20about%20your%20laundry%20services.%20Please%20share%20details%20and%20preferred%20pickup%20time." target="_blank" className="th-btn">
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
        <div className="swiper-slide" data-bg-src="/assets/img/hero/hero_bg_1_2.jpg">
          <div className="hero-inner">
            <div className="container">
              <div className="hero-style1">
                <span className="sub-title style5" data-ani="slideinup" data-ani-delay="0.2s"> Expert Care for Every Fabric</span>
                <h1 className="hero-title text-white">
                  <span className="title1" data-ani="slideinup" data-ani-delay="0.4s">Your Clothes Deserve the Best</span>
                </h1>
                <p className="hero-text text-white" data-ani="slideinup" data-ani-delay="0.6s">Eco-friendly washing, expert stain removal, and professional pressing — handled with care. We treat your garments like our own.</p>
                <div className="btn-group" data-ani="slideinup" data-ani-delay="0.7s">
                  <a href="https://wa.me/966569385700?text=Hi%20Makkah%20Laundry%20Center!%20I%27d%20like%20to%20inquire%20about%20your%20laundry%20services.%20Please%20share%20details%20and%20preferred%20pickup%20time." target="_blank" className="th-btn">
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
        <button data-slider-prev="#heroSlider8" className="slider-arrow style2 default">
          <img src="/assets/img/icon/left-arrow.svg" alt />
        </button>
        <button data-slider-next="#heroSlider8" className="slider-arrow style2 default">
          <img src="/assets/img/icon/right-arrow.svg" alt />
        </button>
      </div>
    </div>
    <div className="scroll-down">
      <a href="#about-sec" className="scroll-wrap">Scroll Down<span><img src="/assets/img/icon/down-arrow.svg" alt /></span></a>
    </div>
  </div>
  {/*======== / Hero Section ========*/}{/*==============================
Feature Area  
==============================*/}
  <section className=" feature-area-1 position-relative pt-40">
    <div className="container">
      <div className="row gy-4 justify-content-center">
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
          <div className="feature-card" data-cue="slideInUp">
            <div className="box-icon">
              <div>
                <img src="/assets/img/icon/feature-icon1-1.svg" alt="icon" />
              </div>
            </div>
            <div className="feature-card-details text-left">
              <h3 className="box-title">Highly skilled team</h3>
              <p className="box-text">Skilled, certified &amp; continuously educated plumbers voluptuous selenite antique corrupted.</p>
              <a href="https://wa.me/966569385700?text=Hi%20Makkah%20Laundry%20Center!%20I%27d%20like%20to%20inquire%20about%20your%20laundry%20services.%20Please%20share%20details%20and%20preferred%20pickup%20time." target="_blank" className="link-btn2">
                <span>Book Now</span>
                <div className="icon">
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
          <div className="feature-card" data-cue="slideInUp">
            <div className="box-icon">
              <div>
                <img src="/assets/img/icon/feature-icon1-2.svg" alt="icon" />
              </div>
            </div>
            <div className="feature-card-details text-left">
              <h3 className="box-title">Fast and reliable</h3>
              <p className="box-text">Skilled, certified &amp; continuously educated plumbers voluptuous selenite antique corrupted.</p>
              <a href="https://wa.me/966569385700?text=Hi%20Makkah%20Laundry%20Center!%20I%27d%20like%20to%20inquire%20about%20your%20laundry%20services.%20Please%20share%20details%20and%20preferred%20pickup%20time." target="_blank" className="link-btn2">
                <span>Book Now</span>
                <div className="icon">
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
          <div className="feature-card" data-cue="slideInUp">
            <div className="box-icon">
              <div>
                <img src="/assets/img/icon/feature-icon1-3.svg" alt="icon" />
              </div>
            </div>
            <div className="feature-card-details text-left">
              <h3 className="box-title">24/7 availability</h3>
              <p className="box-text">Skilled, certified &amp; continuously educated plumbers voluptuous selenite antique corrupted.</p>
              <a href="https://wa.me/966569385700?text=Hi%20Makkah%20Laundry%20Center!%20I%27d%20like%20to%20inquire%20about%20your%20laundry%20services.%20Please%20share%20details%20and%20preferred%20pickup%20time." target="_blank" className="link-btn2">
                <span>Book Now</span>
                <div className="icon">
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> {/*==============================
About Area  
==============================*/}
  <div className="overflow-hidden space overflow-hidden " id="about-sec">
    <div className="container">
      <div className="about-wrap1">
        <div className="title-area">
          <div className="row gx-60 justify-content-center align-items-start">
            <div className="col-auto">
              <div className="text-center">
                <span className="sub-title style2 text-anim after-none before-none" data-cue="slideInUp">Who we Are</span>
              </div>
            </div>
            <div className="col-auto">
              <div className="text-center">
                <h2 className="sec-title style2 text-anim2 mb-0" data-cue="slideInUp">About Us
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row gx-60">
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="img-box1" data-cue="slideInUp" data-delay={300}>
              <div className="img2 bg-mask" data-mask-src="/assets/img/shape/about-thumb1-1-shape.png">
                <img src="/assets/img/normal/about-thumb1-1.jpg" alt="About" />
              </div>
              <div className="circle-tag d-none d-xxl-block">
                <span className="circle-title-anime">** Years of Experience **Years of Experience</span>
                <h2 className="box-number"><span className="counter-number">12</span><span className="counter-marker">+</span></h2>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="about-wrap" data-cue="slideInUp">
              <div className="title-area mb-40">
                <p>Our plumbing services are designed to provide fast, reliable, and long-lasting solutions for both residential and commercial needs. Whether it’s a leaky faucet, clogged drain, burst pipe, or a full plumbing installation, our team of licensed plumbers is equipped with the tools</p>
              </div>
              <div className="checklist style">
                <ul>
                  <li>
                    emergency plumbing repairs
                  </li>
                  <li>
                    preventative maintenance.
                  </li>
                  <li>
                    Customer satisfaction is our top priority
                  </li>
                </ul>
              </div>
              <div className="btn-wrap mt-40">
                <a href="/about" className="th-btn">
                  Discover More
                  <span className="after-bg" />
                </a>
                <div className="about-grid style2">
                  <div className="thumb">
                    <img className="about-grid_thumb" src="/assets/img/normal/client-group-1.jpg" alt="about" />
                  </div>
                  <div className="details">
                    <img className="about-grid_sign" src="/assets/img/normal/sign.png" alt="about" />
                    <p className="about-grid_text">CEO, Of Company</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="img-box2 d-none d-xxl-block d-xl-block">
              <div className="row">
                <div className="col-xxl-6 col-md-6" data-cue="slideInUp">
                  <div className="img-box1">
                    <div className="img1">
                      <img src="/assets/img/normal/about-thumb1-2.jpg" alt="About" />
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-md-6" data-cue="slideInUp">
                  <div className="img-box1">
                    <div className="img1">
                      <img src="/assets/img/normal/about-thumb1-3.jpg" alt="About" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-mockup jump d-none d-xxl-block  " style={{bottom: '0%', left: '4%'}}>
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
      <div className="swiper th-slider marquee-slider1" data-slider-options="{&quot;breakpoints&quot;:{&quot;0&quot;:{&quot;slidesPerView&quot;:&quot;auto&quot;}},&quot;autoplay&quot;:{&quot;delay&quot;:0,&quot;disableOnInteraction&quot;:false},&quot;noSwiping&quot;:&quot;true&quot;,&quot;speed&quot;:10000,&quot;spaceBetween&quot;:30}">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="marquee-card">
              <div className="marquee-icon color-masking">
                <div className="masking-src" data-mask-src="/assets/img/shape/star-shape1.png" />
                <img src="/assets/img/shape/star-shape1.png" alt="img" />
              </div>
              <a target="_blank" href="#" data-hover="Cleaning Services">
                Cleaning Services </a>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="marquee-card">
              <div className="marquee-icon color-masking">
                <div className="masking-src" data-mask-src="/assets/img/shape/star-shape1.png" />
                <img src="/assets/img/shape/star-shape1.png" alt="img" />
              </div>
              <a target="_blank" href="#" data-hover="Plumbing Services">
                Plumbing Services </a>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="marquee-card">
              <div className="marquee-icon color-masking">
                <div className="masking-src" data-mask-src="/assets/img/shape/star-shape1.png" />
                <img src="/assets/img/shape/star-shape1.png" alt="img" />
              </div>
              <a target="_blank" href="#" data-hover="Electrical Services">
                Electrical Services </a>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="marquee-card">
              <div className="marquee-icon color-masking">
                <div className="masking-src" data-mask-src="/assets/img/shape/star-shape1.png" />
                <img src="/assets/img/shape/star-shape1.png" alt="img" />
              </div>
              <a target="_blank" href="#" data-hover="Cleaning Services">
                Cleaning Services </a>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="marquee-card">
              <div className="marquee-icon color-masking">
                <div className="masking-src" data-mask-src="/assets/img/shape/star-shape1.png" />
                <img src="/assets/img/shape/star-shape1.png" alt="img" />
              </div>
              <a target="_blank" href="#" data-hover="Plumbing Services">
                Plumbing Services </a>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="marquee-card">
              <div className="marquee-icon color-masking">
                <div className="masking-src" data-mask-src="/assets/img/shape/star-shape1.png" />
                <img src="/assets/img/shape/star-shape1.png" alt="img" />
              </div>
              <a target="_blank" href="#" data-hover="Electrical Services">
                Electrical Services </a>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="marquee-card">
              <div className="marquee-icon color-masking">
                <div className="masking-src" data-mask-src="/assets/img/shape/star-shape1.png" />
                <img src="/assets/img/shape/star-shape1.png" alt="img" />
              </div>
              <a target="_blank" href="#" data-hover="Cleaning Services">
                Cleaning Services </a>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="marquee-card">
              <div className="marquee-icon color-masking">
                <div className="masking-src" data-mask-src="/assets/img/shape/star-shape1.png" />
                <img src="/assets/img/shape/star-shape1.png" alt="img" />
              </div>
              <a target="_blank" href="#" data-hover="Plumbing Services">
                Plumbing Services </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==============================
Service Area  
==============================*/}
  <section className="space bg-smoke overflow-hidden bg-gray-color service-wrap mb-40" id="service-sec">
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
              <h2 className="sec-title style3 style7 mb-0" data-cue="slideInUp">We Provide Best Laundry <br /> <span>Services for You</span></h2>
            </div>
          </div>
          <div>
            <div className="title-area-right text-start" data-cue="slideInUp">
              <p className="mb-0">From premium dry cleaning and expert stain removal to gentle Ihram care and free doorstep delivery — we handle every fabric with professional care.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <ServiceGrid services={laundryServices} />
    </div>
  </section>
  {/*==============================
Counter Area  
==============================*/}
  <div className="counter-area-2 space overflow-hidden position-relative z-index-2" data-bg-src="/assets/img/normal/funfact-img.jpg">
    <div className="container">
      <div className="counter-wrap2">
        <div className="counter-card2" data-cue="slideInUp">
          <div className="media-body">
            <h2 className="box-number"><span className="counter-number">98</span>%</h2>
            <p className="box-text">Happy Customers</p>
          </div>
        </div>
        <div className="counter-card2" data-cue="slideInUp">
          <div className="media-body">
            <h2 className="box-number"><span className="counter-number">52</span>k</h2>
            <p className="box-text">Complete Projects</p>
          </div>
        </div>
        <div className="counter-card2" data-cue="slideInUp">
          <div className="media-body">
            <h2 className="box-number"><span className="counter-number">2</span>K</h2>
            <p className="box-text">Professional Team</p>
          </div>
        </div>
        <div className="counter-card2" data-cue="slideInUp">
          <div className="media-body">
            <h2 className="box-number"><span className="counter-number">1</span>k</h2>
            <p className="box-text">Global Stores</p>
          </div>
        </div>
      </div>
    </div>
  </div>{/*==============================
Why Choose Us Area  
==============================*/}
  <div className="why-sec-1 overflow-hidden space  overflow-hidden">
    <div className="container">
      <div className="row gy-40 gx-80">
        <div className="col-xxl-6 ">
          <div className="title-area mb-60">
            <span className="sub-title style2 text-anim after-none before-none" data-cue="slideInLeft">Why Choose Us</span>
            <h2 className="sec-title style3 text-anim2" data-cue="slideInLeft">
              Why Makkah Trusts <br />
              Us For <span>Clean, Fresh Laundry</span>
            </h2>
          </div>
          <div className="why-img-box1" data-cue="slideInUp">
            <img src="/assets/img/normal/why-thumb1-1.jpg" alt="img" />
          </div>
        </div>
        <div className="col-xxl-6">
          <div className="why-card-wrap">
            <div className="row gy-4 justify-content-center">
              <div className="col-xxl-6 col-lg-6 col-md-6">
                <div className="why-card" data-cue="slideInUp">
                  <div className="box-icon">
                    <img src="/assets/img/icon/why-icon1-1.svg" alt="why-icon" />
                  </div>
                  <div className="box-details">
                    <h4 className="box-title">Free Pickup &amp; Delivery</h4>
                    <p className="box-text">We collect your laundry from your doorstep and return it fresh and folded — no driving, no waiting.</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-lg-6 col-md-6">
                <div className="why-card" data-cue="slideInUp">
                  <div className="box-icon">
                    <img src="/assets/img/icon/why-icon1-2.svg" alt="why-icon" />
                  </div>
                  <div className="box-details">
                    <h4 className="box-title">Eco-Friendly Cleaning</h4>
                    <p className="box-text">We use non-toxic, eco-friendly detergents and solvents that are safe for your family and the environment.</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-lg-6 col-md-6">
                <div className="why-card" data-cue="slideInUp">
                  <div className="box-icon">
                    <img src="/assets/img/icon/why-icon1-3.svg" alt="why-icon" />
                  </div>
                  <div className="box-details">
                    <h4 className="box-title">Transparent Pricing</h4>
                    <p className="box-text">What you see is what you pay. No hidden fees, no surprises — just honest, affordable rates.</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-lg-6 col-md-6">
                <div className="why-card" data-cue="slideInUp">
                  <div className="box-icon">
                    <img src="/assets/img/icon/why-icon1-4.svg" alt="why-icon" />
                  </div>
                  <div className="box-details">
                    <h4 className="box-title">Expert Garment Care</h4>
                    <p className="box-text">Trained professionals handle every fabric with care — from delicate silks to everyday cotton and wool.</p>
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
    Team Area  
==============================*/}
  <section className="space overflow-hidden team-area-1">
    <div className="container">
      <div className="row">
        <div className="col-xxl-6">
          <div className="title-area mb-60">
            <span className="sub-title style2 text-anim after-none before-none" data-cue="slideInLeft">Our Team</span>
            <h2 className="sec-title style3 text-anim2" data-cue="slideInLeft">
              Meet Our Professional<br />
              <span>Plumber Team.</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="row gy-4">
        <div className="col-xl-4 col-lg-4 col-md-6 order-xxl-1 order-1">
          <div className="th-team team-card" data-cue="slideInUp">
            <div className="team-img">
              <img src="/assets/img/team/team_1_1.jpg" alt="Team" />
            </div>
            <div className="team-card-content">
              <h3 className="box-title"><a href="/team/details">Michel Manthan</a></h3>
              <span className="team-desig">Expert Plumber</span>
            </div>
            <div className="th-social">
              <a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f" /></a>
              <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter" /></a>
              <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram" /></a>
              <a target="_blank" href="https://whatsapp.com/"><i className="fab fa-whatsapp" /></a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 order-xxl-2 order-2">
          <div className="th-team team-card" data-cue="slideInUp">
            <div className="team-img">
              <img src="/assets/img/team/team_1_2.jpg" alt="Team" />
            </div>
            <div className="team-card-content">
              <h3 className="box-title"><a href="/team/details">Jenny William</a></h3>
              <span className="team-desig">Expert Plumber</span>
            </div>
            <div className="th-social">
              <a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f" /></a>
              <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter" /></a>
              <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram" /></a>
              <a target="_blank" href="https://whatsapp.com/"><i className="fab fa-whatsapp" /></a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 order-xxl-5 order-3">
          <div className="th-team team-card" data-cue="slideInUp">
            <div className="team-img">
              <img src="/assets/img/team/team_1_3.jpg" alt="Team" />
            </div>
            <div className="team-card-content">
              <h3 className="box-title"><a href="/team/details">Daniel Thomas</a></h3>
              <span className="team-desig">Expert Plumber</span>
            </div>
            <div className="th-social">
              <a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f" /></a>
              <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter" /></a>
              <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram" /></a>
              <a target="_blank" href="https://whatsapp.com/"><i className="fab fa-whatsapp" /></a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 order-xxl-6 order-4">
          <div className="th-team team-card" data-cue="slideInUp">
            <div className="team-img">
              <img src="/assets/img/team/team_1_4.jpg" alt="Team" />
            </div>
            <div className="team-card-content">
              <h3 className="box-title"><a href="/team/details">Daniel Thomas</a></h3>
              <span className="team-desig">Expert Plumber</span>
            </div>
            <div className="th-social">
              <a target="_blank" href="https://facebook.com/"><i className="fab fa-facebook-f" /></a>
              <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter" /></a>
              <a target="_blank" href="https://instagram.com/"><i className="fab fa-instagram" /></a>
              <a target="_blank" href="https://whatsapp.com/"><i className="fab fa-whatsapp" /></a>
            </div>
          </div>
        </div>
        <div className="order-xxl-2 col-xxl-4 d-none d-xxl-inline col-lg-4 col-md-6 align-self-center text-center">
          <div className="team-bg-shape">
            <img src="/assets/img/shape/bg-shape4.png" alt />
          </div>
        </div>
        <div className="order-xxl-3 order-5 col-xl-4 col-lg-4 col-md-6 align-self-center text-center">
          <a href="/team" className="circle-btn th-btn  mt-xl-0 mt-30" data-cue="slideInUp">
            Join With Us
          </a>
        </div>
      </div>
    </div>
  </section>{/*==============================
Process Area  
==============================*/}
  <section className="position-relative process1 bg-black-color2 space-top overflow-hidden" data-bg-src="/assets/img/shape/bg-shape5.png">
    <div className="container">
      <div className="row">
        <div className="col-xxl-4">
          <div className="title-area mb-60">
            <span className="sub-title style2 text-theme2 border-theme2 text-anim after-none before-none" data-cue="slideInLeft">Work Process</span>
            <h2 className="sec-title style3 text-white text-anim2" data-cue="slideInLeft">
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
                    <p className="box-text">Contact us via WhatsApp or phone to schedule a free pickup at your convenience. We'll be at your door.</p>
                  </div>
                  <div className="box-thumb-wrap">
                    <div className="box-thumb">
                      <img src="/assets/img/icon/process_1_1.svg" alt="img" />
                    </div>
                  </div>
                  <div className="box-bg-shape">
                    <img src="/assets/img/icon/process-bg-shape.png" alt />
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="process-card" data-cue="slideInUp">
                  <div className="box-content">
                    <h3 className="box-title">We Clean &amp; Care</h3>
                    <p className="box-text">We sort, treat stains, and clean your garments using eco-friendly products. Each item gets the care it deserves.</p>
                  </div>
                  <div className="box-thumb-wrap">
                    <div className="box-thumb">
                      <img src="/assets/img/icon/process_1_2.svg" alt="img" />
                    </div>
                  </div>
                  <div className="box-bg-shape">
                    <img src="/assets/img/icon/process-bg-shape.png" alt />
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="process-card" data-cue="slideInUp">
                  <div className="box-content">
                    <h3 className="box-title">Delivered Fresh</h3>
                    <p className="box-box">Fresh and neatly folded laundry delivered back to your doorstep. Enjoy that fresh, clean feel every time.</p>
                  </div>
                  <div className="box-thumb-wrap">
                    <div className="box-thumb">
                      <img src="/assets/img/icon/process_1_3.svg" alt="img" />
                    </div>
                  </div>
                  <div className="box-bg-shape">
                    <img src="/assets/img/icon/process-bg-shape.png" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/*==============================
Video Area  
==============================*/}
  <div className=" video-area-1 position-relative overflow-hidden" data-sec-pos="top-half" data-pos-for="#feature-sec">
    <div className="price-bg-shape1-1 shape-mockup d-none d-xxl-block" data-bottom={0} data-left="7%">
      <img src="/assets/img/shape/video_shape.png" alt="img" />
    </div>
    <div className="video-wrap">
      <div className="row">
        <div className="col-lg-12">
          <div className="video-thumb1-1 video-box-center" data-overlay="black" data-opacity={3}>
            <img src="/assets/img/normal/video1-1.jpg" alt="img" />
            <a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk" className="play-btn style2 popup-video"><i className="fa-sharp fa-solid fa-play" /></a>
          </div>
        </div>
      </div>
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
                  <a href="https://wa.me/966569385700?text=Hi%20Makkah%20Laundry%20Center!%20I%27d%20like%20to%20inquire%20about%20your%20laundry%20services.%20Please%20share%20details%20and%20preferred%20pickup%20time." target="_blank" className="th-btn style4">
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
                  <a href="https://wa.me/966569385700?text=Hi%20Makkah%20Laundry%20Center!%20I%27d%20like%20to%20inquire%20about%20your%20laundry%20services.%20Please%20share%20details%20and%20preferred%20pickup%20time." target="_blank" className="th-btn style4">
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
                  <a href="https://wa.me/966569385700?text=Hi%20Makkah%20Laundry%20Center!%20I%27d%20like%20to%20inquire%20about%20your%20laundry%20services.%20Please%20share%20details%20and%20preferred%20pickup%20time." target="_blank" className="th-btn style4">
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
  </section>{/*==============================
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
                      <a href="https://wa.me/966569385700?text=Hi%20Makkah%20Laundry%20Center!%20I%27d%20like%20to%20inquire%20about%20your%20laundry%20services.%20Please%20share%20details%20and%20preferred%20pickup%20time." target="_blank" className="th-btn style5">
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
    <div className="contact-thumb1-1-shape bg-mask" data-mask-src="/assets/img/shape/contact-thumb1-1-shape.jpg">
      <img src="/assets/img/shape/bg-shape6.png" alt />
    </div>
  </div>
  {/*==============================
Testimonial Area  
==============================*/}
  <section className="testi-area-1 space-top overflow-hidden " id="testi-sec">
    <div className="price-bg-shape1-1 shape-mockup " data-top="3%" data-right={0}>
      <img src="/assets/img/shape/bg-shape7.png" alt="img" />
    </div>
    <div className="container">
      <div className="row">
        <div className="title-area text-xl-start text-center">
          <div className="row ">
            <div className="col-xl-3">
              <h2 className="sub-title style2 text-anim after-none before-none  justify-content-xl-start justify-content-center" data-cue="slideInLeft">What Our Clients Say</h2>
            </div>
            <div className="col-xl-6">
              <h2 className="sec-title style2 text-anim2 mb-0" data-cue="slideInLeft">Reviews.</h2>
              <p className="sec-text" data-cue="slideInUp">See what our customers in Makkah have to say about our laundry and dry cleaning services. From wash &amp; fold to premium dry cleaning, we take pride in every garment we handle. Your satisfaction is what drives us to deliver the best care for your clothes.</p>
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
            <div className="img1 bg-mask" data-mask-src="/assets/img/shape/testi-shape.png">
              <img src="/assets/img/testimonial/testi-thumb1-1.jpg" alt="img" />
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="slider-area testi-slider1">
            <div className="swiper th-slider has-shadow" id="testiSlide1" data-slider-options="{&quot;autoHeight&quot;: &quot;true&quot;,&quot;breakpoints&quot;:{&quot;0&quot;:{&quot;slidesPerView&quot;:1},&quot;768&quot;:{&quot;slidesPerView&quot;:&quot;1&quot;},&quot;992&quot;:{&quot;slidesPerView&quot;:&quot;1&quot;},&quot;1200&quot;:{&quot;slidesPerView&quot;:&quot;1&quot;},&quot;1600&quot;:{&quot;slidesPerView&quot;:&quot;1&quot;}}}">
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
                    <p className="box-text">Makkah Laundry Center has been a blessing for my family. Their wash and fold service is excellent, and the free pickup &amp; delivery saves me so much time. Highly recommended!</p>
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
                    <p className="box-text">I've been using Makkah Laundry Center for my business shirts for months. The dry cleaning and ironing are always perfect. They never disappoint and always deliver on time.</p>
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
                    <p className="box-text">Their stain removal service is incredible — my kids' clothes come back looking brand new every time. Fair prices and very professional. Makkah Laundry Center is the best in town.</p>
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
                    <p className="box-text">Convenient, reliable, and high-quality service. Booking via WhatsApp is so easy and they always arrive on time. Makkah Laundry Center makes laundry day effortless.</p>
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
Brand Area  
==============================*/}
  <div className=" space overflow-hidden brand-area-1">
    <div className="container-fluid p-0">
      <div className="brand-wrap1 text-center">
        <div className="swiper th-slider" data-cue="slideInUp" id="brandSlider1" data-slider-options="{&quot;breakpoints&quot;:{&quot;0&quot;:{&quot;slidesPerView&quot;:&quot;auto&quot;}},
       &quot;autoplay&quot;:{&quot;delay&quot;:0,&quot;disableOnInteraction&quot;:false},&quot;noSwiping&quot;:&quot;true&quot;,&quot;speed&quot;:8000,&quot;spaceBetween&quot;:126}">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand1-1.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand1-2.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand1-3.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand1-4.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand1-5.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand1-6.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand1-1.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand1-2.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand1-3.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand1-4.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand1-5.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand1-6.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand1-1.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand1-2.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand1-3.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand1-4.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand1-5.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand1-6.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand1-1.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand1-2.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand1-3.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand1-4.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand1-5.svg" alt="Brand Logo" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="/blog" className="brand-box">
                <img src="/assets/img/brand/brand1-6.svg" alt="Brand Logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==============================
Blog Area  
==============================*/}
  <section className="space overflow-hidden bg-gray-color" id="blog-sec">
    <div className="container">
      <div className="title-area style2 common-style-for-title ">
        <div>
          <div className=" ">
            <div className="text-xxl-end text-xl-end text-lg-end text-start">
              <span className="sub-title style2 after-none before-none" data-cue="slideInUp">News &amp; Blog</span>
              <h2 className="sec-title style3 mb-0" data-cue="slideInUp">Latest News &amp; Blog</h2>
            </div>
          </div>
          <div>
            <div className="title-area-right text-start">
              <p className="mb-30">Our plumbing services are designed to provide fast, reliable, and long-lasting solutions for both residential and commercial needs. Whether it’s a leaky faucet, clogged drain, burst pipe,</p>
              <a href="/blog" className="th-btn">
                View All Post
                <span className="after-bg" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="title-area style2 ">
       <div class="row justify-content-center align-items-start">
         <div class="col-xxl-6 col-xl-6 col-lg-6 ">
            <div class="text-xxl-end text-xl-end text-lg-end text-start">
               <span class="sub-title style2 after-none before-none" data-cue="slideInUp">News & Blog</span>
               <h2 class="sec-title style3 mb-0" data-cue="slideInUp">Latest News & Blog</h2>
            </div>
         </div>
         <div class="col-xxl-6 col-xl-6 col-lg-6" data-cue="slideInUp">
            <div class="title-area-right text-start">
               <p class="mb-30">Our plumbing services are designed to provide fast, reliable, and long-lasting solutions for both residential and commercial needs. Whether it’s a leaky faucet, clogged drain, burst pipe,</p>
               <a href="/blog" class="th-btn">
                  View All Post
                  <span class="after-bg"></span>
                </a>
            </div>
         </div>
      </div>
   </div> */}
      <div className="row gy-40 justify-content-center">
        <div className="col-xl-4 col-lg-6" data-cue="slideInUp">
          <div className="blog-card position-relative">
            <div className="blog-img">
              <a href="/blog/details">
                <img src="/assets/img/blog/blog_1_1.jpg" alt="blog image" />
              </a>
              <div className="blog-date">
                <h3>24 </h3>
                <span>Jan</span>
              </div>
            </div>
            <div className="blog-content">
              <span className="box-tag">Kitchen Plumbing</span>
              <h3 className="box-title"><a href="/blog/details">Achieving calm minds from plumbing issues </a></h3>
              <a href="/blog/details" className="link-btn">
                Read More
                <span className="after-bg" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6" data-cue="slideInUp">
          <div className="blog-card position-relative">
            <div className="blog-img">
              <a href="/blog/details">
                <img src="/assets/img/blog/blog_1_2.jpg" alt="blog image" />
              </a>
              <div className="blog-date">
                <h3>16 </h3>
                <span>Jan</span>
              </div>
            </div>
            <div className="blog-content">
              <span className="box-tag">Bathroom Plumbing</span>
              <h3 className="box-title"><a href="/blog/details">Expert Tips &amp; Stories from the Plumbing World</a></h3>
              <a href="/blog/details" className="link-btn">
                Read More
                <span className="after-bg" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6" data-cue="slideInUp">
          <div className="blog-card position-relative">
            <div className="blog-img">
              <a href="/blog/details">
                <img src="/assets/img/blog/blog_1_3.jpg" alt="blog image" />
              </a>
              <div className="blog-date">
                <h3>30 </h3>
                <span>Jan</span>
              </div>
            </div>
            <div className="blog-content">
              <span className="box-tag">Kitchen Plumbing</span>
              <h3 className="box-title"><a href="/blog/details">Solving Everyday Plumbing Challenges with Ease</a></h3>
              <a href="/blog/details" className="link-btn">
                Read More
                <span className="after-bg" />
              </a>
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
