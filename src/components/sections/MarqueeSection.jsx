const marqueeItems = [
  { label: "Wash & Fold", hover: "Wash & Fold" },
  { label: "Dry Cleaning", hover: "Dry Cleaning" },
  { label: "Stain Removal", hover: "Stain Removal" },
];

export default function MarqueeSection() {
  return (
    <div className="overflow-hidden pb-85" data-cue="slideInUp">
      <div className="container-fluid p-0">
        <div
          className="swiper th-slider marquee-slider1"
          data-slider-options='{"breakpoints":{"0":{"slidesPerView":"auto"}},"autoplay":{"delay":0,"disableOnInteraction":false},"noSwiping":"true","speed":10000,"spaceBetween":30}'
        >
          <div className="swiper-wrapper">
            {[0, 1, 2].flatMap((repeat) =>
              marqueeItems.map((item, i) => (
                <div className="swiper-slide" key={`${repeat}-${i}`}>
                  <div className="marquee-card">
                    <div className="marquee-icon color-masking">
                      <div
                        className="masking-src"
                        data-mask-src="/assets/img/shape/star-shape1.png"
                      />
                      <img src="/assets/img/shape/star-shape1.png" alt="img" />
                    </div>
                    <a target="_blank" href="#" data-hover={item.hover}>
                      {item.label}{" "}
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
