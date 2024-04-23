import { Suspense } from "react";
import NavBar from "./components/shared/NavBar";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import ScrollToTop from "./utils/ScrollToTop";
import Footer from "./components/shared/Footer";
import Preloader from "./utils/Preloader";
import ScrollToTopButton from "./utils/ScrollToTopButton";
import PageNotFound from "./utils/PageNotFound";




const App = () => {

  return (
    <main className='w-full min-h-screen bg-gray-950' id="heroPattern">
      <NavBar />
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
      <Footer />
    </main>
  );
}

export default App
