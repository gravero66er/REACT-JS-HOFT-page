import "./App.scss";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import BurgerMenu from "./components/menu/burger__menu";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <BurgerMenu />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
