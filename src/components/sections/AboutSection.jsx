export default function AboutSection() {
  return (
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
  );
}
