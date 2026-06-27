export default function ServiceCard({ service }) {
  const external = service.href.startsWith("http");
  const linkProps = external
    ? { target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <div className="col-xl-4 col-lg-6" data-cue="slideInUp">
      <article className="service-card style2">
        <div className="d-flex justify-content-between">
          <div className="box-icon">
            <div className="color-masking">
              <div className="masking-src" data-mask-src={service.image} />
              <img src={service.icon} alt="" />
            </div>
          </div>
          <a href={service.href} className="circle-tag" {...linkProps}>
            <span className="circle-title-anime">
              {external ? "BOOK NOW . BOOK NOW ." : "READ MORE . READ MORE ."}
            </span>
            <span className="icon">
              <img src="/assets/img/icon/right-arrow-theme1.svg" alt="" />
            </span>
          </a>
        </div>
        <h3 className="box-title">
          <a href={service.href} {...linkProps}>
            {service.title}
          </a>
        </h3>
        <p className="box-text">{service.description}</p>
        <div className="box-img">
          <img src={service.image} alt={service.title} />
        </div>
      </article>
    </div>
  );
}
