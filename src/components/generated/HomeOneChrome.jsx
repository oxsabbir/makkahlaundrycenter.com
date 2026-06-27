export function HomeOneChromeBefore() {
  return (
<div className="react-fragment">{/*********************************
   		Code Start From Here 
	******************************** */}
  {/* <div class="cursor-follower"></div> */}
  {/* slider drag cursor */}
  {/* <div class="slider-drag-cursor"> DRAG </div> */}
  {/*==============================
     Preloader
  ==============================*/}
  <div className="preloader ">
    <button className="th-btn preloaderCls">Cancel Preloader </button>
    <div className="preloader-inner">
      <div className>
        <img src="/assets/img/logo-icon.svg" alt="img" />
      </div>
      <span className="loader">
        Makkah Laundry
        <span className="loading-text">Makkah Laundry</span>
      </span>
    </div>
  </div>
  {/*==============================
    Mobile Menu
  ============================== */}
  <div className="th-menu-wrapper">
    <div className="th-menu-area text-center">
      <button className="th-menu-toggle"><i className="fal fa-times" /></button>
      <div className="mobile-logo">
        <a href="/"><img src="/assets/img/logo2.svg" alt="Makkah Laundry Center" /></a>
      </div>
      <div className="th-mobile-menu">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/services">Our Services</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/faq">Faqs</a></li>
          <li><a href="/testimonials">Testimonials</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="color-scheme-wrap active">
    <button className="switchIcon"><i className="fa-solid fa-palette" /></button>
    <h3 className="color-scheme-wrap-title text-center">Color Switcher</h3>
    <div className="color-switch-btns">
      <button data-color="#FF4F38"><i className="fa-solid fa-droplet" /></button>
      <button data-color="#3282FB"><i className="fa-solid fa-droplet" /></button>
      <button data-color="#6D30FB"><i className="fa-solid fa-droplet" /></button>
      <button data-color="#27AE60"><i className="fa-solid fa-droplet" /></button>
      <button data-color="#FF7E02"><i className="fa-solid fa-droplet" /></button>
    </div>
  </div>

  {/*==============================
    Sidemenu
============================== */}
  <div className="sidemenu-wrapper sidemenu-info d-none d-lg-block">
    <div className="sidemenu-content allow-natural-scroll">
      <button className="closeButton sideMenuCls"><i className="far fa-times" /></button>
      <div className="widget  ">
        <div className="th-widget-about">
          <div className="about-logo">
            <a href="/"><img src="/assets/img/logo2.svg" alt="Makkah Laundry Center" /></a>
          </div>
          <p className="about-text mb-4"> Makkah Laundry Center offers premium laundry and dry cleaning services with free pickup &amp; delivery. We treat your garments with expert care, using eco-friendly methods.</p>
          <div className="th-social style2">
            <a href="https://www.facebook.com/"><i className="fab fa-facebook-f" /></a>
            <a href="https://www.twitter.com/"><i className="fab fa-twitter" /></a>
            <a href="https://www.youtube.com/"><i className="fab fa-youtube" /></a>
            <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in" /></a>
            <a href="https://wa.me/966569385700" target="_blank"><i className="fab fa-whatsapp" /></a>
          </div>
        </div>
      </div>
      <div className="widget  ">
        <h3 className="widget_title">Recent Posts</h3>
        <div className="recent-post-wrap">
          <div className="recent-post">
            <div className="media-img">
              <a href="/blog/details"><img src="/assets/img/blog/recent-post-1-1.jpg" alt="Blog Image" /></a>
            </div>
            <div className="media-body">
              <div className="recent-post-meta">
                <a href="/blog"><i className="fa-solid fa-calendar-days" />20 Mar, 2025</a>
              </div>
              <h4 className="post-title"><a className="text-inherit" href="/blog/details">Rapid solutions for your plumbing issues</a></h4>
            </div>
          </div>
          <div className="recent-post">
            <div className="media-img">
              <a href="/blog/details"><img src="/assets/img/blog/recent-post-1-2.jpg" alt="Blog Image" /></a>
            </div>
            <div className="media-body">
              <div className="recent-post-meta">
                <a href="/blog"><i className="fa-solid fa-calendar-days" />24 Sep, 2025</a>
              </div>
              <h4 className="post-title"><a className="text-inherit" href="/blog/details">Frequent maintenance, such as inspection</a></h4>
            </div>
          </div>
          <div className="recent-post">
            <div className="media-img">
              <a href="/blog/details"><img src="/assets/img/blog/recent-post-1-3.jpg" alt="Blog Image" /></a>
            </div>
            <div className="media-body">
              <div className="recent-post-meta">
                <a href="/blog"><i className="fa-solid fa-calendar-days" />23 Oct, 2025</a>
              </div>
              <h4 className="post-title"><a className="text-inherit" href="/blog/details">Mastering: Handyman's Guide to Tips &amp; Tricks</a></h4>
            </div>
          </div>
        </div>
      </div>
      <div className="widget th-newsletter-widget style4 ">
        <h3 className="widget_title">Subscribe to Newsletter</h3>
        <p className="footer-text mb-4">Get Monthly insights from founders around the globe. No spam - promise.</p>
        <form className="newsletter-form">
          <div className="form-group style-border">
            <input className="form-control" type="email" placeholder="Enter your email" required />
          </div>
          <button type="submit" className="th-btn">Subscribe <span className="after-bg" /></button>
        </form>
      </div>
    </div>
  </div>
  {/*==============================
	Header Area
==============================*/}</div>

  );
}

export function HomeOneChromeHeader() {
  return (
<div className="react-fragment"><header className="th-header header-default">
    <div className="header-top">
      <div className="row justify-content-center justify-content-lg-between  align-items-center gy-2">
        <div className="col-auto">
          <div className="header-links d-none d-xxl-inline-block d-lg-inline-block">
            <ul>
              <li className=" d-xxl-inline-block"><i className="fa-regular fa-clock" />Working Hours: Sat to Thu - 8:00am - 10:00pm</li>
              <li><i className="fal fa-envelope" /><a href="mailto:info@makkahlaundrycenter.com">info@makkahlaundrycenter.com</a></li>
              <li><i className="fab fa-whatsapp" /><a href="https://wa.me/966569385700" target="_blank">+966 56 938 5700</a></li>
              <li className=" d-xxl-inline-block"><i className="fal fa-location-dot" />Al Naseem District, Makkah, Saudi Arabia</li>
            </ul>
          </div>
        </div>
        <div className="col-auto">
          <div className="top-right">
            <div className="social-links">
              <a href="https://www.facebook.com/"><i className="fab fa-facebook-f" /></a>
              <a href="https://www.twitter.com/"><i className="fab fa-twitter" /></a>
              <a href="https://www.instagram.com/"><i className="fab fa-instagram" /></a>
              <a href="https://wa.me/966569385700" target="_blank"><i className="fab fa-whatsapp" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="sticky-wrapper">
      {/* Main Menu Area */}
      <div className="menu-area">
        <div className="container-fulid">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto">
              <div className="header-logo">
                <a href="/">
                  <img src="/assets/img/logo.svg" alt="Makkah Laundry Center" />
                </a>
              </div>
            </div>
            <div className="col-auto">
              <nav className="main-menu d-none d-lg-inline-block">
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/services">Our Services</a></li>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/faq">Faqs</a></li>
                  <li><a href="/testimonials">Testimonials</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                </ul>
              </nav>
              <div className="header-button d-flex d-lg-none">
                <button type="button" className="th-menu-toggle icon-btn"><i className="far fa-bars" /></button>
              </div>
            </div>
            <div className="col-auto d-xl-block d-none">
              <div className="header-button">
                <a className="th-btn style6" href="https://wa.me/966569385700?text=Hi%20Makkah%20Laundry%20Center!%20I%27d%20like%20to%20inquire%20about%20your%20laundry%20services.%20Please%20share%20details%20and%20preferred%20pickup%20time." target="_blank"><img src="/assets/img/icon/phone.svg" alt />WhatsApp: +966 56 938 5700</a>
                <button type="button" className="icon-btn style6 sideMenuInfo"><i className="fa-solid fa-bars" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header></div>

  );
}

export function HomeOneChromeFooter() {
  return (
<div className="react-fragment"><footer className="footer-wrapper footer-default">
    <div className="container">
      <div className="footer-top">
        <div className="row align-items-center justify-content-between">
          <div className="col-xxl-9 col-xl-8">
            <div className="title-area mb-0">
              <h2 className="text-white text-anim2">
                Schedule your first pickup today — free delivery!</h2>
            </div>
          </div>
          <div className="col-xl-auto">
            <div className="fadeinright wow" data-wow-duration="1.5s" data-wow-delay="0.3s">
              <a href="https://wa.me/966569385700?text=Hi%20Makkah%20Laundry%20Center!%20I%27d%20like%20to%20inquire%20about%20your%20laundry%20services.%20Please%20share%20details%20and%20preferred%20pickup%20time." target="_blank" className="th-btn style5">
                Book a Pickup
                <span className="after-bg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="widget-area">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6 col-xl-4" data-cue="slideInUp">
            <div className="widget footer-widget">
              <div className="th-widget-about">
                <div className="about-logo">
                  <a href="/"><img src="/assets/img/logo3.svg" alt="Makkah Laundry Center" /></a>
                </div>
                <p className="about-text">At Makkah Laundry Center, we are committed to delivering premium laundry and dry cleaning services with care and precision. Free pickup &amp; delivery, eco-friendly washing, and expert stain treatment.</p>
                <div className="th-social">
                  <a href="https://www.facebook.com/"><i className="fab fa-facebook-f" /></a>
                  <a href="https://www.twitter.com/"><i className="fab fa-twitter" /></a>
                  <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram" /></a>
                  <a href="https://wa.me/966569385700" target="_blank"><i className="fab fa-whatsapp" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-auto" data-cue="slideInUp">
            <div className="widget widget_nav_menu footer-widget ">
              <h3 className="widget_title">Useful Links</h3>
              <div className="menu-all-pages-container">
                <ul className="menu">
                  <li><a href="/"><i className="fa-solid fa-angle-right" />Home</a></li>
                  <li><a href="/about"><i className="fa-solid fa-angle-right" />About Us</a></li>
                  <li><a href="/pricing"><i className="fa-solid fa-angle-right" />Pricing Plan</a></li>
                  <li><a href="/projects"><i className="fa-solid fa-angle-right" />Our Gallery</a></li>
                  <li><a href="/contact"><i className="fa-solid fa-angle-right" />Our Location</a></li>
                  <li><a href="/blog"><i className="fa-solid fa-angle-right" /> Blog</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-auto" data-cue="slideInUp">
            <div className="widget widget_nav_menu footer-widget">
              <h3 className="widget_title">Our Services</h3>
              <div className="menu-all-pages-container">
                <ul className="menu">
                  <li><a href="/services"><i className="fa-solid fa-angle-right" /> Wash &amp; Fold</a></li>
                  <li><a href="/services"><i className="fa-solid fa-angle-right" /> Dry Cleaning</a></li>
                  <li><a href="/services"><i className="fa-solid fa-angle-right" /> Ironing &amp; Pressing</a></li>
                  <li><a href="/services"><i className="fa-solid fa-angle-right" /> Stain Removal</a></li>
                  <li><a href="/services"><i className="fa-solid fa-angle-right" /> Curtain &amp; Bedding</a></li>
                  <li><a href="/services"><i className="fa-solid fa-angle-right" /> Free Pickup &amp; Delivery</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3" data-cue="slideInUp">
            <div className="widget footer-widget">
              <h3 className="widget_title">Instagram Post</h3>
              <div className="sidebar-gallery">
                <div className="gallery-thumb">
                  <img src="/assets/img/widget/gallery_1_1.jpg" alt="Gallery Image" />
                  <a target="_blank" href="https://www.instagram.com/" className="gallery-btn"><i className="fab fa-instagram" /></a>
                </div>
                <div className="gallery-thumb">
                  <img src="/assets/img/widget/gallery_1_2.jpg" alt="Gallery Image" />
                  <a target="_blank" href="https://www.instagram.com/" className="gallery-btn"><i className="fab fa-instagram" /></a>
                </div>
                <div className="gallery-thumb">
                  <img src="/assets/img/widget/gallery_1_3.jpg" alt="Gallery Image" />
                  <a target="_blank" href="https://www.instagram.com/" className="gallery-btn"><i className="fab fa-instagram" /></a>
                </div>
                <div className="gallery-thumb">
                  <img src="/assets/img/widget/gallery_1_4.jpg" alt="Gallery Image" />
                  <a target="_blank" href="https://www.instagram.com/" className="gallery-btn"><i className="fab fa-instagram" /></a>
                </div>
                <div className="gallery-thumb">
                  <img src="/assets/img/widget/gallery_1_5.jpg" alt="Gallery Image" />
                  <a target="_blank" href="https://www.instagram.com/" className="gallery-btn"><i className="fab fa-instagram" /></a>
                </div>
                <div className="gallery-thumb">
                  <img src="/assets/img/widget/gallery_1_6.jpg" alt="Gallery Image" />
                  <a target="_blank" href="https://www.instagram.com/" className="gallery-btn"><i className="fab fa-instagram" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-wrap">
      <div className="container">
        <div className="row justify-content-center gy-3 align-items-center">
          <div className="col-lg-6" data-cue="slideInUp">
            <p className="copyright-text">
              Copyright
              <i className="fal fa-copyright" /> 2025 <a href="/">Makkah Laundry Center</a>, All rights reserved.
            </p>
          </div>
          <div className="col-lg-6 text-lg-end text-center" data-cue="slideInUp">
            <div className="footer-links">
              <ul>
                <li><a href="/about">Terms of service</a></li>
                <li><a href="/about">Privacy policy</a></li>
                <li><a href="/about">cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer></div>

  );
}

export function HomeOneChromeAfter() {
  return (
<div className="react-fragment">{/*********************************
			Code End  Here 
	******************************** */}
  {/* Scroll To Top */}
  <div className="scroll-top">
    <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{transition: 'stroke-dashoffset 10ms linear 0s', strokeDasharray: '307.919, 307.919', strokeDashoffset: '307.919'}} />
    </svg>
  </div>
  {/* Floating WhatsApp Button */}
  <a href="https://wa.me/966569385700?text=Hi%20Makkah%20Laundry%20Center!%20I%27d%20like%20to%20inquire%20about%20your%20laundry%20services.%20Please%20share%20details%20and%20preferred%20pickup%20time." target="_blank" className="whatsapp-float" aria-label="Chat on WhatsApp">
    <i className="fab fa-whatsapp" />
  </a>
  {/*==============================
    All Js File
============================== */}
  {/* Jquery */}
  {/*  */}
  {/* Swiper Js */}
  {/*  */}
  {/* Bootstrap */}
  {/* Magnific Popup */}
  {/* Counter Up */}
  {/* Range Slider */}
  {/* Isotope Filter */}
  {/* Cue Js */}
  {/* Gsap */}
  {/* Scroll Trigger */}
  {/* Split Text */}
  {/* Lenis Js */}
  {/* Main Js File */}</div>

  );
}
