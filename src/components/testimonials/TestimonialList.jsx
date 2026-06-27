import TestimonialCard from "./TestimonialCard";

export default function TestimonialList({ testimonials }) {
  return (
    <div className="row gy-50">
      {testimonials.map((testimonial) => (
        <div key={testimonial.name} className="col-xl-4 col-lg-6 col-md-6">
          <TestimonialCard testimonial={testimonial} />
        </div>
      ))}
    </div>
  );
}
