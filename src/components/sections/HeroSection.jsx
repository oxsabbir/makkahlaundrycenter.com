const heroSlides = [
  {
    bg: "/assets/img/hero/hero-center-1.webp",
    subtitle: "Premium Garment Care",
    title: "Clean Clothes, Zero Hassle.",
    description:
      "From everyday garments to delicate fabrics and Ihram, every item receives expert cleaning, careful finishing, and dependable delivery.",
    btn1: {
      text: "Book a Pickup",
      href: "https://wa.me/966569385700?text=Hi%20Makkah%20Laundry%20Center!%20I'd%20like%20to%20book%20a%20laundry%20pickup.",
    },
    btn2: {
      text: "Our Services",
      href: "/services",
    },
  },
  {
    bg: "/assets/img/hero/hero-center-2.webp",
    subtitle: "Trusted Laundry Service in Makkah",
    title: "Fast Pickup. Fresh Delivery.",
    description:
      "Professional laundry care with doorstep pickup, hygienic cleaning, and on-time delivery for residents, hotels, and pilgrims across Makkah.",
    btn1: {
      text: "Schedule Pickup",
      href: "https://wa.me/966569385700?text=Hi%20Makkah%20Laundry%20Center!%20I%20want%20to%20schedule%20a%20laundry%20pickup.",
    },
    btn2: {
      text: "Contact Us",
      href: "/contact",
    },
  },
  {
    bg: "/assets/img/hero/hero-center-3.webp",
    subtitle: "Laundry Near Masjid Al-Haram",
    title: "Laundry That Fits Your Day.",
    description:
      "Quick booking, fabric-safe cleaning, professional pressing, and reliable same-day service designed around your busy schedule.",
    btn1: {
      text: "Book Now",
      href: "https://wa.me/966569385700?text=Hi%20Makkah%20Laundry%20Center!%20I'd%20like%20to%20book%20your%20laundry%20service.",
    },
    btn2: {
      text: "Learn More",
      href: "/about",
    },
  },
];

export default function HeroSection() {
  return (
    <div
      className="th-hero-wrapper hero-1 bg-mask"
      id="hero"
      data-mask-src="/assets/img/shape/hero-thumb1-1-shape.png"
    >
      <div
        className="swiper th-slider"
        id="heroSlider8"
        data-slider-options='{"effect":"fade", "autoHeight": "true"}'
      >
        <div className="swiper-wrapper">
          {heroSlides.map((slide, i) => (
            <div key={i} className="swiper-slide" data-bg-src={slide.bg}>
              <div className="hero-inner">
                <div className="container">
                  <div className="hero-style1">
                    <span
                      className="sub-title style5"
                      data-ani="slideinup"
                      data-ani-delay="0.2s"
                    >
                      {slide.subtitle}
                    </span>
                    <h1 className="hero-title text-white">
                      <span
                        className="title1"
                        data-ani="slideinup"
                        data-ani-delay="0.4s"
                      >
                        {slide.title}
                      </span>
                    </h1>
                    <p
                      className="hero-text text-white"
                      data-ani="slideinup"
                      data-ani-delay="0.6s"
                    >
                      {slide.description}
                    </p>
                    <div
                      className="btn-group"
                      data-ani="slideinup"
                      data-ani-delay="0.7s"
                    >
                      <a
                        href={slide.btn1.href}
                        target="_blank"
                        className="th-btn"
                      >
                        {slide.btn1.text}
                        <span className="after-bg" />
                      </a>
                      <a href={slide.btn2.href} className="th-btn style2">
                        {slide.btn2.text}
                        <span className="after-bg" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="icon-box">
          <button
            data-slider-prev="#heroSlider8"
            className="slider-arrow style2 default"
          >
            <img src="/assets/img/icon/left-arrow.svg" alt />
          </button>
          <button
            data-slider-next="#heroSlider8"
            className="slider-arrow style2 default"
          >
            <img src="/assets/img/icon/right-arrow.svg" alt />
          </button>
        </div>
      </div>
      <div className="scroll-down">
        <a href="#about-sec" className="scroll-wrap">
          Scroll Down
          <span>
            <img src="/assets/img/icon/down-arrow.svg" alt />
          </span>
        </a>
      </div>
    </div>
  );
}
