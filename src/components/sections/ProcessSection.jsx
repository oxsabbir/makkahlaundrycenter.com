const processSteps = [
  {
    icon: "/assets/img/icon/process_1_1.svg",
    title: "Book a Pickup",
    text: "Contact us via WhatsApp or phone to schedule a free pickup at your convenience. We'll be at your door.",
  },
  {
    icon: "/assets/img/icon/process_1_2.svg",
    title: "We Clean &amp; Care",
    text: "We sort, treat stains, and clean your garments using eco-friendly products. Each item gets the care it deserves.",
  },
  {
    icon: "/assets/img/icon/process_1_3.svg",
    title: "Delivered Fresh",
    text: "Fresh and neatly folded laundry delivered back to your doorstep. Enjoy that fresh, clean feel every time.",
  },
];

export default function ProcessSection({ isHomePage = true }) {
  return (
    <section
      className={`position-relative ${isHomePage === true ? "process1" : "space-bottom"} bg-black-color2  space-top overflow-hidden`}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-4">
            <div className="title-area mb-60">
              <span
                className="sub-title style2 text-theme2 border-theme2 text-anim after-none before-none"
                data-cue="slideInLeft"
              >
                Work Process
              </span>
              <h2
                className="sec-title style3 text-white text-anim2"
                data-cue="slideInLeft"
              >
                How We Work!
              </h2>
            </div>
          </div>
          <div className="col-xxl-8">
            <div className="process-card-wrap">
              <div className="row gy-30">
                {processSteps.map((step, i) => (
                  <div key={i} className="col-xl-4 col-lg-4 col-md-4">
                    <div className="process-card" data-cue="slideInUp">
                      <div className="box-content">
                        <h3
                          className="box-title"
                          dangerouslySetInnerHTML={{ __html: step.title }}
                        />
                        <p className="box-text">{step.text}</p>
                      </div>
                      <div className="box-thumb-wrap">
                        <div className="box-thumb">
                          <img src={step.icon} alt="img" />
                        </div>
                      </div>
                      <div className="box-bg-shape">
                        <img src="/assets/img/icon/process-bg-shape.png" alt />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
