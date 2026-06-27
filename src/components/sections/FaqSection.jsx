const faqItems = [
  {
    id: 1,
    question: "What types of laundry services do you offer?",
    answer:
      "We offer premium dry cleaning, wash &amp; fold, ironing and pressing, stain removal, Ihram cleaning &amp; care, and free pickup &amp; delivery across Makkah.",
  },
  {
    id: 2,
    question: "Do you offer free pickup and delivery in Makkah?",
    answer:
      "Yes! We provide free pickup and delivery services throughout Makkah. Simply schedule a pickup via WhatsApp or our website, and we will collect your laundry, clean it, and return it to your doorstep.",
  },
  {
    id: 3,
    question: "How does your wash &amp; fold service work?",
    answer:
      "Our wash &amp; fold service is simple: you hand us your laundry, we wash it with gentle detergents, dry it carefully, and fold it neatly. Perfect for everyday clothes and household linens.",
  },
  {
    id: 4,
    question: "What is the turnaround time for dry cleaning?",
    answer:
      "Our standard dry cleaning turnaround is 24 to 48 hours. We also offer same-day express service for urgent orders. Contact us to check availability.",
  },
  {
    id: 5,
    question: "Can you remove tough stains from delicate fabrics?",
    answer:
      "Yes. Our professional stain removal service uses specialized treatments tailored to each fabric type. We handle everything from food and oil stains to ink and grass marks with care.",
  },
  {
    id: 6,
    question: "Do you offer special care for Ihram garments?",
    answer:
      "Absolutely. We provide perfume-free, gentle cleaning specifically for Ihram garments to maintain their purity, softness, and comfort. Your Ihram is handled with the utmost respect and care.",
  },
  {
    id: 7,
    question: "How do I book a laundry service?",
    answer:
      "Booking is easy. You can reach us via WhatsApp, fill out the contact form on our website, or give us a call. We will arrange a free pickup at your convenience.",
  },
  {
    id: 8,
    question: "What are your operating hours?",
    answer:
      "We are open Saturday to Thursday from 8:00 AM to 10:00 PM. On Friday, our hours are 2:00 PM to 10:00 PM. We also accommodate special timing requests — just let us know.",
  },
  {
    id: 9,
    question: "Do you offer same-day or express laundry service?",
    answer:
      "Yes, we offer express service for customers who need their laundry back the same day. Additional charges may apply. Please contact us to confirm availability for express orders.",
  },
  {
    id: 10,
    question: "Do you handle special fabric care instructions?",
    answer:
      "Yes. Our team is trained to follow all garment care labels. Whether it is silk, wool, or delicate synthetics, we ensure the correct cleaning method is used for every item.",
  },
  {
    id: 11,
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, bank transfers, and popular digital payment methods in Saudi Arabia. Payment is collected upon delivery for your convenience.",
  },
];

export default function FaqSection({ limit }) {
  const items = limit ? faqItems.slice(0, limit) : faqItems;
  return (
    <div className="overflow-hidden faq-section space overflow-hidden position-relative z-index-2">
      <div className="container">
        <div className="row gy-40 justify-content-center">
          <div className="col-xxl-5">
            <div className="faq-wrap">
              <div className="title-area text-left mb-0">
                <span
                  className="sub-title2 style3 bg-gray-color"
                  data-cue="slideInUp"
                >
                  FAQs
                </span>
                <h2
                  className="sec-title style6 text-anim2"
                  data-cue="slideInUp"
                >
                  Your <span>Questions </span>
                  <br /> Answered
                </h2>
                <p className="sec-text2" data-cue="slideInUp">
                  Everything you need to know about our laundry and dry cleaning
                  services in Makkah.
                </p>
                <div className="btn-group " data-cue="slideInUp">
                  <a href="/contact" className="th-btn">
                    Ask More Question
                    <span className="after-bg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-lg-7">
            <div className="faq-wrap1">
              <div className="accordion" id="faqAccordion">
                {items.map((item, index) => (
                  <div
                    className="accordion-card style4 style5"
                    data-cue="slideInUp"
                    key={item.id}
                  >
                    <div
                      className="accordion-header"
                      id={`collapse-item-${item.id}`}
                    >
                      <button
                        className={`accordion-button ${index > 0 ? "collapsed" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${item.id}`}
                        aria-expanded={index === 0}
                        aria-controls={`collapse-${item.id}`}
                      >
                        {item.question}
                      </button>
                    </div>
                    <div
                      id={`collapse-${item.id}`}
                      className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                      aria-labelledby={`collapse-item-${item.id}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        <p
                          className="faq-text"
                          dangerouslySetInnerHTML={{ __html: item.answer }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
