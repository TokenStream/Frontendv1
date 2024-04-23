import { lazy } from "react";

const Home = lazy(() => import("../pages/guest/index"));

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

const routes = [...guestRoutes];
export default routes;
