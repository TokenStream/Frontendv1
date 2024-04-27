import { lazy } from "react";

const Home = lazy(() => import("../pages/guest/index"));

//user routes
const UserDashboard = lazy(() => import("../pages/user/index"));
const Services = lazy(() => import("../pages/user/Services"));
const CreateSalaryStream = lazy(
  () => import("../pages/user/CreateSalaryStream")
);
const UpdateSalaryStream = lazy(
  () => import("../pages/user/UpdateSalaryStream")
);
const CreateSubscription = lazy(
  () => import("../pages/user/CreateSubscription")
);
const UpdateSubscription = lazy(
  () => import("../pages/user/UpdateSubscription")
);

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

const userRoutes: coreRoutes = [
  {
    path: "/user",
    title: "User Dashboard",
    component: UserDashboard,
  },
  {
    path: "/user/services",
    title: "Services",
    component: Services,
  },
  {
    path: "/user/createsubscription",
    title: "Create Subscription",
    component: CreateSubscription,
  },
  {
    path: "/user/updatesubscription",
    title: "Update Subscription",
    component: UpdateSubscription,
  },
  {
    path: "/user/createsalarystream",
    title: "Create Salary Stream",
    component: CreateSalaryStream,
  },
  {
    path: "/user/updatesalarystream",
    title: "Update Salary Stream",
    component: UpdateSalaryStream,
  },
];
export const user_routes = [...userRoutes];

const adminRoutes: coreRoutes = [
  {
    path: "/admin",
    title: "Admin Dashboard",
    component: AdminDashboard,
  },
];
export const admin_routes = [...adminRoutes];
