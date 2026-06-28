import PageLayout from "../components/layout/PageLayout";
import Breadcrumb from "../components/layout/Breadcrumb";

export default function TermsConditionsPage() {
  return (
    <PageLayout
      title="Terms and Conditions - Makkah Laundry Center"
      description="Terms and Conditions for Makkah Laundry Center. Please read these terms carefully before using our services."
    >
      <div className="react-fragment">
        <Breadcrumb
          title="Terms & Conditions"
          items={[
            { label: "Home", href: "/" },
            { label: "Terms & Conditions" },
          ]}
          bgImg="/assets/img/bg/breadcum-bg.webp"
          animation={false}
        />
        <section className="space">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="privacy-content">
                  <h4>Acceptance of Terms</h4>
                  <p>
                    By accessing or using the services provided by Makkah
                    Laundry Center ("we," "our," or "us"), you agree to be bound
                    by these Terms and Conditions. If you do not agree with any
                    part of these terms, you should not use our services.
                  </p>

                  <h4>Services Offered</h4>
                  <p>
                    We provide laundry, dry cleaning, ironing, stain removal,
                    and related garment care services with free pickup and
                    delivery in Makkah, Saudi Arabia. All services are subject
                    to availability and may be modified or discontinued at any
                    time without prior notice.
                  </p>

                  <h4>Booking and Scheduling</h4>
                  <ul>
                    <li>
                      Bookings can be made via WhatsApp, phone call, or our
                      website contact form.
                    </li>
                    <li>
                      We strive to accommodate all pickup and delivery requests
                      within our operating hours.
                    </li>
                    <li>
                      Customers are responsible for ensuring that someone is
                      available at the designated location during the scheduled
                      pickup or delivery window.
                    </li>
                  </ul>

                  <h4>Pricing and Payment</h4>
                  <ul>
                    <li>
                      All prices are listed in Saudi Riyal (SAR) and are subject
                      to change without prior notice.
                    </li>
                    <li>
                      Payment is due upon delivery unless otherwise agreed in
                      writing.
                    </li>
                    <li>
                      We accept cash, bank transfers, and digital payment
                      methods.
                    </li>
                    <li>
                      Promotional offers and discounts cannot be combined unless
                      explicitly stated.
                    </li>
                  </ul>

                  <h4>Pickup and Delivery</h4>
                  <ul>
                    <li>
                      Free pickup and delivery is available within designated
                      areas of Makkah.
                    </li>
                    <li>
                      We are not responsible for delays caused by traffic,
                      weather conditions, or circumstances beyond our control.
                    </li>
                    <li>
                      Customers must ensure that all items are properly bagged
                      and accessible at the time of pickup.
                    </li>
                  </ul>

                  <h4>Liability and Claims</h4>
                  <ul>
                    <li>
                      While we take the utmost care in handling your garments,
                      we recommend that you notify us of any special
                      instructions or pre-existing damages before processing.
                    </li>
                    <li>
                      Any claims regarding lost or damaged items must be
                      reported within 24 hours of delivery.
                    </li>
                    <li>
                      Our liability is limited to the value of the service
                      provided for the specific item in question.
                    </li>
                    <li>
                      We are not liable for items left in pockets, buttons lost
                      due to normal wear, or color fading in non-colorfast
                      fabrics.
                    </li>
                  </ul>

                  <h4>Customer Responsibilities</h4>
                  <ul>
                    <li>
                      Customers must ensure that pockets are emptied before
                      handing over garments.
                    </li>
                    <li>
                      Items requiring special care must be clearly communicated
                      at the time of pickup.
                    </li>
                    <li>
                      Customers should retain their receipt or order
                      confirmation for reference.
                    </li>
                  </ul>

                  <h4>Cancellation and Refund Policy</h4>
                  <ul>
                    <li>Orders can be cancelled before pickup at no charge.</li>
                    <li>
                      Once items have been processed, standard service charges
                      apply.
                    </li>
                    <li>
                      Refunds are issued at our discretion based on the nature
                      of the issue reported.
                    </li>
                  </ul>

                  <h4>Prohibited Items</h4>
                  <p>We reserve the right to refuse service for items that:</p>
                  <ul>
                    <li>Are heavily soiled with hazardous materials.</li>
                    <li>Contain sharp objects that may damage equipment.</li>
                    <li>Are not suitable for standard cleaning processes.</li>
                  </ul>

                  <h4>Modifications to Terms</h4>
                  <p>
                    We reserve the right to update or modify these Terms and
                    Conditions at any time. Changes will be effective
                    immediately upon posting on this page. Continued use of our
                    services after any changes constitutes acceptance of the new
                    terms.
                  </p>

                  <h4>Contact Information</h4>
                  <p>
                    If you have any questions or concerns regarding these Terms
                    and Conditions, please contact us:
                  </p>
                  <ul>
                    <li>
                      <strong>Email:</strong>{" "}
                      <a href="mailto:info@makkahlaundrycenter.com">
                        info@makkahlaundrycenter.com
                      </a>
                    </li>
                    <li>
                      <strong>WhatsApp:</strong>{" "}
                      <a href="https://wa.me/966569385700">+966 56 938 5700</a>
                    </li>
                    <li>
                      <strong>Address:</strong> Al Naseem District, Makkah,
                      Saudi Arabia
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
