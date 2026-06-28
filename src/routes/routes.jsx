import { lazy } from "react";

const page = (name) => lazy(() => import(`../pages/${name}.jsx`));

const HomePage = page("HomePage");
const HomeOnePage = page("HomeOnePage");
const EmergencyHomePage = page("EmergencyHomePage");
const EmergencyOnePage = page("EmergencyOnePage");
const ResidentialHomePage = page("ResidentialHomePage");
const ResidentialOnePage = page("ResidentialOnePage");
const AboutPage = page("AboutPage");
const ServicesPage = page("ServicesPage");
const ServiceDetailsPage = page("ServiceDetailsPage");
const ProjectsPage = page("ProjectsPage");
const ProjectDetailsPage = page("ProjectDetailsPage");
const TeamPage = page("TeamPage");
const TeamDetailsPage = page("TeamDetailsPage");
const WorkPage = page("WorkPage");
const PricingPage = page("PricingPage");
const TestimonialsPage = page("TestimonialsPage");
const FaqPage = page("FaqPage");
const CostCalculationPage = page("CostCalculationPage");
const BlogPage = page("BlogPage");
const BlogDetailsPage = page("BlogDetailsPage");
const ShopPage = page("ShopPage");
const ShopDetailsPage = page("ShopDetailsPage");
const CartPage = page("CartPage");
const CheckoutPage = page("CheckoutPage");
const WishlistPage = page("WishlistPage");
const ContactPage = page("ContactPage");
const TypographyPage = page("TypographyPage");
const PrivacyPolicyPage = page("PrivacyPolicyPage");
const TermsConditionsPage = page("TermsConditionsPage");
const NotFoundPage = page("NotFoundPage");

export const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/home/general", element: <HomeOnePage /> },
  { path: "/home/emergency", element: <EmergencyHomePage /> },
  { path: "/home/emergency-one-page", element: <EmergencyOnePage /> },
  { path: "/home/residential", element: <ResidentialHomePage /> },
  { path: "/home/residential-one-page", element: <ResidentialOnePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/services", element: <ServicesPage /> },
  { path: "/services/details", element: <ServiceDetailsPage /> },
  { path: "/projects", element: <ProjectsPage /> },
  { path: "/projects/details", element: <ProjectDetailsPage /> },
  { path: "/team", element: <TeamPage /> },
  { path: "/team/details", element: <TeamDetailsPage /> },
  { path: "/work", element: <WorkPage /> },
  { path: "/pricing", element: <PricingPage /> },
  { path: "/testimonials", element: <TestimonialsPage /> },
  { path: "/faq", element: <FaqPage /> },
  { path: "/cost-calculation", element: <CostCalculationPage /> },
  { path: "/blog", element: <BlogPage /> },
  { path: "/blog/details", element: <BlogDetailsPage /> },
  { path: "/shop", element: <ShopPage /> },
  { path: "/shop/details", element: <ShopDetailsPage /> },
  { path: "/cart", element: <CartPage /> },
  { path: "/checkout", element: <CheckoutPage /> },
  { path: "/wishlist", element: <WishlistPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/typography", element: <TypographyPage /> },
  { path: "/privacy-policy", element: <PrivacyPolicyPage /> },
  { path: "/terms-conditions", element: <TermsConditionsPage /> },
  { path: "*", element: <NotFoundPage /> },
];
