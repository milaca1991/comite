import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Puedes usar react-scroll para un desplazamiento suave a las secciones

function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
        <div className="mobile-menu">
        <button className="menu-toggle" onClick={toggleMenu}>
        ︾
        </button>
        {isOpen && (
            <ul className="menu-items">
            

            <li>
                    <Link
                        to="orden-del-dia" // Reemplaza con el ID de la sección "Orden"
                        smooth={true}
                        duration={500}
                    >
                        Agenda del día
                    </Link>
                </li>
                <li>
                    <Link
                        to="glosario" // Reemplaza con el ID de la sección "Glosario"
                        smooth={true}
                        duration={500}
                    >
                        Glosario
                    </Link>
                </li>
           
                <li>
                    <Link
                        to="footer" // Reemplaza con el ID de la sección "Orden"
                        smooth={true}
                        duration={500}
                    >
                        Footer
                    </Link>
                </li>


            </ul>
        )}
    </div>

  );
}

export default HamburgerMenu;
