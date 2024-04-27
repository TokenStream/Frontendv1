import { lazy } from "react";

const Home = lazy(() => import("../pages/guest/index"));

//user routes
const UserDashboard = lazy(() => import("../pages/user/index"));
const Services = lazy(() => import("../pages/user/Services"));

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
