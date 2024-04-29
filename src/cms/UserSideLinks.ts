export const NavLinks = [
  {
    name: "Dashboard",
    url: "/user",
  },
  {
    name: "Services",
    url: "/user/services",
  },
  {
    name: "Subscriptions",
    subLinks: [
      {
        name: "Create Subscription",
        url: "/user/createsubscription",
      },
      {
        name: "Update Subscription",
        url: "/user/updatesubscription",
      },
    ],
  },
  {
    name: "Salary Streaming",
    subLinks: [
      {
        name: "Create Salary Stream",
        url: "/user/createsalarystream",
      },
      {
        name: "Update Salary Stream",
        url: "/user/updatesalarystream",
      },
    ],
  },
  {
    name: "Staking/Reward",
    subLinks: [
      {
        name: "Create Pool",
        url: "/user/createpool",
      },
      {
        name: "Start Staking",
        url: "/user/startstaking",
      },
      {
        name: "View Stakings",
        url: "/user/viewstakings",
      },
    ],
  },
];
