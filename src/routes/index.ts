import { lazy } from "react";

const Home = lazy(() => import("../pages/guest/index"));

//onboarding routes
const Setup = lazy(() => import("../pages/onboarding/index"));
const StakingForm = lazy(() => import("../pages/onboarding/StakingForm"));
const SalaryForm = lazy(() => import("../pages/onboarding/SalaryForm"));
const SubscriptionForm = lazy(
  () => import("../pages/onboarding/SubscriptionForm")
);

//user routes
const UserDashboard = lazy(() => import("../pages/user/index"));
//admin routes
const AdminDashboard = lazy(() => import("../pages/admin/index"));

type Route = {
  path: string;
  title: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
};
type coreRoutes = Route[];

const guestRoutes: coreRoutes = [
  {
    path: "/",
    title: "Home",
    component: Home,
  },
];

export const guest_routes = [...guestRoutes];

const onboardingRoutes: coreRoutes = [
  {
    path: "/onboarding",
    title: "Onboarding",
    component: Setup,
  },
  {
    path: "/onboarding/staking",
    title: "Staking",
    component: StakingForm,
  },
  {
    path: "/onboarding/salary",
    title: "Salary",
    component: SalaryForm,
  },
  {
    path: "/onboarding/subscription",
    title: "Subscription",
    component: SubscriptionForm,
  },
];
export const onboarding_routes = [...onboardingRoutes];

const userRoutes: coreRoutes = [
  {
    path: "/user-dashboard",
    title: "User Dashboard",
    component: UserDashboard,
  },
];
export const user_routes = [...userRoutes];

const adminRoutes: coreRoutes = [
  {
    path: "/admin-dashboard",
    title: "Admin Dashboard",
    component: AdminDashboard,
  },
];
export const admin_routes = [...adminRoutes];
