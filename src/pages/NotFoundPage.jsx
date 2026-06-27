import PageLayout from "../components/layout/PageLayout";
import Breadcrumb from "../components/layout/Breadcrumb";

export default function NotFoundPage() {
  return (
    <PageLayout
      title="Shared on THEMELOCK.COM - Pamar - Plumbing & Repair Service HTML Template - 404 Page"
      description="Pamar - Plumbing & Repair Service HTML Template"
    >
<div className="react-fragment">
        <Breadcrumb
          title="404(Error Page)"
          items={[{ label: "Home", href: "/" }, { label: "404" }]}
        />
{/*==============================
Error Area 
==============================*/}
  <section className="space position-relative overflow-hidden z-index-3">
    <div className="container">
      <div className="error-page-wrap">
        <div className="error-img">
          <img src="/assets/img/normal/error.png" alt="404 image" />
        </div>
        <div className="error-content">
          <h2 className="page-title fw-bold mt-n2 mb-20">Opp’s That Page Can’t be Found</h2>
          <p className="error-text mb-30">It looks like nothing was found at this location. Maybe try one of
            the links below or a search?</p>
          <a href="/" className="th-btn">
            Back To Home
            <span className="after-bg" />
          </a>
        </div>
      </div>
    </div>
    <div className="shape-mockup d-none d-xxl-inline" style={{top: '10%', left: '4%'}}>
      <img src="/assets/img/shape/bg-shape1.png" alt="img" />
    </div>
    <div className="shape-mockup d-none d-xxl-inline" style={{bottom: 0, right: '0%'}}>
      <img src="/assets/img/normal/faq-thumb1-1.png" alt="img" />
    </div>
  </section>
  {/*==============================
	Footer Area
==============================*/}</div>

    </PageLayout>
  );
}
