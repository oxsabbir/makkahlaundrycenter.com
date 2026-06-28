import { lazy } from "react";

const page = (name) => lazy(() => import(`../pages/${name}.jsx`));

const HomePage = page("HomePage");
const AboutPage = page("AboutPage");
const ServicesPage = page("ServicesPage");
const FaqPage = page("FaqPage");
const TestimonialsPage = page("TestimonialsPage");
const ContactPage = page("ContactPage");
const PrivacyPolicyPage = page("PrivacyPolicyPage");
const TermsConditionsPage = page("TermsConditionsPage");
const NotFoundPage = page("NotFoundPage");

export const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/services", element: <ServicesPage /> },
  { path: "/faq", element: <FaqPage /> },
  { path: "/testimonials", element: <TestimonialsPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/privacy-policy", element: <PrivacyPolicyPage /> },
  { path: "/terms-conditions", element: <TermsConditionsPage /> },
  { path: "*", element: <NotFoundPage /> },
];
