const testimonials = [
  {
    text: "Makkah Laundry Center has been a blessing for my family. Their wash and fold service is excellent, and the free pickup & delivery saves me so much time. Highly recommended!",
    name: "Ahmed Al-Maliki",
    role: "Regular Client",
  },
  {
    text: "I've been using Makkah Laundry Center for my business shirts for months. The dry cleaning and ironing are always perfect. They never disappoint and always deliver on time.",
    name: "Khalid Al-Ghamdi",
    role: "Business Client",
  },
  {
    text: "Their stain removal service is incredible — my kids' clothes come back looking brand new every time. Fair prices and very professional. Makkah Laundry Center is the best in town.",
    name: "Ibrahim Al-Qahtani",
    role: "Happy Customer",
  },
  {
    text: "Convenient, reliable, and high-quality service. Booking via WhatsApp is so easy and they always arrive on time. Makkah Laundry Center makes laundry day effortless.",
    name: "Mohammed Al-Harbi",
    role: "Regular Client",
  },
];

export default function TestimonialSection({ ishomePage = true }) {
  return (
    <section
      className={`testi-area-1 space-top ${!ishomePage ? "space-bottom" : ""} overflow-hidden `}
      id="testi-sec"
    >
      {/* <div
        className="price-bg-shape1-1 shape-mockup "
        data-top="3%"
        data-right={0}
      >
        <img src="/assets/img/shape/bg-shape7.png" alt="img" />
      </div> */}
      <div className="container">
        <div className="row">
          <div className="title-area text-xl-start text-center">
            <div className="row ">
              <div className="col-xl-3">
                <h2
                  className="sub-title style2 text-anim after-none before-none  justify-content-xl-start justify-content-center"
                  data-cue="slideInLeft"
                >
                  What Our Clients Say
                </h2>
              </div>
              <div className="col-xl-6">
                <h2
                  className="sec-title style2 text-anim2 mb-0"
                  data-cue="slideInLeft"
                >
                  Reviews.
                </h2>
                <p className="sec-text" data-cue="slideInUp">
                  See what our customers in Makkah have to say about our laundry
                  and dry cleaning services. From wash & fold to premium dry
                  cleaning, we take pride in every garment we handle. Your
                  satisfaction is what drives us to deliver the best care for
                  your clothes.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-50 flex-row-reverse">
          <div className="col-xl-6">
            <div className="testi-thumb1-1">
              <div className="quote-icon">
                <img src="/assets/img/icon/quote-icon2.svg" alt />
              </div>
              <div
                className="img1 bg-mask"
                data-mask-src="/assets/img/shape/testi-shape.png"
              >
                <img
                  src="/assets/img/testimonial/review-image.webp"
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="slider-area testi-slider1">
              <div
                className="swiper th-slider has-shadow"
                id="testiSlide1"
                data-slider-options='{"autoHeight": "true","breakpoints":{"0":{"slidesPerView":1},"768":{"slidesPerView":"1"},"992":{"slidesPerView":"1"},"1200":{"slidesPerView":"1"},"1600":{"slidesPerView":"1"}}}'
              >
                <div className="swiper-wrapper">
                  {testimonials.map((t, i) => (
                    <div className="swiper-slide" key={i}>
                      <div className="testi-card">
                        <div className="testi-card_review">
                          <i className="fa-sharp fa-solid fa-star" />
                          <i className="fa-sharp fa-solid fa-star" />
                          <i className="fa-sharp fa-solid fa-star" />
                          <i className="fa-sharp fa-solid fa-star" />
                          <i className="fa-sharp fa-solid fa-star" />
                        </div>
                        <p className="box-text">{t.text}</p>
                        <div className="testi-card-profile">
                          <div className="testi-card-profile-detaile">
                            <h3 className="box-title">{t.name}</h3>
                            <p className="box-desig">{t.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="slider-pagination-wrap ">
                  <button
                    data-slider-prev="#testiSlide1"
                    className="slider-arrow style3 default"
                  >
                    <img src="/assets/img/icon/left-arrow.svg" alt />
                  </button>
                  <button
                    data-slider-next="#testiSlide1"
                    className="slider-arrow style3 default"
                  >
                    <img src="/assets/img/icon/right-arrow.svg" alt />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
