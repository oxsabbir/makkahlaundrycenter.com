import PageLayout from "../components/layout/PageLayout";

export default function AboutPage() {
  return (
    <PageLayout
      title="About Us - Makkah Laundry Center"
      description="Professional laundry care across Makkah with WhatsApp booking, hotel pickup, and careful garment handling."
    >
      <div className="react-fragment">
        {/*==============================
    Breadcumb
============================== */}
        <div
          className="breadcumb-wrapper bg-mask "
          data-mask-src="/assets/img/shape/breadcumb-shape.png"
          data-bg-src="/assets/img/bg/about.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-xxl-12">
                <div className="breadcumb-content">
                  <h1 className="breadcumb-title ">About Us </h1>
                  <ul className="breadcumb-menu">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>About Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                        data-cue=""
                      >
                        Who we Are
                      </span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="text-center">
                      <h2
                        className="sec-title style2 text-anim2 mb-0"
                        data-cue=""
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
                        src="/assets/img/normal/about-thumb1-1.jpg"
                        alt="About"
                      />
                    </div>
                    <div className="circle-tag d-none d-xxl-block">
                      <span className="circle-title-anime">
                        ** Years of Experience **Years of Experience
                      </span>
                      <h2 className="box-number">
                        <span className="counter-number">10</span>
                        <span className="counter-marker">+</span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6">
                  <div className="about-wrap" data-cue="slideInUp">
                    <div className="title-area mb-40">
                      <p>
                        Makkah Laundry Center provides professional garment care
                        across Makkah, serving Umrah and Hajj pilgrims, hotel
                        guests, residents, and businesses. From everyday
                        wash-and-fold to delicate dry cleaning and special Ihram
                        care, we handle every garment with attention and
                        respect.
                      </p>
                    </div>
                    <div className="checklist style">
                      <ul>
                        <li>Separate-order washing for each customer</li>
                        <li>Perfume-free care for Ihram garments</li>
                        <li>
                          Free pickup and delivery from your hotel or home
                        </li>
                      </ul>
                    </div>
                    <div className="btn-wrap mt-40">
                      <a href="/services" className="th-btn">
                        Our Services
                        <span className="after-bg" />
                      </a>
                      <div className="about-grid style2">
                        <div className="thumb">
                          <img
                            className="about-grid_thumb"
                            src="/assets/img/normal/client-group-1.jpg"
                            alt="about"
                          />
                        </div>
                        <div className="details">
                          <img
                            className="about-grid_sign"
                            src="/assets/img/normal/sign.png"
                            alt="about"
                          />
                          <p className="about-grid_text">
                            Makkah Laundry Center
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="img-box2 d-none d-xxl-block d-xl-block">
                    <div className="row">
                      <div className="col-xxl-6 col-md-6" data-cue="slideInUp">
                        <div className="img-box1">
                          <div className="img1">
                            <img
                              src="/assets/img/normal/about-thumb1-2.jpg"
                              alt="About"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-6 col-md-6" data-cue="slideInUp">
                        <div className="img-box1">
                          <div className="img1">
                            <img
                              src="/assets/img/normal/about-thumb1-3.jpg"
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
Feature Area  
==============================*/}
        <section className=" feature-area-1 position-relative space-bottom">
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
                    <h3 className="box-title">Professional garment care</h3>
                    <p className="box-text">
                      Each order is washed separately with care. We handle
                      everything from everyday clothes to delicate fabrics,
                      thobes, and abayas.
                    </p>
                    <a href="/services" className="link-btn2">
                      <span>Learn More</span>
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
                    <h3 className="box-title">Fast &amp; reliable service</h3>
                    <p className="box-text">
                      Quick turnaround with same-day and express options
                      available. We respect your time and deliver when promised.
                    </p>
                    <a href="/services" className="link-btn2">
                      <span>Learn More</span>
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
                    <h3 className="box-title">Hotel &amp; home pickup</h3>
                    <p className="box-text">
                      We pick up your laundry from your hotel or home in Makkah
                      and deliver it back clean and folded — free of charge.
                    </p>
                    <a href="/contact" className="link-btn2">
                      <span>Learn More</span>
                      <div className="icon"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                    <span className="counter-number">10</span>K+
                  </h2>
                  <p className="box-text">Orders Completed</p>
                </div>
              </div>
              <div className="counter-card2" data-cue="slideInUp">
                <div className="media-body">
                  <h2 className="box-number">
                    <span className="counter-number">25</span>+
                  </h2>
                  <p className="box-text">Professional Team</p>
                </div>
              </div>
              <div className="counter-card2" data-cue="slideInUp">
                <div className="media-body">
                  <h2 className="box-number">
                    <span className="counter-number">15</span>+
                  </h2>
                  <p className="box-text">Areas Covered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*==============================
Process Area  
==============================*/}
        <section
          className="position-relative process3  space overflow-hidden"
          data-bg-src="/assets/img/shape/bg-shape5-1.png"
        >
          <div className="container">
            <div className="row">
              <div className="col-xxl-4">
                <div className="title-area mb-60">
                  <span
                    className="sub-title style2 text-anim after-none before-none"
                    data-cue="slideInLeft"
                  >
                    Work Process
                  </span>
                  <h2
                    className="sec-title style3 text-anim2"
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
                          <h3 className="box-title">WhatsApp Booking</h3>
                          <p className="box-text">
                            Send us your laundry details, location, and
                            preferred pickup time via WhatsApp. We confirm
                            within minutes.
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
                          <h3 className="box-title">Collect &amp; Label</h3>
                          <p className="box-text">
                            Our driver picks up your garments, counts and labels
                            each item, and notes any special instructions like
                            perfume-free care.
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
                          <h3 className="box-title">Wash &amp; Deliver</h3>
                          <p className="box-text">
                            We clean, dry, iron, and fold with care. Your order
                            is delivered back to your hotel or home, fresh and
                            ready to wear.
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
Team Area  
==============================*/}
        <section className="space overflow-hidden position-relative team-area-4 ">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-xxl-12">
                <div className="title-area text-center pt-1">
                  <span
                    className="sub-title style2 text-anim after-none before-none"
                    data-cue="slideInLeft"
                  >
                    Our Team
                  </span>
                  <h2
                    className="sec-title style3 text-anim2"
                    data-cue="slideInLeft"
                  >
                    Meet Our <br /> <span>Laundry Team.</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="slider-area ">
              <div
                className="swiper th-slider team-slider6"
                id="teamSlider6"
                data-slider-options='{ "paginationType":"progressbar", "breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"},"1400":{"slidesPerView":"3"}}}'
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="th-team team-card" data-cue="slideInUp">
                      <div className="team-img">
                        <img src="/assets/img/team/team_1_1.jpg" alt="Team" />
                      </div>
                      <div className="team-card-content">
                        <h3 className="box-title">
                          <a href="/team/details">Michel Manthan</a>
                        </h3>
                        <span className="team-desig">Laundry Specialist</span>
                      </div>
                      <div className="th-social">
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter" />
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram" />
                        </a>
                        <a target="_blank" href="https://whatsapp.com/">
                          <i className="fab fa-whatsapp" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="th-team team-card" data-cue="slideInUp">
                      <div className="team-img">
                        <img src="/assets/img/team/team_1_2.jpg" alt="Team" />
                      </div>
                      <div className="team-card-content">
                        <h3 className="box-title">
                          <a href="/team/details">Jenny William</a>
                        </h3>
                        <span className="team-desig">Laundry Specialist</span>
                      </div>
                      <div className="th-social">
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter" />
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram" />
                        </a>
                        <a target="_blank" href="https://whatsapp.com/">
                          <i className="fab fa-whatsapp" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="th-team team-card" data-cue="slideInUp">
                      <div className="team-img">
                        <img src="/assets/img/team/team_1_3.jpg" alt="Team" />
                      </div>
                      <div className="team-card-content">
                        <h3 className="box-title">
                          <a href="/team/details">Daniel Thomas</a>
                        </h3>
                        <span className="team-desig">Laundry Specialist</span>
                      </div>
                      <div className="th-social">
                        <a target="_blank" href="https://facebook.com/">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a target="_blank" href="https://twitter.com/">
                          <i className="fab fa-twitter" />
                        </a>
                        <a target="_blank" href="https://instagram.com/">
                          <i className="fab fa-instagram" />
                        </a>
                        <a target="_blank" href="https://whatsapp.com/">
                          <i className="fab fa-whatsapp" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-pagination-wrap ">
                  <div className="slider-pagination2" />
                  <div className="slider-pagination" />
                </div>
              </div>
            </div>
            <div className="joinbtn">
              <div className="row justify-content-center text-center">
                <div className="col-xl-4 col-lg-4 col-md-6 ">
                  <a
                    href="/team"
                    className="circle-btn th-btn  mt-xl-0"
                    data-cue="slideInUp"
                  >
                    View All Team
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="shape-mockup d-none d-xxl-block"
            data-top="12%"
            data-left="5%"
          >
            <img src="/assets/img/shape/bg-shape4-1.png" alt />
          </div>
        </section>
        {/*==============================
Why Choose Us Area  
==============================*/}
        <div className="  why-sec-4 overflow-hidden position-relative z-index-3">
          <div className="container">
            <div className="row gy-40 gx-80">
              <div className="col-xxl-6">
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
                    We Focus on <br />
                    Customer <span>Satisfaction And Quality</span>
                  </h2>
                  <p className="sec-text" data-cue="slideInUp">
                    We focus on quality care for every garment — from everyday
                    laundry to delicate fabrics, thobes, abayas, and Ihram. Our
                    customers trust us because we treat their clothes with the
                    same care we would our own.
                  </p>
                </div>
              </div>
              <div className="col-xxl-6">
                <div className="why-card-wrap">
                  <div className="row gy-4 justify-content-center">
                    <div className="col-xxl-6  col-md-6">
                      <div className="why-card style4" data-cue="slideInUp">
                        <div className="box-icon">
                          <img
                            src="/assets/img/icon/why-icon1-1.svg"
                            alt="why-icon"
                          />
                        </div>
                        <div className="box-details">
                          <h4 className="box-title">Separate-Order Washing</h4>
                          <p className="box-text">
                            Every customer's laundry is washed separately to
                            ensure hygiene and avoid mix-ups.
                          </p>
                        </div>
                        <div className="skill-feature-wrap mt-60">
                          <div className="skill-feature">
                            <h3 className="skill-feature_title">
                              Skill <span>92%</span>
                            </h3>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                style={{ width: "92%" }}
                              />
                              <div className="progress-value">92%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6  col-md-6">
                      <div className="why-card style4" data-cue="slideInUp">
                        <div className="box-icon">
                          <img
                            src="/assets/img/icon/why-icon1-2.svg"
                            alt="why-icon"
                          />
                        </div>
                        <div className="box-details">
                          <h4 className="box-title">Perfume-Free Ihram Care</h4>
                          <p className="box-text">
                            We offer special fragrance-free washing for Ihram
                            garments, respecting the requirements of Umrah and
                            Hajj.
                          </p>
                        </div>
                        <div className="skill-feature-wrap mt-60">
                          <div className="skill-feature">
                            <h3 className="skill-feature_title">
                              Skill <span>85%</span>
                            </h3>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                style={{ width: "85%" }}
                              />
                              <div className="progress-value">85%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6  col-md-6">
                      <div className="why-card style4" data-cue="slideInUp">
                        <div className="box-icon">
                          <img
                            src="/assets/img/icon/why-icon1-3.svg"
                            alt="why-icon"
                          />
                        </div>
                        <div className="box-details">
                          <h4 className="box-title">Transparent Kg Pricing</h4>
                          <p className="box-text">
                            We charge by the kilogram with clear rates. No
                            hidden fees, no surprises.
                          </p>
                        </div>
                        <div className="skill-feature-wrap mt-60">
                          <div className="skill-feature">
                            <h3 className="skill-feature_title">
                              Skill <span>90%</span>
                            </h3>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                style={{ width: "90%" }}
                              />
                              <div className="progress-value">90%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-6  col-md-6">
                      <div className="why-card style4" data-cue="slideInUp">
                        <div className="box-icon">
                          <img
                            src="/assets/img/icon/why-icon1-4.svg"
                            alt="why-icon"
                          />
                        </div>
                        <div className="box-details">
                          <h4 className="box-title">
                            Free Hotel Pickup &amp; Delivery
                          </h4>
                          <p className="box-text">
                            We pick up and deliver your laundry to your hotel or
                            home across Makkah, at no extra cost.
                          </p>
                        </div>
                        <div className="skill-feature-wrap mt-60">
                          <div className="skill-feature">
                            <h3 className="skill-feature_title">
                              Skill <span>95%</span>
                            </h3>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                style={{ width: "95%" }}
                              />
                              <div className="progress-value">95%</div>
                            </div>
                          </div>
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
Video Area  
==============================*/}
        <div
          className=" video-area-5 overflow-hidden "
          data-pos-for="#feature-sec"
        >
          <div className="video-wrap2">
            <div className="row">
              <div className="col-lg-12">
                <div className="video-thumb1-1">
                  <video
                    src="/assets/video/demo-video-laundry.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "24px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*==============================
Testimonial Area  
==============================*/}
        <section className="testi-area-4 space overflow-hidden " id="testi-sec">
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
                      Testimonials
                    </h2>
                  </div>
                  <div className="col-xl-6">
                    <h2
                      className="sec-title style2 text-anim2 mb-0"
                      data-cue="slideInLeft"
                    >
                      Clients Say
                    </h2>
                    <p className="sec-text" data-cue="slideInUp">
                      Whether you are a pilgrim on Umrah, a hotel guest, or a
                      Makkah resident, our team is committed to giving your
                      clothes the care they deserve. We use quality products and
                      handle every item with attention.
                    </p>
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
                  <div
                    className="img1 bg-mask"
                    data-mask-src="/assets/img/shape/testi-shape.png"
                  >
                    <img
                      src="/assets/img/testimonial/testi-3-1.jpg"
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
                        <div className="testi-card style4">
                          <div className="testi-card_review">
                            <i className="fa-sharp fa-solid fa-star" />
                            <i className="fa-sharp fa-solid fa-star" />
                            <i className="fa-sharp fa-solid fa-star" />
                            <i className="fa-sharp fa-solid fa-star" />
                            <i className="fa-sharp fa-solid fa-star" />
                          </div>
                          <p className="box-text">
                            “I used Makkah Laundry Center during my Umrah trip.
                            They picked up my clothes from the hotel and
                            delivered them back the same day, perfectly cleaned
                            and folded. The Ihram was washed without any
                            fragrance, just as I needed. Highly recommend.”
                          </p>
                          <div className="testi-card-profile">
                            <div className="testi-card-profile-detaile">
                              <h3 className="box-title">Ahmed Al-Rashid</h3>
                              <p className="box-desig">Umrah Pilgrim</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testi-card style4">
                          <div className="testi-card_review">
                            <i className="fa-sharp fa-solid fa-star" />
                            <i className="fa-sharp fa-solid fa-star" />
                            <i className="fa-sharp fa-solid fa-star" />
                            <i className="fa-sharp fa-solid fa-star" />
                            <i className="fa-sharp fa-solid fa-star" />
                          </div>
                          <p className="box-text">
                            “I had my thobes and abayas dry cleaned here and
                            they came back looking brand new. The pickup and
                            delivery saved me so much time during my stay in
                            Makkah.”
                          </p>
                          <div className="testi-card-profile">
                            <div className="testi-card-profile-detaile">
                              <h3 className="box-title">Khalid Al-Otaibi</h3>
                              <p className="box-desig">Hotel Guest</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testi-card style4">
                          <div className="testi-card_review">
                            <i className="fa-sharp fa-solid fa-star" />
                            <i className="fa-sharp fa-solid fa-star" />
                            <i className="fa-sharp fa-solid fa-star" />
                            <i className="fa-sharp fa-solid fa-star" />
                            <i className="fa-sharp fa-solid fa-star" />
                          </div>
                          <p className="box-text">
                            “I have been using Makkah Laundry Center for our
                            family's laundry for months. They are consistent,
                            affordable, and never mix up our clothes with
                            others.”
                          </p>
                          <div className="testi-card-profile">
                            <div className="testi-card-profile-detaile">
                              <h3 className="box-title">Fatimah Hassan</h3>
                              <p className="box-desig">Makkah Resident</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="testi-card style4">
                          <div className="testi-card_review">
                            <i className="fa-sharp fa-solid fa-star" />
                            <i className="fa-sharp fa-solid fa-star" />
                            <i className="fa-sharp fa-solid fa-star" />
                            <i className="fa-sharp fa-solid fa-star" />
                            <i className="fa-sharp fa-solid fa-star" />
                          </div>
                          <p className="box-text">
                            “The express service was a lifesaver. I needed my
                            laundry done urgently before leaving Makkah and they
                            delivered within hours. Excellent quality.”
                          </p>
                          <div className="testi-card-profile">
                            <div className="testi-card-profile-detaile">
                              <h3 className="box-title">Yusuf Ibrahim</h3>
                              <p className="box-desig">Traveler</p>
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
	Footer Area
==============================*/}
      </div>
    </PageLayout>
  );
}
