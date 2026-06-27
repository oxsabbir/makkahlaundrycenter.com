export default function TestimonialCard({ testimonial }) {
  return (
    <article className="testi-wrap5">
      <div className="row gy-50 flex-row-reverse">
        <div className="col-xl-6 col-lg-7">
          <div className="testi-thumb1-1">
            <div className="quote-icon">
              <img src="/assets/img/icon/quote-icon2.svg" alt="" />
            </div>
            <div
              className="img1 bg-mask"
              data-mask-src="/assets/img/shape/testi-shape.png"
            >
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-5">
          <div className="testi-card style5">
            <div className="testi-card_review" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }, (_, index) => (
                <i key={index} className="fa-sharp fa-solid fa-star" />
              ))}
            </div>
            <p className="box-text">{testimonial.quote}</p>
            <div className="testi-card-profile">
              <div className="testi-card-profile-detaile">
                <h3 className="box-title">{testimonial.name}</h3>
                <p className="box-desig">{testimonial.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
