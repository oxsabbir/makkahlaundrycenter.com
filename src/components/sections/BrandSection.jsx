const brandLogos = [
  "brand1-1.svg", "brand1-2.svg", "brand1-3.svg", "brand1-4.svg",
  "brand1-5.svg", "brand1-6.svg",
];

export default function BrandSection() {
  return (
    <div className="space overflow-hidden brand-area-1">
      <div className="container-fluid p-0">
        <div className="brand-wrap1 text-center">
          <div
            className="swiper th-slider"
            data-cue="slideInUp"
            id="brandSlider1"
            data-slider-options='{"breakpoints":{"0":{"slidesPerView":"auto"}},
       "autoplay":{"delay":0,"disableOnInteraction":false},"noSwiping":"true","speed":8000,"spaceBetween":126}'
          >
            <div className="swiper-wrapper">
              {[...Array(4)].flatMap((_, repeat) =>
                brandLogos.map((logo, i) => (
                  <div className="swiper-slide" key={`${repeat}-${i}`}>
                    <a href="/services" className="brand-box">
                      <img src={`/assets/img/brand/${logo}`} alt="Brand Logo" />
                    </a>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
