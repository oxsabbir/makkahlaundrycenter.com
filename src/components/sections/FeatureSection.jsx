const features = [
  {
    icon: "/assets/img/icon/feature-icon1-1.svg",
    title: "Premium Wash &amp; Fold",
    text: "Your clothes are sorted, washed, and folded with care using premium detergents for a fresh, clean result every time.",
  },
  {
    icon: "/assets/img/icon/feature-icon1-2.svg",
    title: "Free Pickup &amp; Delivery",
    text: "We collect your laundry from your doorstep and return it fresh and neatly folded — no driving, no waiting.",
  },
  {
    icon: "/assets/img/icon/feature-icon1-3.svg",
    title: "Expert Dry Cleaning",
    text: "Delicate fabrics and special garments get the professional dry cleaning treatment they deserve — gentle yet effective.",
  },
];

const waLink =
  "https://wa.me/966569385700?text=Hi%20Makkah%20Laundry%20Center!%20I%27d%20like%20to%20inquire%20about%20your%20laundry%20services.%20Please%20share%20details%20and%20preferred%20pickup%20time.";

export default function FeatureSection() {
  return (
    <section className="feature-area-1  position-relative pt-40 pb-40">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          {features.map((f, i) => (
            <div key={i} className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="feature-card" data-cue="slideInUp">
                <div className="box-icon">
                  <div>
                    <img src={f.icon} alt="icon" />
                  </div>
                </div>
                <div className="feature-card-details text-left">
                  <h3
                    className="box-title"
                    dangerouslySetInnerHTML={{ __html: f.title }}
                  />
                  <p className="box-text">{f.text}</p>
                  <a href={waLink} target="_blank" className="link-btn2">
                    <span>Book Now</span>
                    <div className="icon"></div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
