import { Suspense } from "react";
import NavBar from "./components/shared/NavBar";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import ScrollToTop from "./utils/ScrollToTop";
import Footer from "./components/shared/Footer";




const App = () => {

  return (
    <main className='w-full min-h-screen' id="heroPattern">
      <NavBar />
      <ScrollToTop />
      <Suspense fallback={''}>
        <Routes>
          {routes.map(({ path, component: Component }, index) => (
            <Route key={index} index={path === "/"} path={path} element={<Component />} />
          ))}
        </Routes>
      </Suspense>
      <Footer />
    </main>
  );
}

export default App
