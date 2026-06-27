import ServiceCard from "./ServiceCard";

export default function ServiceGrid({ services }) {
  return (
    <div className="row gy-4">
      {services.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </div>
  );
}
