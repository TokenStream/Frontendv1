import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import Preloader from "./utils/Preloader";
import ScrollToTopButton from "./utils/ScrollToTopButton";
import PageNotFound from "./utils/PageNotFound";
import { ToastContainer } from 'react-toastify';
//react-toastify css
import 'react-toastify/dist/ReactToastify.css';

import { lazy } from "react";
import { guest_routes, user_routes } from "./routes";
import UserLayout from "./layouts/UserLayout";
import { configWeb3Modal } from "./connection";
const Signup = lazy(() => import("./pages/auth/index"));


//web3 Modal configuration function call
configWeb3Modal();

const App = () => {

  return (
    <main className='w-full min-h-screen bg-gray-950' id="heroPattern">
      <ScrollToTop />
      <Suspense fallback={<Preloader />}>
        <Routes>
          {guest_routes.map(({ path, component: Component }, index) => (
            <Route key={index} index={path === "/"} path={path} element={<Component />} />
          ))}
          <Route path='/signup' element={<Signup />} />
          <Route path="/user" element={<UserLayout />}>
            {
              user_routes.map(({ path, component: Component }, index) => (
                <Route key={index} index={path === "/user"} path={path} element={<Component />} />
              ))
            }
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <ScrollToTopButton />
      <ToastContainer />
    </main>
  );
}

export default App
