export default function ServiceCard({ service }) {
  const external = service.href.startsWith("http");
  const linkProps = external ? { target: "_blank", rel: "noreferrer" } : {};

  return (
    <div className="col-xl-4 col-lg-6" data-cue="slideInUp">
      <article className="service-card style2">
        <h3 className="box-title">
          <a href={service.href} {...linkProps}>
            {service.title}
          </a>
        </h3>
        <p className="box-text">{service.description}</p>
        <div className="box-img">
          <img src={service.image} alt={service.title} />
        </div>
        <div className="text-center mt-30">
          <a href={service.href} className="th-btn" {...linkProps}>
            Book Now
            <span className="after-bg" />
          </a>
        </div>
      </article>
    </div>
  );
}
