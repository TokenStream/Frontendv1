type NavObject = {
  name: string;
  path: string;
};

type NavArray = NavObject[];

export const NavLinks: NavArray = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "About Us",
    path: "about",
  },
  {
    name: "Services",
    path: "services",
  },
  {
    name: "FAQs",
    path: "faqs",
  },
  {
    name: "Contact Us",
    path: "contact",
  },
];

export const OtherLinks: NavArray = [
  {
    name: "News",
    path: "/",
  },
  {
    name: "Team",
    path: "/",
  },
  {
    name: "API Docs",
    path: "/",
  },
];

export const LegalLinks: NavArray = [
  {
    name: "Privacy Policy",
    path: "/",
  },
  {
    name: "Terms & Conditions",
    path: "/",
  },
  {
    name: "Disclaimer",
    path: "/",
  },
];
