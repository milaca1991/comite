import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Glosario from "./components/glosario";
import OrdenDelDia from "./components/orden";
import HamburgerMenu from "./components/menu";
import Footer from "./components/footer";
import Bienvenida from "./components/inicio";
import Apoyo from "./components/apoyo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='div1'>
        <HamburgerMenu></HamburgerMenu>
      </div>

      <header className='inicio'>
        <Bienvenida></Bienvenida>
      </header>
      <main>
        <OrdenDelDia></OrdenDelDia>
        <Glosario></Glosario>
      <Apoyo></Apoyo>
      </main>

      <Footer></Footer>
    </>
  );
}

export default App;
