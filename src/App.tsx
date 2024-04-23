import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import ScrollToTop from "./utils/ScrollToTop";
import Preloader from "./utils/Preloader";
import ScrollToTopButton from "./utils/ScrollToTopButton";
import PageNotFound from "./utils/PageNotFound";
import { ToastContainer } from 'react-toastify';
//react-toastify css
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <main className='w-full min-h-screen bg-gray-950' id="heroPattern">
      <ScrollToTop />
      <Suspense fallback={<Preloader />}>
        <Routes>
          {routes.map(({ path, component: Component }, index) => (
            <Route key={index} index={path === "/"} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <ScrollToTopButton />
      <ToastContainer />
    </main>
  );
}

export default App
