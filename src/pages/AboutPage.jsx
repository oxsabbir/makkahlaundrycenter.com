import PageLayout from "../components/layout/PageLayout";

export default function AboutPage() {
  return (
    <PageLayout
      title="Shared on THEMELOCK.COM - Pamar - Plumbing & Repair Service HTML Template - About Us"
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
              About Us </h1>
            <ul className="breadcumb-menu" data-cue="slideInUp" data-delay={300}>
              <li><a href="/">Home</a></li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>{/*==============================
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
  </div>{/*==============================
Feature Area  
==============================*/}
  <section className=" feature-area-1 position-relative space-bottom">
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
              <a href="/blog" className="link-btn2">
                <span>Learn More</span>
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
              <a href="/blog" className="link-btn2">
                <span>Learn More</span>
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
              <a href="/blog" className="link-btn2">
                <span>Learn More</span>
                <div className="icon">
                </div>
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
Process Area  
==============================*/}
  <section className="position-relative process3  space overflow-hidden" data-bg-src="/assets/img/shape/bg-shape5-1.png">
    <div className="container">
      <div className="row">
        <div className="col-xxl-4">
          <div className="title-area mb-60">
            <span className="sub-title style2 text-anim after-none before-none" data-cue="slideInLeft">Work Process</span>
            <h2 className="sec-title style3 text-anim2" data-cue="slideInLeft">
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
                    <h3 className="box-title">Online Booking</h3>
                    <p className="box-text">When booking, it helps customers when they are shown a calendar.</p>
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
                    <h3 className="box-title">Inspect &amp; Analyze</h3>
                    <p className="box-text">When booking, it helps customers when they are shown a calendar.</p>
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
                    <h3 className="box-title">Solving Problem</h3>
                    <p className="box-text">When booking, it helps customers when they are shown a calendar.</p>
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
Team Area  
==============================*/}
  <section className="space overflow-hidden position-relative team-area-4 ">
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-xxl-12">
          <div className="title-area text-center pt-1">
            <span className="sub-title style2 text-anim after-none before-none" data-cue="slideInLeft">Our Team</span>
            <h2 className="sec-title style3 text-anim2" data-cue="slideInLeft">
              Meet Our Professional <br /> <span>Plumber Team.</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="slider-area ">
        <div className="swiper th-slider team-slider6" id="teamSlider6" data-slider-options="{ &quot;paginationType&quot;:&quot;progressbar&quot;, &quot;breakpoints&quot;:{&quot;0&quot;:{&quot;slidesPerView&quot;:1},&quot;576&quot;:{&quot;slidesPerView&quot;:&quot;1&quot;},&quot;768&quot;:{&quot;slidesPerView&quot;:&quot;2&quot;},&quot;992&quot;:{&quot;slidesPerView&quot;:&quot;2&quot;},&quot;1200&quot;:{&quot;slidesPerView&quot;:&quot;3&quot;},&quot;1400&quot;:{&quot;slidesPerView&quot;:&quot;3&quot;}}}">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
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
            <div className="swiper-slide">
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
            <div className="swiper-slide">
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
            <div className="swiper-slide">
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
            <div className="swiper-slide">
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
            <div className="swiper-slide">
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
            <div className="swiper-slide">
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
            <div className="swiper-slide">
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
            <a href="/team" className="circle-btn th-btn  mt-xl-0" data-cue="slideInUp">
              Join With Us
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="shape-mockup d-none d-xxl-block" data-top="12%" data-left="5%">
      <img src="/assets/img/shape/bg-shape4-1.png" alt />
    </div>
  </section>{/*==============================
Why Choose Us Area  
==============================*/}
  <div className="  why-sec-4 overflow-hidden position-relative z-index-3">
    <div className="container">
      <div className="row gy-40 gx-80">
        <div className="col-xxl-6">
          <div className="title-area mb-60">
            <span className="sub-title style2 text-anim after-none before-none" data-cue="slideInLeft">Why Choose Us</span>
            <h2 className="sec-title style3 text-anim2" data-cue="slideInLeft">
              We Focus on <br />
              Customer <span>Satisfaction And Quality</span>
            </h2>
            <p className="sec-text" data-cue="slideInUp">Our plumbing services are designed to provide fast, reliable, and long-lasting solutions for both residential and commercial needs.</p>
          </div>
        </div>
        <div className="col-xxl-6">
          <div className="why-card-wrap">
            <div className="row gy-4 justify-content-center">
              <div className="col-xxl-6  col-md-6">
                <div className="why-card style4" data-cue="slideInUp">
                  <div className="box-icon">
                    <img src="/assets/img/icon/why-icon1-1.svg" alt="why-icon" />
                  </div>
                  <div className="box-details">
                    <h4 className="box-title">Licensed &amp; Certified Plumbers</h4>
                    <p className="box-text">When it comes to plumbing, you need more than just.</p>
                  </div>
                  <div className="skill-feature-wrap mt-60">
                    <div className="skill-feature">
                      <h3 className="skill-feature_title">Skill <span>92%</span></h3>
                      <div className="progress">
                        <div className="progress-bar" style={{width: '92%'}} />
                        <div className="progress-value">92%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6  col-md-6">
                <div className="why-card style4" data-cue="slideInUp">
                  <div className="box-icon">
                    <img src="/assets/img/icon/why-icon1-2.svg" alt="why-icon" />
                  </div>
                  <div className="box-details">
                    <h4 className="box-title">Modern Tools &amp; Digital Technology</h4>
                    <p className="box-text">When it comes to plumbing, you need more than just.</p>
                  </div>
                  <div className="skill-feature-wrap mt-60">
                    <div className="skill-feature">
                      <h3 className="skill-feature_title">Skill <span>85%</span></h3>
                      <div className="progress">
                        <div className="progress-bar" style={{width: '85%'}} />
                        <div className="progress-value">85%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6  col-md-6">
                <div className="why-card style4" data-cue="slideInUp">
                  <div className="box-icon">
                    <img src="/assets/img/icon/why-icon1-3.svg" alt="why-icon" />
                  </div>
                  <div className="box-details">
                    <h4 className="box-title">Upfront Pricing with No Hidden Fees</h4>
                    <p className="box-text">When it comes to plumbing, you need more than just.</p>
                  </div>
                  <div className="skill-feature-wrap mt-60">
                    <div className="skill-feature">
                      <h3 className="skill-feature_title">Skill <span>90%</span></h3>
                      <div className="progress">
                        <div className="progress-bar" style={{width: '90%'}} />
                        <div className="progress-value">90%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6  col-md-6">
                <div className="why-card style4" data-cue="slideInUp">
                  <div className="box-icon">
                    <img src="/assets/img/icon/why-icon1-4.svg" alt="why-icon" />
                  </div>
                  <div className="box-details">
                    <h4 className="box-title">Clean,&amp; Professional Workmanship</h4>
                    <p className="box-text">When it comes to plumbing, you need more than just.</p>
                  </div>
                  <div className="skill-feature-wrap mt-60">
                    <div className="skill-feature">
                      <h3 className="skill-feature_title">Skill <span>95%</span></h3>
                      <div className="progress">
                        <div className="progress-bar" style={{width: '95%'}} />
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
  <div className=" video-area-5 overflow-hidden " data-pos-for="#feature-sec">
    <div className="video-wrap2">
      <div className="row">
        <div className="col-lg-12">
          <div className="video-thumb1-1 video-box-center" data-overlay="black" data-opacity={3}>
            <img src="/assets/img/normal/video1-1.jpg" alt="img" />
            <a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk" className="play-btn style2 popup-video"><i className="fa-sharp fa-solid fa-play" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==============================
Testimonial Area  
==============================*/}
  <section className="testi-area-4 space overflow-hidden " id="testi-sec">
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
