export default function FaqSection() {
  return (
    <div className="overflow-hidden faq-section space overflow-hidden position-relative z-index-2">
      <div className="container">
        <div className="row gy-40 justify-content-center">
          <div className="col-xxl-5">
            <div className="faq-wrap">
              <div className="title-area text-left mb-0">
                <span className="sub-title2 style3 bg-gray-color" data-cue="slideInUp">FAQs</span>
                <h2 className="sec-title style6 text-anim2" data-cue="slideInUp">Your <span>Questions </span><br /> Answered</h2>
                <p className="sec-text2" data-cue="slideInUp">Everything you need to know about our laundry and dry cleaning services in Makkah.</p>
                <div className="btn-group " data-cue="slideInUp">
                  <a href="/contact" className="th-btn">Ask More Question<span className="after-bg" /></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-lg-7">
            <div className="faq-wrap1">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-card style4 style5" data-cue="slideInUp">
                  <div className="accordion-header" id="collapse-item-1">
                    <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">What types of laundry services do you offer?</button>
                  </div>
                  <div id="collapse-1" className="accordion-collapse collapse show" aria-labelledby="collapse-item-1" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      <p className="faq-text">We offer premium dry cleaning, wash &amp; fold, ironing and pressing, stain removal, Ihram cleaning &amp; care, and free pickup &amp; delivery across Makkah.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card style4 style5" data-cue="slideInUp">
                  <div className="accordion-header" id="collapse-item-2">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">Do you offer free pickup and delivery in Makkah?</button>
                  </div>
                  <div id="collapse-2" className="accordion-collapse collapse " aria-labelledby="collapse-item-2" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      <p className="faq-text">Yes! We provide free pickup and delivery services throughout Makkah. Simply schedule a pickup via WhatsApp or our website, and we will collect your laundry, clean it, and return it to your doorstep.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card style4 style5" data-cue="slideInUp">
                  <div className="accordion-header" id="collapse-item-3">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">How does your wash &amp; fold service work?</button>
                  </div>
                  <div id="collapse-3" className="accordion-collapse collapse " aria-labelledby="collapse-item-3" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      <p className="faq-text">Our wash &amp; fold service is simple: you hand us your laundry, we wash it with gentle detergents, dry it carefully, and fold it neatly. Perfect for everyday clothes and household linens.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card style4 style5" data-cue="slideInUp">
                  <div className="accordion-header" id="collapse-item-4">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4">What is the turnaround time for dry cleaning?</button>
                  </div>
                  <div id="collapse-4" className="accordion-collapse collapse " aria-labelledby="collapse-item-4" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      <p className="faq-text">Our standard dry cleaning turnaround is 24 to 48 hours. We also offer same-day express service for urgent orders. Contact us to check availability.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card style4 style5" data-cue="slideInUp">
                  <div className="accordion-header" id="collapse-item-5">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-5" aria-expanded="false" aria-controls="collapse-5">Can you remove tough stains from delicate fabrics?</button>
                  </div>
                  <div id="collapse-5" className="accordion-collapse collapse " aria-labelledby="collapse-item-5" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      <p className="faq-text">Yes. Our professional stain removal service uses specialized treatments tailored to each fabric type. We handle everything from food and oil stains to ink and grass marks with care.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card style4 style5" data-cue="slideInUp">
                  <div className="accordion-header" id="collapse-item-6">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-6" aria-expanded="false" aria-controls="collapse-6">Do you offer special care for Ihram garments?</button>
                  </div>
                  <div id="collapse-6" className="accordion-collapse collapse " aria-labelledby="collapse-item-6" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      <p className="faq-text">Absolutely. We provide perfume-free, gentle cleaning specifically for Ihram garments to maintain their purity, softness, and comfort. Your Ihram is handled with the utmost respect and care.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card style4 style5" data-cue="slideInUp">
                  <div className="accordion-header" id="collapse-item-7">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-7" aria-expanded="false" aria-controls="collapse-7">How do I book a laundry service?</button>
                  </div>
                  <div id="collapse-7" className="accordion-collapse collapse " aria-labelledby="collapse-item-7" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      <p className="faq-text">Booking is easy. You can reach us via WhatsApp, fill out the contact form on our website, or give us a call. We will arrange a free pickup at your convenience.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card style4 style5" data-cue="slideInUp">
                  <div className="accordion-header" id="collapse-item-8">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-8" aria-expanded="false" aria-controls="collapse-8">What are your operating hours?</button>
                  </div>
                  <div id="collapse-8" className="accordion-collapse collapse " aria-labelledby="collapse-item-8" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      <p className="faq-text">We are open Saturday to Thursday from 8:00 AM to 10:00 PM. On Friday, our hours are 2:00 PM to 10:00 PM. We also accommodate special timing requests — just let us know.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card style4 style5" data-cue="slideInUp">
                  <div className="accordion-header" id="collapse-item-9">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-9" aria-expanded="false" aria-controls="collapse-9">Do you offer same-day or express laundry service?</button>
                  </div>
                  <div id="collapse-9" className="accordion-collapse collapse " aria-labelledby="collapse-item-9" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      <p className="faq-text">Yes, we offer express service for customers who need their laundry back the same day. Additional charges may apply. Please contact us to confirm availability for express orders.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card style4 style5" data-cue="slideInUp">
                  <div className="accordion-header" id="collapse-item-10">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-10" aria-expanded="false" aria-controls="collapse-10">Do you handle special fabric care instructions?</button>
                  </div>
                  <div id="collapse-10" className="accordion-collapse collapse " aria-labelledby="collapse-item-10" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      <p className="faq-text">Yes. Our team is trained to follow all garment care labels. Whether it is silk, wool, or delicate synthetics, we ensure the correct cleaning method is used for every item.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-card style4 style5" data-cue="slideInUp">
                  <div className="accordion-header" id="collapse-item-11">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-11" aria-expanded="false" aria-controls="collapse-11">What payment methods do you accept?</button>
                  </div>
                  <div id="collapse-11" className="accordion-collapse collapse " aria-labelledby="collapse-item-11" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      <p className="faq-text">We accept cash, bank transfers, and popular digital payment methods in Saudi Arabia. Payment is collected upon delivery for your convenience.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-mockup d-none d-xxl-inline" data-bottom={0} data-left="2%">
        <img src="/assets/img/normal/faq-thumb4-1.png" alt="img" />
      </div>
    </div>
  );
}
