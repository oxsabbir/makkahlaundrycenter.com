import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    hotel: "",
    number: "",
    subject: "",
    message: "",
    privacy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.privacy) return;
    const text = `Hi Makkah Laundry Center! I'd like to request a quote.%0A%0AName: ${encodeURIComponent(formData.name)}%0AHotel: ${encodeURIComponent(formData.hotel)}%0APhone: ${encodeURIComponent(formData.number)}%0AService: ${encodeURIComponent(formData.subject)}%0AMessage: ${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/966569385700?text=${text}`, "_blank");
  };

  return (
    <div
      className="space overflow-hidden contact-area-1 position-relative z-index-common"
      id="contact-sec"
    >
      <div className="container">
        <div className="consulting-wrap1">
          <div className="row gy-60 align-items-center">
            <div className="col-xxl-6">
              <div className="page-img mb-0">
                <img src="/assets/img/normal/cta-thumb.webp" alt="img" />
              </div>
            </div>
            <div className="col-xxl-6">
              <div className="consulting-form-wrap1">
                <div className="title-area mb-60 ">
                  <span
                    className="sub-title style2 text-white border-white text-anim after-none before-none"
                    data-cue="slideInLeft"
                  >
                    Let us call you back
                  </span>
                  <h2 className="sec-title text-white">
                    Get <span>Instant</span> callback
                  </h2>
                </div>
                <div className="contact-form-v1 ">
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="row">
                      <div className="form-group style-border col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        <i className="far fa-user" />
                      </div>
                      <div className="form-group style-border col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          name="hotel"
                          id="hotel"
                          placeholder="Hotel Name"
                          value={formData.hotel}
                          onChange={handleChange}
                        />
                        <i className="far fa-building" />
                      </div>
                      <div className="form-group style-border col-md-6">
                        <input
                          type="tel"
                          className="form-control"
                          name="number"
                          id="number"
                          placeholder="Phone Number"
                          value={formData.number}
                          onChange={handleChange}
                        />
                        <i className="far fa-phone" />
                      </div>
                      <div className="form-group style-border col-md-6">
                        <select
                          name="subject"
                          id="subject"
                          className="form-select bg-white"
                          value={formData.subject}
                          onChange={handleChange}
                        >
                          <option value="" disabled hidden>
                            Select Service
                          </option>
                          <option value="Premium Dry Cleaning">
                            Premium Dry Cleaning
                          </option>
                          <option value="Ironing And Pressing">
                            Ironing And Pressing
                          </option>
                          <option value="Wash &amp; Fold Service">
                            Wash &amp; Fold Service
                          </option>
                          <option value="Stain Removal">Stain Removal</option>
                          <option value="Ihram Cleaning &amp; Care">
                            Ihram Cleaning &amp; Care
                          </option>
                          <option value="Pickup &amp; Delivery Service">
                            Pickup &amp; Delivery Service
                          </option>
                        </select>
                      </div>
                      <div className="form-group style-border col-12">
                        <textarea
                          name="message"
                          id="message"
                          cols={30}
                          rows={3}
                          className="form-control"
                          placeholder="Write Message...."
                          value={formData.message}
                          onChange={handleChange}
                        />
                        <i className="fa-light fa-pen" />
                      </div>
                      <div className="form-group col-12">
                        <div className="custom-checkbox">
                          <input
                            type="checkbox"
                            id="remembermylogin"
                            name="privacy"
                            checked={formData.privacy}
                            onChange={handleChange}
                          />
                          <label
                            htmlFor="remembermylogin"
                            className="text-white"
                          >
                            I agree with the privacy policy
                          </label>
                        </div>
                      </div>
                      <div className="form-btn col-12">
                        <button type="submit" className="th-btn style5">
                          Get Callback
                          <span className="after-bg" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="contact-thumb1-1-shape bg-mask"
        data-mask-src="/assets/img/shape/contact-thumb1-1-shape.jpg"
      >
        <img src="/assets/img/shape/bg-shape6.png" alt />
      </div>
    </div>
  );
}
