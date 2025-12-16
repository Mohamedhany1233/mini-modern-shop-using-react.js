// background
import ParticlesComponent from "./Components/Background/particles";

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
      <ParticlesComponent id="particles" />
      <Header />
      <Home />
      <Products />
      <Footer />
    </>
  );
}

export default App;
