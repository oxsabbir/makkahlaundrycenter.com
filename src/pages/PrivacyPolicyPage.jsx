import PageLayout from "../components/layout/PageLayout";
import Breadcrumb from "../components/layout/Breadcrumb";

export default function PrivacyPolicyPage() {
  return (
    <PageLayout
      title="Privacy Policy - Makkah Laundry Center"
      description="Privacy Policy for Makkah Laundry Center. Learn how we collect, use, and protect your personal information."
    >
      <div className="react-fragment">
        <Breadcrumb
          title="Privacy Policy"
          items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
          animation={false}
        />
        <section className="space">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="privacy-content">
                  <h4>Introduction</h4>
                  <p>
                    Makkah Laundry Center ("we," "our," or "us") is committed to
                    protecting your privacy. This Privacy Policy explains how we
                    collect, use, disclose, and safeguard your personal
                    information when you visit our website or use our laundry
                    services.
                  </p>

                  <h4>Information We Collect</h4>
                  <p>
                    We may collect the following types of information when you
                    use our services:
                  </p>
                  <ul>
                    <li>
                      <strong>Personal Identification Information:</strong>{" "}
                      Name, phone number, email address, and delivery address.
                    </li>
                    <li>
                      <strong>Service Information:</strong> Details about your
                      laundry requests, pickup schedules, and delivery
                      preferences.
                    </li>
                    <li>
                      <strong>Payment Information:</strong> Payment details
                      processed securely through our payment partners. We do not
                      store your full payment card details.
                    </li>
                    <li>
                      <strong>Communication Data:</strong> Records of your
                      communications with us via WhatsApp, phone, email, or
                      contact forms.
                    </li>
                    <li>
                      <strong>Technical Data:</strong> IP address, browser type,
                      device information, and usage data collected through
                      cookies and similar technologies.
                    </li>
                  </ul>

                  <h4>How We Use Your Information</h4>
                  <p>We use the collected information for the following purposes:</p>
                  <ul>
                    <li>To provide and manage our laundry and dry cleaning services.</li>
                    <li>To schedule pickups and deliveries.</li>
                    <li>To process payments and send invoices.</li>
                    <li>To communicate with you about your orders and inquiries.</li>
                    <li>To improve our website and service quality.</li>
                    <li>To send promotional offers and updates (with your consent).</li>
                    <li>To comply with legal obligations.</li>
                  </ul>

                  <h4>Data Sharing and Disclosure</h4>
                  <p>
                    We do not sell your personal information to third parties. We
                    may share your information only in the following circumstances:
                  </p>
                  <ul>
                    <li>
                      <strong>Service Providers:</strong> With trusted third-party
                      vendors who assist us in operating our business (payment
                      processors, delivery partners, IT services).
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> When required by law or
                      to protect our legal rights.
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> In connection with a
                      merger, acquisition, or sale of assets.
                    </li>
                  </ul>

                  <h4>Data Security</h4>
                  <p>
                    We implement appropriate technical and organizational
                    measures to protect your personal information against
                    unauthorized access, alteration, disclosure, or destruction.
                    However, no method of transmission over the Internet is
                    completely secure, and we cannot guarantee absolute security.
                  </p>

                  <h4>Your Rights</h4>
                  <p>Depending on your jurisdiction, you may have the following rights:</p>
                  <ul>
                    <li>The right to access your personal data.</li>
                    <li>The right to rectify inaccurate data.</li>
                    <li>The right to request deletion of your data.</li>
                    <li>The right to restrict or object to processing.</li>
                    <li>The right to data portability.</li>
                    <li>The right to withdraw consent at any time.</li>
                  </ul>
                  <p>
                    To exercise any of these rights, please contact us using the
                    information below.
                  </p>

                  <h4>Cookies</h4>
                  <p>
                    Our website uses cookies to enhance your browsing experience.
                    You can control cookie preferences through your browser
                    settings. For more information, please refer to our Cookie
                    Policy.
                  </p>

                  <h4>Third-Party Links</h4>
                  <p>
                    Our website may contain links to third-party websites. We are
                    not responsible for the privacy practices or content of such
                    external sites. We encourage you to review their privacy
                    policies before providing any personal information.
                  </p>

                  <h4>Changes to This Privacy Policy</h4>
                  <p>
                    We may update this Privacy Policy from time to time. Any
                    changes will be posted on this page with an updated effective
                    date. We encourage you to review this policy periodically.
                  </p>

                  <h4>Contact Us</h4>
                  <p>
                    If you have any questions, concerns, or requests regarding
                    this Privacy Policy or our data practices, please contact us:
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
                      <a href="https://wa.me/966569385700">
                        +966 56 938 5700
                      </a>
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
