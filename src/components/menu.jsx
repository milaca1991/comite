import React, { useState } from "react";
import { Link } from "react-scroll";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar">
      <div className="nav_logo"> CONTENIDO </div>
      <div className={`nav_items ${isOpen && "open"}`}>
      <Link
          to="inicio" 
          onClick={handleCloseMenu}// Reemplaza con el ID de la sección "Orden"
          smooth={true}
          duration={500}
        >
          Inicio
        </Link>
        
        
        <Link
          to="orden-del-dia" // Reemplaza con el ID de la sección "Orden"
          onClick={handleCloseMenu}
          smooth={true}
          duration={500}
        >
          Agenda del día
        </Link>
        <Link
          to="glosario" // Reemplaza con el ID de la sección "Glosario"
          onClick={handleCloseMenu}
          smooth={true}
          duration={500}
        >
          Glosario
        </Link>
        <Link
          to="footer" // Reemplaza con el ID de la sección "Orden"
          onClick={handleCloseMenu}
          smooth={true}
          duration={500}
        >
          Footer
        </Link>
      </div>
      <div
        className={`nav_toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default HamburgerMenu;
