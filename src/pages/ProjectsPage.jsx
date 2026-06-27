import PageLayout from "../components/layout/PageLayout";

export default function ProjectsPage() {
  return (
    <PageLayout
      variant="default"
      title="Shared on THEMELOCK.COM - Pamar - Plumbing & Repair Service HTML Template - Projects"
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
              Our Projects </h1>
            <ul className="breadcumb-menu" data-cue="slideInUp" data-delay={300}>
              <li><a href="/">Home</a></li>
              <li>Projects</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>{/*==============================
Project Area  
==============================*/}
  <div className="overflow-hidden space">
    <div className="container">
      <div className="title-area text-center">
        <div className="filter-menu indicator-active filter-menu-active">
          <button data-filter="*" className="tab-btn active" type="button">View All</button>
          <button data-filter=".cat1" className="tab-btn" type="button">Drain Plumber</button>
          <button data-filter=".cat2" className="tab-btn" type="button">Install &amp; Repair</button>
          <button data-filter=".cat3" className="tab-btn" type="button">Water Heater Fixes</button>
          <button data-filter=".cat4" className="tab-btn" type="button">Leak Detection</button>
          <button data-filter=".cat5" className="tab-btn" type="button">Burst Pipe Repair</button>
        </div>
      </div>
      <div className="row gy-30 gallery-row filter-active">
        <div className="col-lg-6 filter-item cat3">
          <div className="project-card style4">
            <div className="box-img">
              <img src="/assets/img/project/project3-1.jpg" alt="img" />
              <a href="/assets/img/project/project3-1.jpg" className="popup-image">
                <img src="/assets/img/icon/popup-icon.svg" alt />
              </a>
            </div>
            <div className="box-content ">
              <div>
                <p className="box-subtitle">Residential</p>
                <h3 className="box-title"><a href="/projects/details">Fixture installation and repair</a></h3>
              </div>
              <a href="/projects/details" className="icon-btn style2">
                <img src="/assets/img/icon/arrow-right2.svg" alt />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 filter-item cat5 cat2">
          <div className="project-card style4">
            <div className="box-img">
              <img src="/assets/img/project/project3-2.jpg" alt="img" />
              <a href="/assets/img/project/project3-2.jpg" className="popup-image">
                <img src="/assets/img/icon/popup-icon.svg" alt />
              </a>
            </div>
            <div className="box-content ">
              <div>
                <p className="box-subtitle">Residential</p>
                <h3 className="box-title"><a href="/projects/details">Garbage Disposals</a></h3>
              </div>
              <a href="/projects/details" className="icon-btn style2">
                <img src="/assets/img/icon/arrow-right2.svg" alt />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 filter-item cat1 cat4">
          <div className="project-card style4">
            <div className="box-img">
              <img src="/assets/img/project/project3-3.jpg" alt="img" />
              <a href="/assets/img/project/project3-3.jpg" className="popup-image">
                <img src="/assets/img/icon/popup-icon.svg" alt />
              </a>
            </div>
            <div className="box-content ">
              <div>
                <p className="box-subtitle">Residential</p>
                <h3 className="box-title"><a href="/projects/details">showers &amp; Bathtubs repair</a></h3>
              </div>
              <a href="/projects/details" className="icon-btn style2">
                <img src="/assets/img/icon/arrow-right2.svg" alt />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 filter-item cat2 cat5">
          <div className="project-card style4">
            <div className="box-img">
              <img src="/assets/img/project/project3-4.jpg" alt="img" />
              <a href="/assets/img/project/project3-4.jpg" className="popup-image">
                <img src="/assets/img/icon/popup-icon.svg" alt />
              </a>
            </div>
            <div className="box-content ">
              <div>
                <p className="box-subtitle">Industrial</p>
                <h3 className="box-title"><a href="/projects/details">Fixture installation and repair</a></h3>
              </div>
              <a href="/projects/details" className="icon-btn style2">
                <img src="/assets/img/icon/arrow-right2.svg" alt />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 filter-item cat3 cat1">
          <div className="project-card style4">
            <div className="box-img">
              <img src="/assets/img/project/project3-5.jpg" alt="img" />
              <a href="/assets/img/project/project3-5.jpg" className="popup-image">
                <img src="/assets/img/icon/popup-icon.svg" alt />
              </a>
            </div>
            <div className="box-content ">
              <div>
                <p className="box-subtitle">Commercial</p>
                <h3 className="box-title"><a href="/projects/details">Pipe Repair in commercial area</a></h3>
              </div>
              <a href="/projects/details" className="icon-btn style2">
                <img src="/assets/img/icon/arrow-right2.svg" alt />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 filter-item cat5 cat4 cat1 cat2">
          <div className="project-card style4">
            <div className="box-img">
              <img src="/assets/img/project/project3-6.jpg" alt="img" />
              <a href="/assets/img/project/project3-6.jpg" className="popup-image">
                <img src="/assets/img/icon/popup-icon.svg" alt />
              </a>
            </div>
            <div className="box-content ">
              <div>
                <p className="box-subtitle">Residential</p>
                <h3 className="box-title"><a href="/projects/details">pipe leak in Residential</a></h3>
              </div>
              <a href="/projects/details" className="icon-btn style2">
                <img src="/assets/img/icon/arrow-right2.svg" alt />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="text-center mt-60">
            <a href="#" className="th-btn style3 loodingbtn">
              Load More
              <span className="after-bg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
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
