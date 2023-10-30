import React from "react";

function Bienvenida() {
  return (
    <>
      <div className="landing-page">
        <h1>Comité de Resultados</h1>

        <p>¡Te damos la bienvenida al Comité de Resultados! </p>

        <img
          src="/public/img/1.jpg"
          alt="imgInicio"
          className="imgInicio"
          style={{ width: "70%", height: "auto" }}
        />
      </div>
    </>
  );
}

export default Bienvenida;
