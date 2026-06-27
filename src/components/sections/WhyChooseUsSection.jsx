const whyChooseUs = [
  {
    icon: "/assets/img/icon/why-icon1-1.svg",
    title: "Free Pickup &amp; Delivery",
    text: "We collect your laundry from your doorstep and return it fresh and folded — no driving, no waiting.",
  },
  {
    icon: "/assets/img/icon/why-icon1-2.svg",
    title: "Eco-Friendly Cleaning",
    text: "We use non-toxic, eco-friendly detergents and solvents that are safe for your family and the environment.",
  },
  {
    icon: "/assets/img/icon/why-icon1-3.svg",
    title: "Transparent Pricing",
    text: "What you see is what you pay. No hidden fees, no surprises — just honest, affordable rates.",
  },
  {
    icon: "/assets/img/icon/why-icon1-4.svg",
    title: "Expert Garment Care",
    text: "Trained professionals handle every fabric with care — from delicate silks to everyday cotton and wool.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <div className="why-sec-1 overflow-hidden space overflow-hidden">
      <div className="container">
        <div className="row gy-40 gx-80">
          <div className="col-xxl-6 ">
            <div className="title-area mb-60">
              <span
                className="sub-title style2 text-anim after-none before-none"
                data-cue="slideInLeft"
              >
                Why Choose Us
              </span>
              <h2
                className="sec-title style3 text-anim2"
                data-cue="slideInLeft"
              >
                Why Makkah Trusts <br />
                Us For <span>Clean, Fresh Laundry</span>
              </h2>
            </div>
            <div className="why-img-box1" data-cue="slideInUp">
              <img
                src="/assets/img/normal/why-choose-us-center.webp"
                alt="img"
              />
            </div>
          </div>
          <div className="col-xxl-6">
            <div className="why-card-wrap">
              <div className="row gy-4 justify-content-center">
                {whyChooseUs.map((item, i) => (
                  <div key={i} className="col-xxl-6 col-lg-6 col-md-6">
                    <div className="why-card" data-cue="slideInUp">
                      <div className="box-icon">
                        <img src={item.icon} alt="why-icon" />
                      </div>
                      <div className="box-details">
                        <h4 className="box-title" dangerouslySetInnerHTML={{ __html: item.title }} />
                        <p className="box-text">{item.text}</p>
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
