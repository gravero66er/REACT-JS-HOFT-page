import "./App.scss";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import BurgerMenu from "./components/menu/burger__menu";
import About from "./pages/about";
import Advantages from "./pages/advantages";
import Contacts from "./pages/contacts";
import Partners from "./pages/partners";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <BurgerMenu />
      <About />
      <Advantages />
      <Partners />
      <Contacts />
      <Footer />

    </div>
  );
}

export default App;
