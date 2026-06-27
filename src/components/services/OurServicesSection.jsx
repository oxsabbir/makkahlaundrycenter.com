import ServiceGrid from "./ServiceGrid";

export default function OurServicesSection({
  services,
  subtitle = "OUR SERVICES",
  title = "We Provide Best Laundry <br /> <span>Services for You</span>",
  description = "From premium dry cleaning and expert stain removal to gentle Ihram care and free doorstep delivery — we handle every fabric with professional care.",
}) {
  return (
    <section className="space bg-smoke overflow-hidden bg-gray-color service-wrap mb-40" id="service-sec">
      <div className="service-bg-shape1-1 shape-mockup" data-bottom={0} data-left="50%">
        <img src="/assets/img/shape/bg-shape3.png" alt="img" />
      </div>
      <div className="container">
        <div className="title-area style2 common-style-for-title">
          <div>
            <div className="">
              <div className="text-xxl-end text-xl-end text-lg-end text-start">
                <span className="sub-title style2 after-none before-none" data-cue="slideInUp">
                  {subtitle}
                </span>
                <h2
                  className="sec-title style3 style7 mb-0"
                  data-cue="slideInUp"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              </div>
            </div>
            <div>
              <div className="title-area-right text-start" data-cue="slideInUp">
                <p className="mb-0">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <ServiceGrid services={services} />
      </div>
    </section>
  );
}
