// background
import { lazy, Suspense } from "react";

const ParticlesComponent = lazy(() =>
  import("./Components/Background/particles")
);

//Components
import Header from "./Components/Header/Header";
import Home from "./Components/home/home";
import Products from "./Components/Products/Products";
import Footer from "./Components/Footer/Footer";

// Styles
import "./Styles/global.css";

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <ParticlesComponent id="particles" />
      </Suspense>
      <Header />
      <Home />
      <Products />
      <Footer />
    </>
  );
}

export default App;
