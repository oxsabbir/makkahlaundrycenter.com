import TestimonialCard from "./TestimonialCard";

export default function TestimonialList({ testimonials }) {
  return (
    <div className="row gy-30">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.name} testimonial={testimonial} />
      ))}
    </div>
  );
}
