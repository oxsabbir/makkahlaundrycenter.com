export function HomeTwoPageChromeBefore() {
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
        Pamar
        <span className="loading-text">Pamar</span>
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
        <a href="/"><img src="/assets/img/logo2.svg" alt="Pamar" /></a>
      </div>
      <div className="th-mobile-menu">
        <ul>
          <li className="menu-item-has-children">
            <a href="/">Home</a>
            <ul className="sub-menu">
              <li className="menu-item-has-children">
                <a href="#">Multipage</a>
                <ul className="sub-menu">
                  <li><a href="/">Home General Plumbing</a></li>
                  <li><a href="/home/emergency">Home Emergency Plumbing</a></li>
                  <li><a href="/home/residential">Home Residential Plumbing</a></li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Onepage</a>
                <ul className="sub-menu">
                  <li><a href="/home/general">Home General Plumbing</a></li>
                  <li><a href="/home/emergency-one-page">Home Emergency Plumbing</a></li>
                  <li><a href="/home/residential-one-page">Home Residential Plumbing</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="/about">About Us</a></li>
          <li className="menu-item-has-children">
            <a href="#">Services</a>
            <ul className="sub-menu">
              <li><a href="/services">Services</a></li>
              <li><a href="/services/details">Service Details</a></li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <a href="#">Pages</a>
            <ul className="sub-menu">
              <li className="menu-item-has-children">
                <a href="#">Shop</a>
                <ul className="sub-menu">
                  <li><a href="/shop">Shop</a></li>
                  <li><a href="/shop/details">Shop Details</a></li>
                  <li><a href="/cart">Cart Page</a></li>
                  <li><a href="/checkout">Checkout</a></li>
                  <li><a href="/wishlist">Wishlist</a></li>
                </ul>
              </li>
              <li><a href="/projects">Project</a></li>
              <li><a href="/projects/details">Project Details</a></li>
              <li><a href="/team">Our Team</a></li>
              <li><a href="/team/details">Team Details</a></li>
              <li><a href="/work">Work</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/testimonials">Testimonial</a></li>
              <li><a href="/faq">FAQ'S Page</a></li>
              <li><a href="/cost-calculation">Cost Calculation</a></li>
              <li><a href="/404">Error Page</a></li>
            </ul>
          </li>
          <li className="menu-item-has-children">
            <a href="#">Blog</a>
            <ul className="sub-menu">
              <li><a href="/blog">Blog Standard</a></li>
              <li><a href="/blog/details">Blog Details</a></li>
            </ul>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="popup-search-box d-none d-lg-block">
    <button className="searchClose"><i className="far fa-times" /></button>
    <form action="#">
      <input type="text" placeholder="What are you looking for?" />
      <button type="submit"><i className="fal fa-search" /></button>
    </form>
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
  </div>{/*==============================
	Header Area
==============================*/}</div>

  );
}

export function HomeTwoPageChromeHeader() {
  return (
<div className="react-fragment"><header className="th-header header-layout1 onepage-nav">
    <div className="header-top">
      <div className="row justify-content-center justify-content-lg-between  align-items-center gy-2">
        <div className="col-auto">
          <div className="header-links">
            <ul>
              <li className=" d-xxl-inline-block"><i className="fa-regular fa-clock" />Working Hours: Mon to Fri - 8:00am - 16:00pm</li>
              <li><i className="fal fa-envelope" /><a href="mailto:info@pamar.com">info@pamar.com</a></li>
              <li className=" d-xxl-inline-block"><i className="fal fa-location-dot" />156 Main Street, 2nd Floor. USA</li>
            </ul>
          </div>
        </div>
        <div className="col-auto">
          <div className="top-right">
            <div className="header-links">
              <ul>
                <li className=" d-xxl-inline-block">
                  <i className="fa-sharp fa-regular fa-award" />(5.0 Star) 350k+ Reviews
                </li>
              </ul>
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
                  <img src="/assets/img/logo2.svg" alt="Pamar" />
                </a>
              </div>
            </div>
            <div className="col-auto">
              <nav className="main-menu d-none d-lg-inline-block">
                <ul>
                  <li className="menu-item-has-children">
                    <a href="#hero">Home</a>
                    <ul className="mega-menu mega-menu-content allow-natural-scroll">
                      <li>
                        <div className="container">
                          <div className="row gy-4">
                            <div className="col-lg-4">
                              <div className="mega-menu-box">
                                <div className="mega-menu-img">
                                  <img src="/assets/img/pages/index.jpg" alt="Home One" />
                                  <div className="btn-wrap">
                                    <a href="/" className="th-btn">Multipage</a>
                                    <a href="/home/general" className="th-btn">Onepage</a>
                                  </div>
                                </div>
                                <h3 className="mega-menu-title"><a href="/">Home General Plumbing</a></h3>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="mega-menu-box">
                                <div className="mega-menu-img">
                                  <img src="/assets/img/pages/home-2.jpg" alt="Home Two" />
                                  <div className="btn-wrap">
                                    <a href="/home/emergency" className="th-btn">Multipage</a>
                                    <a href="/home/emergency-one-page" className="th-btn">Onepage</a>
                                  </div>
                                </div>
                                <h3 className="mega-menu-title"><a href="/home/emergency">Home Emergency Plumbing</a></h3>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="mega-menu-box">
                                <div className="mega-menu-img">
                                  <img src="/assets/img/pages/home-3.jpg" alt="Home Three" />
                                  <div className="btn-wrap">
                                    <a href="/home/residential" className="th-btn">Multipage</a>
                                    <a href="/home/residential-one-page" className="th-btn">Onepage</a>
                                  </div>
                                </div>
                                <h3 className="mega-menu-title"><a href="/home/residential">Home Residential Plumbing</a></h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#about-sec">About Us</a></li>
                  <li><a href="#service-sec">Our Service</a></li>
                  <li><a href="#project-sec">Portfolio</a></li>
                  <li><a href="#blog-sec">Blog</a></li>
                  <li>
                    <a href="#contact-sec">Contact Us</a>
                  </li>
                </ul>
              </nav>
              <div className="header-button d-flex d-lg-none">
                <button type="button" className="th-menu-toggle icon-btn"><i className="far fa-bars" /></button>
              </div>
            </div>
            <div className="col-auto d-none d-xxl-block">
              <div className="header-button">
                <button type="button" className="icon-btn style6 searchBoxToggler"><i className="far fa-search" /></button>
                <a href="tel:+16369729901" className="link-btn3">
                  Request a Free Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="menu-bg bg-mask" style={{maskImage: 'url(/assets/img/shape/menu_bg_mask.png)'}} />
  </header></div>

  );
}

export function HomeTwoPageChromeFooter() {
  return (
<div className="react-fragment"><footer className="footer-wrapper footer-layout1">
    <div className="shape-mockup footer-bg-shape1-1 bg-mask " data-left="0%" data-top={0} data-mask-src="/assets/img/shape/footer-bg-shape1.png">
      <img src="/assets/img/shape/footer-bg-shape2.png" alt="img" />
    </div>
    <div className="footer-bg-responcive1-1">
      <img src="/assets/img/shape/footer-bg-shape2.png" alt="img" />
    </div>
    <div className="footer-top text-center">
      <div className="container">
        <div className="shadow-text" data-cue="slideInUp">Get In Touch</div>
        <h4 className="box-text" data-cue="slideInUp">Get 100% satisfy work. Contact us today&nbsp;
          <a href="tel:6624073460">(+084) 123 – 456 89</a>
        </h4>
      </div>
    </div>
    <div className="widget-area">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6 col-xl-4" data-cue="slideInUp">
            <div className="widget footer-widget style2">
              <div className="th-widget-about style2">
                <div className="about-logo">
                  <a href="/"><img src="/assets/img/logo4.svg" alt="Pamar" /></a>
                </div>
                <p className="about-text">At Pamar, we are committed to delivering unparalleled quality and precision in every facet of our operations. From the moment you reach out to us, through our expert.</p>
                <div className="th-social style7">
                  <a href="https://www.facebook.com/"><i className="fab fa-facebook-f" /></a>
                  <a href="https://www.twitter.com/"><i className="fab fa-twitter" /></a>
                  <a href="https://www.youtube.com/"><i className="fab fa-youtube" /></a>
                  <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in" /></a>
                  <a href="https://www.linkedin.com/"><i className="fa-brands fa-instagram" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-auto" data-cue="slideInUp">
            <div className="widget widget_nav_menu footer-widget style2">
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
            <div className="widget widget_nav_menu footer-widget style2">
              <h3 className="widget_title">Our Services</h3>
              <div className="menu-all-pages-container">
                <ul className="menu">
                  <li><a href="/services"><i className="fa-solid fa-angle-right" /> Burst Pipe Repair</a></li>
                  <li><a href="/services"><i className="fa-solid fa-angle-right" /> Drain Unclogging</a></li>
                  <li><a href="/services"><i className="fa-solid fa-angle-right" /> Water Heater Fixes</a></li>
                  <li><a href="/services"><i className="fa-solid fa-angle-right" /> Sewer Backup</a></li>
                  <li><a href="/services"><i className="fa-solid fa-angle-right" /> Leak Detection</a></li>
                  <li><a href="/services"><i className="fa-solid fa-angle-right" /> Gas Line Emergencies</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3" data-cue="slideInUp">
            <div className="widget th-newsletter-widget  footer-widget style2">
              <h3 className="widget_title">Newsletter</h3>
              <p className="footer-text">Get latest updates and offers.</p>
              <form className="newsletter-form">
                <div className="form-group style-dark">
                  <input className="form-control" type="email" placeholder="Enter your email address" required />
                </div>
                <button type="submit" className="th-btn style7">
                  Subscribe Now <span className="after-bg" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-wrap">
      <div className="container">
        <div className="row justify-content-center gy-3 align-items-center">
          <div className="col-md-6" data-cue="slideInUp">
            <p className="copyright-text">
              Copyright
              <i className="fal fa-copyright" /> 2025 <a href="/">Pamar</a>, All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end text-center" data-cue="slideInUp">
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

export function HomeTwoPageChromeAfter() {
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
