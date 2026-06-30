import PageLayout from "../components/layout/PageLayout";
import Breadcrumb from "../components/layout/Breadcrumb";

export default function NotFoundPage() {
  return (
    <PageLayout
      title="404 - Makkah Laundry Center"
      description="Page not found - Makkah Laundry Center"
    >
      <div className="react-fragment">
        <Breadcrumb
          title="Page Not Found"
          items={[{ label: "Home", href: "/" }, { label: "Page Not Found" }]}
          bgImg="/assets/img/bg/breadcum-bg.webp"
          animation={false}
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
                <h2 className="page-title fw-bold mt-n2 mb-20">
                  Opp’s That Page Can’t be Found
                </h2>
                <p className="error-text mb-30">
                  It looks like nothing was found at this location. Maybe try
                  one of the links below or a search?
                </p>
                <a href="/" className="th-btn">
                  Back To Home
                  <span className="after-bg" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*==============================
	Footer Area
==============================*/}
      </div>
    </PageLayout>
  );
}
