type NavObject = {
  name: string;
  path: string;
};

type NavArray = NavObject[];

export const NavLinks: NavArray = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
  {
    name: "FAQs",
    path: "/faqs",
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
