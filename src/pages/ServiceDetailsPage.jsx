import PageLayout from "../components/layout/PageLayout";
import Breadcrumb from "../components/layout/Breadcrumb";

export default function ServiceDetailsPage() {
  return (
    <PageLayout
      title="Shared on THEMELOCK.COM - Pamar - Plumbing & Repair Service HTML Template - Service Single"
      description="Pamar - Plumbing & Repair Service HTML Template"
    >
<div className="react-fragment">
        <Breadcrumb
          title="Service Details"
          items={[{ label: "Home", href: "/" }, { label: "Services" }]}
        />
  <section className="space-top space-extra-bottom">
    <div className="container">
      <div className="row gx-60">
        <div className="col-xl-8 col-lg-7 order-lg-2 order-1">
          <div className="page-single">
            <div className="page-img gsap-parallax mb-35">
              <img src="/assets/img/service/service-s-1-1.jpg" alt="Service Image" />
            </div>
            <h4 className="mt-n2 mb-20">General Plumbing Repairs</h4>
            <p className="mb-0">From leaky faucets to running toilets, we handle all types of plumbing repairs. Whether it’s a small repair or a major installation, our team of licensed and experienced plumbers is committed to getting the job done right — the first time. We use modern tools and techniques to diagnose and fix problems quickly, ensuring long-lasting solutions with minimal disruption to your home or business. With transparent pricing, fast response times, and 24/7 emergency availability, we’re always here when you need us.</p>
            <p className="mb-25">Our customer-first approach means we treat every job with care, cleanliness, and professionalism. When you choose us, you're choosing plumbing done with integrity, efficiency, and peace of mind. When it comes to plumbing, you need more than just a quick fix — you need a team you can trust. At [Your Company Name], we bring years of experience, professional expertise,</p>
            <div className="page-img-wrap mt-40">
              <div className="row">
                <div className="col-md-6">
                  <div className="page-img radius-20">
                    <img src="/assets/img/service/service-s-1-2.jpg" alt="img" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="page-img radius-20">
                    <img src="/assets/img/service/service-s-1-3.jpg" alt="img" />
                  </div>
                </div>
              </div>
            </div>
            <p className="mb-25">From leaky faucets to running toilets, we handle all types of plumbing repairs. Whether it’s a small repair or a major installation, our team of licensed and experienced plumbers is committed to getting the job done right — the first time. We use modern tools and techniques to diagnose and fix problems quickly, ensuring long-lasting solutions with minimal disruption to your home or business. With transparent pricing, fast response times, and 24/7 emergency availability, we’re always here when you need us.</p>
            <h4 className="mt-n2 mb-20">Work Process</h4>
            <div className="service-page-card-wrap mb-60">
              <div className="row gy-4">
                <div className="col-sm-6">
                  <div className="service-page-card">
                    <div className="box-icon">
                      <img src="/assets/img/icon/service/service_icon_4_1.svg" alt />
                    </div>
                    <div className="box-content">
                      <h4 className="box-title">Cleaning</h4>
                      <p className="box-text">Interactively predominate out-of the box best practices.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="service-page-card">
                    <div className="box-icon">
                      <img src="/assets/img/icon/service/service_icon_4_2.svg" alt />
                    </div>
                    <div className="box-content">
                      <h4 className="box-title">Cleaning</h4>
                      <p className="box-text">Interactively predominate out-of the box best practices.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="service-page-card">
                    <div className="box-icon">
                      <img src="/assets/img/icon/service/service_icon_4_3.svg" alt />
                    </div>
                    <div className="box-content">
                      <h4 className="box-title">Cleaning</h4>
                      <p className="box-text">Interactively predominate out-of the box best practices.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="service-page-card">
                    <div className="box-icon">
                      <img src="/assets/img/icon/service/service_icon_4_4.svg" alt />
                    </div>
                    <div className="box-content">
                      <h4 className="box-title">Cleaning</h4>
                      <p className="box-text">Interactively predominate out-of the box best practices.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="box-text">Machine learning empowers participants to harness the power of data for informed decision-making. It enables the extraction of valuable insights, predictions, and patterns from data, facilitating better business strategies and problem-solving. Additionally, participants can automate labor-intensive tasks, increasing efficiency and productivity.</p>
          </div>
        </div>
        <div className="col-xl-4 col-lg-5 order-lg-1 order-2">
          <aside className="sidebar-area sidebar-sticky rounded-0 p-0 bg-transparent">
            <div className="widget widget_categories  ">
              <h3 className="widget_title">All Services</h3>
              <ul>
                <li>
                  <a href="/services/details">General Plumbing Repairs
                  </a>
                </li>
                <li>
                  <a href="/services/details">Water Heater Installation
                  </a>
                </li>
                <li>
                  <a href="/services/details">Drain Cleaning Services
                  </a>
                </li>
                <li>
                  <a href="/services/details">Kitchen Plumbing
                  </a>
                </li>
                <li>
                  <a href="/services/details">Pipe Repair &amp; Replacement
                  </a>
                </li>
              </ul>
            </div>
            <div className="widget widget_download style2  ">
              <h4 className="widget_title text-white">Download</h4>
              <div className="download-widget-wrap">
                <a href="/about" className="th-btn style17 mb-10">Our Brochures <span className="after-bg" /></a>
                <a href="/about" className="th-btn style17">Company Details <span className="after-bg" /></a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </section>
  {/*==============================
	Footer Area
==============================*/}</div>

    </PageLayout>
  );
}
