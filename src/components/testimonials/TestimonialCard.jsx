export default function TestimonialCard({ testimonial }) {
  return (
    <div className="testi-card style-premium">
      <div className="testi-card_top">
        <div className="quote-icon">
          <img src="/assets/img/icon/quote-icon2.svg" alt="" />
        </div>
        <div className="testi-card_review" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }, (_, index) => (
            <i key={index} className="fa-sharp fa-solid fa-star" />
          ))}
        </div>
      </div>
      <p className="box-text">"{testimonial.quote}"</p>
      <div className="testi-card-bottom">
        <h3 className="box-title">{testimonial.name}</h3>
        <p className="box-desig">{testimonial.location}</p>
      </div>
    </div>
  );
}
