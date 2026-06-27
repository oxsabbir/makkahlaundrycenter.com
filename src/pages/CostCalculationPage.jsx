import PageLayout from "../components/layout/PageLayout";

export default function CostCalculationPage() {
  return (
    <PageLayout
      variant="default"
      title="Shared on THEMELOCK.COM - Pamar - Plumbing & Repair Service HTML Template - Cost Calculation"
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
              Cost Calculation </h1>
            <ul className="breadcumb-menu" data-cue="slideInUp" data-delay={300}>
              <li><a href="/">Home</a></li>
              <li>Cost Calculation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*==============================
calculation Area  
==============================*/}
  <section className="space overflow-hidden" id="cta-sec">
    <div className="container">
      <div className="calculation-wrap bg-gray-color overflow-hidden">
        <div className="title">
          <h2 className="box-title text-white">Estimate your costing</h2>
          <p className="box-text text-white"><i className="fa-solid fa-circle-exclamation mr-10" />Costing may be changed according Government tax!</p>
        </div>
        <div className="row pt-70 pb-70 justify-content-center">
          <div className="col-xl-8">
            <form action="/mail.php" method="POST" className="contact-form-v5 ajax-contact">
              <div className="row gx-40 gy-30 ">
                <div className="form-group style3 col-12">
                  <label>Service Area</label>
                  <div className="price_slider_wrapper style2">
                    <div className="price_slider costcalculating_slider" />
                    <div className="price_label costcalculating_slider_label bg-mask" data-mask-src="/assets/img/shape/costcalculating-slider.png">
                      <span className="from_text">SQFT: <span className="from_text costcalculating_slider_from" /></span>
                      <span className="to_text">Cost: <span className="costcalculating_slider_to" /></span>
                    </div>
                  </div>
                </div>
                <div className="form-group style3 col-12">
                  <label>Type of Services</label>
                  <select name="services" id="services" className="form-select ">
                    <option value disabled selected hidden>Select Services</option>
                    <option value="General Plumbing Repairs">General Plumbing Repairst</option>
                    <option value="Drain Cleaning Services">Drain Cleaning Services</option>
                    <option value="Bathroom & Kitchen Plumbing">Bathroom &amp; Kitchen Plumbing</option>
                  </select>
                </div>
                <div className="form-group style3 col-12">
                  <label>Worker Number</label>
                  <select name="subject" id="subject" className="form-select ">
                    <option value disabled selected hidden>2 Worker</option>
                    <option value="3 Worker">3 Worker</option>
                    <option value="4 Worker">4 Worker</option>
                    <option value="5 Worker">5 Worker</option>
                  </select>
                </div>
                <div className="form-group style3 col-12">
                  <label>Need Emergency</label>
                  <div className="checkbox-wrap">
                    <div className="custom-checkbox">
                      <input type="checkbox" id="remembermylogin" />
                      <label htmlFor="remembermylogin">For 01 Hour <span>5$</span></label>
                    </div>
                    <div className="custom-checkbox">
                      <input type="checkbox" id="remembermylogin2" />
                      <label htmlFor="remembermylogin2">For 03 Hour <span>10$</span></label>
                    </div>
                    <div className="custom-checkbox">
                      <input type="checkbox" id="remembermylogin3" />
                      <label htmlFor="remembermylogin3">For 05 Hour <span>15$</span></label>
                    </div>
                    <div className="custom-checkbox">
                      <input type="checkbox" id="remembermylogin4" />
                      <label htmlFor="remembermylogin4">For 01 Day <span>50$</span></label>
                    </div>
                    <div className="custom-checkbox">
                      <input type="checkbox" id="remembermylogin5" />
                      <label htmlFor="remembermylogin5">For 02 Day <span>55$</span></label>
                    </div>
                  </div>
                </div>
                <div className="form-group style3 col-lg-8 col-12">
                  <label>Total Amount</label>
                  <input type="text" readOnly className="form-control" name="amount" id="amount" placeholder="$4590" />
                </div>
                <div className="form-btn col-lg-4 col-12 d-flex align-items-end">
                  <button className="th-btn w-100">Book An Appointment <span className="after-bg" /></button>
                </div>
              </div>
              <p className="form-messages mb-0 mt-3" />
            </form>
          </div>
        </div>
      </div>
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
              <h2 className="sec-title style6 text-anim2" data-cue="slideInUp">Having a <span>Plumbing</span><br /> Problem? We’ll Fixed it Today!</h2>
              <p className="sec-text2" data-cue="slideInUp">Whereby is the super simple way to connect over. No apps, downloads, or long meeting links.</p>
              <div className="btn-group" data-cue="slideInUp">
                <a href="/about" className="th-btn ">
                  Request a Quote
                  <span className="after-bg" />
                </a>
                <a href="/contact" className="th-btn style8 style11 style12">
                  Book A Visiting
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
