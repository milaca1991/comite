// Glosario.js
import React from 'react';

const Glosario = () => {
  const terminos = [
    { termino: 'Acción correctiva', definicion: 'Acción tomada para eliminar la causa de una no conformidad.' },
    { termino: 'Acción Preventiva', definicion: 'Acción para eliminar o mitigar la(s) causa(s) de una no conformidad potencial.' },
    { termino: 'ASCTel', definicion: 'Asignación para la Ciencia, Tecnología e Innovación del SGR.' },
    { termino: 'Cliente', definicion: 'Persona natural o jurídica que nos compró en los últimos 3 años.' },
    { termino: 'Corrección', definicion: 'La Acción para eliminar una No Conformidad detectada.' },
    { termino: 'Componentes tecnológicos', definicion: ' se refieren a los diversos elementos, dispositivos y sistemas utilizados en el ámbito de la tecnología de la información y la comunicación (TIC) que son fundamentales para el funcionamiento y la operación de infraestructuras tecnológicas. Estos componentes abarcan desde hardware, software, dispositivos de seguridad y redes.' },
    { termino: 'SGSI', definicion: 'Sistema de gestion de seguridad de la información.' },
    { termino: 'Engagement', definicion: 'Es el compromiso, conexión o sentido de pertenencia que un colaborador siente por la empresa.' },
    { termino: 'Estrategia', definicion: 'Es el diseño del plan de acción dentro de una empresa para el logro de sus objetivos y metas.' },
    { termino: 'IES', definicion: ' Canal dedicado a atender y generar ventas en el segmento de educación superior (Instituciones de educación superior).' },
    { termino: 'K12', definicion: 'Canal dedicado a atender y generar ventas en el segmento de educación que comprende primera infancia, básica y media.' },
    { termino: 'Lead', definicion: 'Usuario o institución de la base de datos de prospectos que ha demostrado interés en un producto o servicio, durante o después del evento.' },
    { termino: 'Marcas propias', definicion: 'Son marcas con las que tenemos un acuerdo(contrato) sea exclusivo o no.' },
    { termino: 'Marcas foco', definicion: ' Son marcas que por sus condiciones se han seleccionado para enfocarnos en las ventas.' },
    { termino: 'Mega', definicion: 'Es una meta empresarial grande y ambiciosa focalizada en una ventaja competitiva única.' },
    { termino: 'Misión', definicion: 'Formulación de los propósitos de una organización. Expresan su razón de ser.' },
    { termino: 'No conformidad', definicion: ' Incumplimiento de un requisito.' },
    { termino: 'Objetivo', definicion: 'Es un resultado deseado que se espera alcanzar.' },
    { termino: 'Pipeline', definicion: 'Es una representación secuencial y organizada de las etapas del proceso de ventas que la empresa sigue para ofrecer sus soluciones tecnológicas y de enseñanza a sus clientes. El pipeline de ventas de Electroequipos se basa en las etapas (Exploración, Interés, Evaluación, Decisión y Conversión). ' },
    { termino: 'Plan estratégico', definicion: 'Es un documento de actuación que consiste en aclarar lo que pretendemos conseguir y cómo nos proponemos conseguirlo.' },
    { termino: 'Planeación estratégica', definicion: 'Es el proceso administrativo que involucra la formulación y desarrollo de planes a largo plazo para guiar a una organización hacia el logro de sus objetivos y metas.' },  
    { termino: 'POA', definicion: 'Plan operativo anual, es un instrumento que recoge las acciones a ejecutar para dar cumplimiento a los objetivos.' },
    { termino: 'Producto no conforme', definicion: 'Corresponde a un producto o servicio que no cumple las caracteristicas determinadas por el cliente y que son detectadas despues de la entrega del producto, y/o durante o despues de la prestación de un servicio.' },
    { termino: 'Recompra', definicion: 'Compra hecha en el periodo por algún cliente.   ' },
    { termino: 'Reskilling', definicion: 'Hace referencia a la formación de un nuevo empleado para adaptarlo a un nuevo puesto en la empresa.' },
    { termino: 'Salida no conforme', definicion: 'Corresponde a un producto o servicio que no cumple las caracteristicas determinadas por el cliente, identificadas y controladas para prevenir su uso o entrega a cliente.' },
    { termino: 'SGR', definicion: 'Sistema general de regalías, mecanismo que garantiza la distribución equitativa de los ingresos que derivan de la explotación de los recursos naturales no renovables del país.' },
    { termino: 'Terceros', definicion: 'Hace referencia aquellas marcas que ofrecemos en nuestro portafolio y no cuentan con un contrato de representación.' },
    
    
    
    
    
    
    // Agrega más términos y definiciones según sea necesario
  ];

  return (
    <div className="glosario">
      <h2>Glosario ✌   </h2>
      <ul>
        {terminos.map((item, index) => (
          <li key={index}>
            <strong>{item.termino}:</strong> {item.definicion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Glosario;
