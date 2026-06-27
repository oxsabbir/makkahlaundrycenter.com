const whatsappNumber = "966569385700";

const whatsappLink = (service) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hi Makkah Laundry Center! I'd like to inquire about your ${service} service. Please share details and a preferred pickup time.`,
  )}`;

export const laundryServices = [
  {
    title: "Premium Dry Cleaning",
    description:
      "Specialized cleaning for delicate and high-value garments using gentle, advanced care methods.",
    image: "/assets/img/service/dry-clean.webp",
    icon: "/assets/img/icon/service/service_icon_1_1.svg",
  },
  {
    title: "Ironing And Pressing",
    description:
      "Careful, crease-free finishing with precise temperature control for fabric safety.",
    image: "/assets/img/service/iron-pressing.webp",
    icon: "/assets/img/icon/service/service_icon_1_2.svg",
  },
  {
    title: "Wash & Fold Service",
    description:
      "Your garments are cleaned with gentle detergents, carefully dried, and neatly folded.",
    image: "/assets/img/service/fold-and-wash.webp",
    icon: "/assets/img/icon/service/service_icon_1_3.svg",
  },
  {
    title: "Stain Removal",
    description:
      "Specialized stain treatment and fabric protection designed to refresh garments and preserve quality.",
    image: "/assets/img/service/stain-removal.webp",
    icon: "/assets/img/icon/service/service_icon_1_4.svg",
  },
  {
    title: "Ihram Cleaning & Care",
    description:
      "Perfume-free, gentle cleaning tailored for Ihram garments to maintain purity, comfort, and softness.",
    image: "/assets/img/service/ihram-clean.webp",
    icon: "/assets/img/icon/service/service_icon_1_5.svg",
  },
  {
    title: "Pickup & Delivery Service",
    description:
      "Easy doorstep collection and drop-off throughout Makkah, designed for speed and reliability.",
    image: "/assets/img/service/urgent-delivery.webp",
    icon: "/assets/img/icon/service/service_icon_1_6.svg",
  },
].map((service) => ({ ...service, href: whatsappLink(service.title) }));

export const generalServices = [
  "General Plumbing Repairs",
  "Drain Cleaning Services",
  "Bathroom & Kitchen Plumbing",
  "Water Heater Installation",
  "Pipe Repair & Replacement",
  "Gas Line Repair & Plumbing",
].map((title, index) => ({
  title,
  description:
    "Fast, reliable service delivered by trained professionals with long-lasting results.",
  image: `/assets/img/service/service_card_1_${index === 0 ? "01" : index + 1}.jpg`,
  icon: `/assets/img/icon/service/service_icon_1_${index + 1}.svg`,
  href: "/services/details",
}));
