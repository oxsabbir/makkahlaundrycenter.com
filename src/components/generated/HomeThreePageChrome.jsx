export function HomeThreePageChromeBefore() {
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
    Sidemenu
============================== */}
  <div className="sidemenu-wrapper sidemenu-info d-none d-lg-block">
    <div className="sidemenu-content allow-natural-scroll">
      <button className="closeButton sideMenuCls"><i className="far fa-times" /></button>
      <div className="widget  ">
        <div className="th-widget-about">
          <div className="about-logo">
            <a href="/"><img src="/assets/img/logo2.svg" alt="Pamar" /></a>
          </div>
          <p className="about-text mb-4"> Pamar full potential with our comprehensive consulting services. Our expert team partners with you to identify growth opportunities.</p>
          <div className="th-social style2">
            <a href="https://www.facebook.com/"><i className="fab fa-facebook-f" /></a>
            <a href="https://www.twitter.com/"><i className="fab fa-twitter" /></a>
            <a href="https://www.youtube.com/"><i className="fab fa-youtube" /></a>
            <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in" /></a>
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
  <div className="popup-search-box d-none d-lg-block">
    <button className="searchClose"><i className="far fa-times" /></button>
    <form action="#">
      <input type="text" placeholder="What are you looking for?" />
      <button type="submit"><i className="fal fa-search" /></button>
    </form>
  </div>{/*==============================
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

export function HomeThreePageChromeHeader() {
  return (
<div className="react-fragment"><header className="th-header header-layout3 onepage-nav">
    <div className="header-top">
      <div className="container">
        <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
          <div className="col-auto d-none d-lg-block">
            <div className="header-links style2">
              <ul className="header-left-wrap">
                <li>Hotline: +1 (800) 555-0123</li>
                <li>info@pamarservices.com</li>
              </ul>
            </div>
          </div>
          <div className="col-auto">
            <div className="header-links">
              <ul className="header-right-wrap">
                <li>
                  <div className="dropdown-link">
                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="false">English</a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                      <li>
                        <a href="#">German</a>
                        <a href="#">French</a>
                        <a href="#">Italian</a>
                        <a href="#">Latvian</a>
                        <a href="#">Spanish</a>
                        <a href="#">Greek</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#">Follow:</a>
                </li>
                <li className="top-right">
                  <div className="social-links">
                    <a href="https://www.facebook.com/"><i className="fab fa-facebook-f" /></a>
                    <a href="https://www.twitter.com/"><i className="fab fa-twitter" /></a>
                    <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in" /></a>
                    <a href="https://www.youtube.com/"><i className="fab fa-youtube" /></a>
                    <a href="https://www.instagram.com/"><i className="fab fa-instagram" /></a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="shape bg-mask" data-mask-src="/assets/img/shape/header-top-shape3-1.png">
      </div>
    </div>
    <div className="sticky-wrapper">
      {/* Main Menu Area */}
      <div className="menu-area">
        <div className="container-fluid p-0">
          <div className="row g-0 align-items-center justify-content-between">
            <div className="col-auto">
              <div className="header-logo">
                <a href="/">
                  <img src="/assets/img/logo5.svg" alt="Pamar" />
                </a>
                <div className="logo-shape bg-mask" data-mask-src="/assets/img/shape/logo-shape3-1.png">
                </div>
              </div>
            </div>
            <div className="col-auto">
              <div className="main-menu-wrap3 align-items-center justify-content-between">
                <nav className="main-menu d-none d-xl-inline-block">
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
                <div className="header-sidbtn d-flex d-xl-none">
                  <div className="sidebar-btn">
                    <button type="button" className="simple-icon th-menu-toggle">
                      <span className="dots" />
                      <span className="dots" />
                      <span className="dots" />
                    </button>
                  </div>
                </div>
                <div className="header-search d-none d-xl-inline-block">
                  <button type="button" className="icon-btn style6 searchBoxToggler"><span>Search Here....</span><i className="far fa-search" /></button>
                </div>
                <div className="header-bg-shape bg-mask" data-mask-src="/assets/img/shape/header-shape3-2.png">
                </div>
              </div>
            </div>
            <div className="col-auto d-none d-xl-block">
              <div className="header-button">
                <div className="d-xxl-block d-none">
                  <a href="/contact" className="th-btn">Request Service<i className="fa-solid fa-angle-right ms-2" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header></div>

  );
}

export function HomeThreePageChromeFooter() {
  return (
<div className="react-fragment"><footer className="footer-layout2  bg-black-color12 overflow-hidden">
    <div className="footer-top bg-mask" data-mask-src="/assets/img/shape/footer-bg-shape3.png">
      <div className="footer-wrap">
        <div className="row  align-items-center">
          <div className="col-lg-5" data-cue="slideInUp">
            <h4 className="box-text">Subscribe to Our Newsletter</h4>
          </div>
          <div className="col-lg-7" data-cue="slideInUp">
            <form className="newsletter-form">
              <div className="form-group">
                <input className="form-control" type="email" placeholder="Enter your email address" required />
              </div>
              <button type="submit" className="th-btn style15">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="footer-bottom">
        <div className="widget-area">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-4" data-cue="slideInUp">
              <div className="widget footer-widget">
                <div className="th-widget-about style2">
                  <div className="about-logo">
                    <a href="/"><img src="/assets/img/logo4.svg" alt="Pamar" /></a>
                  </div>
                  <p className="about-text mb-4"> Plumbing is the system of pipes, fittings, fixtures, and appliances installed in a home or building for the distribution.</p>
                  <div className="th-social style3">
                    <a href="https://www.facebook.com/"><i className="fab fa-facebook-f" /></a>
                    <a href="https://www.twitter.com/"><i className="fab fa-twitter" /></a>
                    <a href="https://www.youtube.com/"><i className="fab fa-youtube" /></a>
                    <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-auto" data-cue="slideInUp">
              <div className="widget widget_nav_menu footer-widget style3">
                <h3 className="widget_title">Quick Links</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/about">Our Gallery</a></li>
                    <li><a href="/services">Our Services</a></li>
                    <li><a href="/team">Our Team</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto" data-cue="slideInUp">
              <div className="widget widget_nav_menu footer-widget style3">
                <h3 className="widget_title">Additional Links</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li><a href="/about">Personal Training</a></li>
                    <li><a href="/about">Group Training</a></li>
                    <li><a href="/about">Muscle Building</a></li>
                    <li><a href="/about">Virtual Gym Training</a></li>
                    <li><a href="/about">Weightless Training </a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3" data-cue="slideInUp">
              <div className="widget footer-widget ">
                <h3 className="widget_title style3">Photo Gallery</h3>
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
    </div>
    <div className="container">
      <div className="foote-cta" data-cue="slideInUp">
        <div className="row gy-30 justify-content-lg-between align-items-center">
          <div className="col-lg-auto">
            <h4 className="box-text text-white">Get Free Service Cost Estimation</h4>
          </div>
          <div className="col-lg-auto">
            <a href="/contact" className="th-btn style15">Get Estimate Now<i className="fa-solid fa-arrow-right ms-2" /></a>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-wrap">
      <div className="container">
        <div className="row gy-2">
          <div className="col-lg-6" data-cue="slideInUp">
            <p className="copyright-text">Copyright <span>©</span> 2025 <a href="/">Pamar.</a> All Rights Reserved.</p>
          </div>
          <div className="col-lg-6 text-center text-lg-end" data-cue="slideInUp">
            <div className="footer-links">
              <ul>
                <li>
                  <a href="/about">Privacy Policy</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/about">Terms and Conditions.</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="shape-mockup d-none d-xxl-block  " style={{top: '0%', left: '0%'}}>
      <img src="/assets/img/shape/bg-shape11.png" alt />
    </div>
    <div className="shape-mockup d-none d-xxl-block  " style={{bottom: '0%', right: '0%'}}>
      <img src="/assets/img/shape/bg-shape12.png" alt />
    </div>
  </footer></div>

  );
}

export function HomeThreePageChromeAfter() {
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
