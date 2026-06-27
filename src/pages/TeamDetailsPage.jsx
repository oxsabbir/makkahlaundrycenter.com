import PageLayout from "../components/layout/PageLayout";
import Breadcrumb from "../components/layout/Breadcrumb";

export default function TeamDetailsPage() {
  return (
    <PageLayout
      title="Shared on THEMELOCK.COM - Pamar - Plumbing & Repair Service HTML Template - Team Details"
      description="Pamar - Plumbing & Repair Service HTML Template"
    >
<div className="react-fragment">
        <Breadcrumb
          title="Team Details"
          items={[{ label: "Home", href: "/" }, { label: "Team Details" }]}
        />
        {/*==============================
Team Area
==============================*/}
  <section className="space position-relative">
    <div className="container">
      <div className="teamDetails">
        <div className="row gx-40 gy-30 mb-24">
          <div className="col-xxl-4 col-xl-4 col-md-6">
            <div className="th-team team-card style2 style4">
              <div className="team-img">
                <img src="/assets/img/team/team_2_6.png" alt="Team" />
              </div>
              <div className="team-card-content">
                <div>
                  <h3 className="box-title"><a href="#">Jordan Smith</a></h3>
                  <span className="box-subtitle">Engineer</span>
                </div>
                <div className="team-social">
                  <button className="icon-btn style2 style-border2" tabIndex={0}>
                    <i className="fa-solid fa-plus" />
                  </button>
                  <div className="th-social style12">
                    <a href="http://facebook.com" tabIndex={0}><i className="fab fa-facebook-f" /></a>
                    <a href="http://twitter.com" tabIndex={0}><i className="fab fa-twitter" /></a>
                    <a href="http://instagram.com" tabIndex={0}><i className="fab fa-instagram" /></a>
                    <a target="_blank" href="https://whatsapp.com/"><i className="fab fa-whatsapp" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-8 col-xl-8">
            <div className="page-single">
              <h2 className="page-title mt-n2 mb-20">Personal Information:</h2>
              <p className="mb-0">Hello, This Jordan Smith , Professional about variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.
              </p>
              <p className="mb-20">in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
              <p>“Appreciated the courtesy &amp; promptness to addressing my issues. Worked with a sense of urgency for a resolution in my unplanned plumbing emergency. Repairs were done in a timely, professional manner and with thoroughness &amp; care by the experienced technician.”</p>
              <div className="checklist list-three-column style5 mb-50 mt-35">
                <ul>
                  <li>Best Quality services Provided</li>
                  <li>24/7 Support and Assistance</li>
                  <li>Plumber Support Experts</li>
                  <li>Meet The Deadline in Projects</li>
                  <li>Time and Energy Saving</li>
                  <li>Effective Project Manage</li>
                </ul>
              </div>
              <div className="row gy-40 justify-content-center">
                <div className="col-xl-4 col-lg-4">
                  <div className="contact-info style3" data-cue="slideInUp">
                    <div className="box-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="box-content">
                      <p className="box-text"><a href="tel:+4733378901">+09 (123) 456 7890</a></p>
                      <p className="box-text"><a href="tel:+4733378901">+09 (123) 456 7890</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4">
                  <div className="contact-info style3" data-cue="slideInUp">
                    <div className="box-icon">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="box-content">
                      <p className="box-text"><a href="mailto:help24/7.info@pamar.com">infomail@example.com</a></p>
                      <p className="box-text"><a href="mailto:help24/7.info@pamar.com">infomail@mail.com</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4">
                  <div className="contact-info style3" data-cue="slideInUp">
                    <div className="box-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="box-content">
                      <p className="box-text">123 Maple Street Apt C </p>
                      <p className="box-text">Boston MS, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gx-40 gy-40">
          <div className="col-xxl-8 col-xl-8">
            <div className="box-content">
              <h2 className="box-title">Professional Skills</h2>
              <p className="mb-20">The culmination of this transformative endeavor marked the dawn of a new era for the office space, where meticulous attention to detail and an unwavering commitment to excellence converged to create an environment that transcended mere functionality.</p>
              <p className="mb-50">Through an intricate and strategic overhaul of the office's electrical infrastructure, our dedicated team orchestrated a symphony of technological innovation and precision engineering,</p>
            </div>
            <div className="skill-wrap">
              <div className="skill-feature style3">
                <div className="skill-feature">
                  <h3 className="skill-feature_title">High Engagement <span>90%</span></h3>
                  <div className="progress">
                    <div className="progress-bar bg-theme" style={{width: '90%'}} />
                  </div>
                </div>
              </div>
              <div className="skill-feature style3">
                <div className="skill-feature">
                  <h3 className="skill-feature_title">Effective Project Manage <span>80%</span></h3>
                  <div className="progress">
                    <div className="progress-bar bg-theme" style={{width: '80%'}} />
                  </div>
                </div>
              </div>
              <div className="skill-feature style3">
                <div className="skill-feature">
                  <h3 className="skill-feature_title">Consulting &amp; Planning <span>85%</span></h3>
                  <div className="progress">
                    <div className="progress-bar bg-theme" style={{width: '85%'}} />
                  </div>
                </div>
              </div>
              <div className="skill-feature style3">
                <div className="skill-feature">
                  <h3 className="skill-feature_title">High Communication Skilled <span>95%</span></h3>
                  <div className="progress">
                    <div className="progress-bar bg-theme" style={{width: '95%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-xl-6">
            <div className="testi-card style6">
              <div className="d-flex justify-content-between align-items-center mb-24">
                <div className="box-icon">
                  <img src="/assets/img/icon/quote-icon5.svg" alt />
                </div>
                <div className="testi-card_review">
                  <i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" /><i className="fa-sharp fa-solid fa-star" />
                </div>
              </div>
              <p className="box-text">Communication before and during the repair was helpful,
                since we were unsure how extensive it might be once the area was dug out.
                We would highly recommend both Mike and Chris. Repairs were done in a timely,</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="shape-mockup jump d-none d-xxl-block " style={{bottom: '-10%', left: '0%'}}>
      <img src="/assets/img/normal/about-thumb2-1.png" alt="shape" />
    </div>
  </section>{/*==============================
Contact Area   
==============================*/}
  <div className="space  contact-area-1 position-relative z-index-common" id="contact-sec">
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
