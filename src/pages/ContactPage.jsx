import PageLayout from "../components/layout/PageLayout";
import Breadcrumb from "../components/layout/Breadcrumb";

export default function ContactPage() {
  return (
    <PageLayout
      title="Shared on THEMELOCK.COM - Pamar - Plumbing & Repair Service HTML Template - Contact Us"
      description="Pamar - Plumbing & Repair Service HTML Template"
    >
<div className="react-fragment">
        <Breadcrumb
          title="Contact Us"
          items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
        />{/*==============================
Contact Area   
==============================*/}
  <div className="space overflow-hidden contact-area-1 position-relative z-index-common" id="contact-info-sec">
    <div className="container">
      <div className="row gy-40 justify-content-center">
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="contact-info style4" data-cue="slideInUp">
            <div className="box-icon">
              <i className="fal fa-map-marker-alt" />
            </div>
            <div className="box-content">
              <h4 className="box-title">Our Address</h4>
              <p className="box-text">2690 Hiltona Street Victoria Road, New York, Canada</p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="contact-info style4" data-cue="slideInUp">
            <div className="box-icon">
              <i className="fal fa-phone" />
            </div>
            <div className="box-content">
              <h4 className="box-title">Phone Number</h4>
              <p className="box-text"><a href="tel:+919175513773">+01 234 567 890</a><a href="tel:+919175513773">+919 (175) 513 773</a></p>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="contact-info style4" data-cue="slideInUp">
            <div className="box-icon">
              <i className="fal fa-envelope" />
            </div>
            <div className="box-content">
              <h4 className="box-title">Email Address</h4>
              <p className="box-text"><a href="mailto:help24/7.info@pamar.com">help24/7.info@pamar.com</a><a href="mailto:info@pamar.com">info@pamar.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>{/*==============================
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
  </div>{/*==============================
Map Area  
==============================*/}
  <div className="overflow-hidden contact-page-v1">
    <div className="contact-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2sAngfuztheme!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd" allowFullScreen loading="lazy" />
    </div>
  </div>
  {/*==============================
	Footer Area
==============================*/}</div>

    </PageLayout>
  );
}
