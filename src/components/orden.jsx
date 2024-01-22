import React from 'react';

const OrdenDelDia = () => {
  const agendaDelDia = [
    {
      fecha: 'Agenda 24 Enero⚡',
      puntos: [
        {
          titulo: 'Seguimiento a compromisos',
          horaInicio: '08:30 a.m.',
          horaFinal: '9:30 a.m.',
          responsable: 'Responsable de cada compromiso.'
        },
        {
          titulo: 'Break I',
          horaInicio: '9:31 a.m.',
          horaFinal: '09:45 a.m.',
          responsable: 'Brindado por Gerencia'
        },
        {
          titulo: 'Seguimiento a compromisos',
          horaInicio: '9:45 a.m.',
          horaFinal: '10:30 a.m.',
          responsable: 'Responsable de cada compromiso.'
        },
        {
          titulo: 'Estado de avance de proyectos estratégicos',
          horaInicio: '10:31 a.m.',
          horaFinal: '12:00 p.m.',
          responsable: 'Project Managers de cada proyecto.'
        },
        {
          titulo: 'Almuerzo',
          horaInicio: '12:01 p.m.',
          horaFinal: '01:00 p.m.',
          responsable: 'Almuerzo Libre'
        },
        {
          titulo: 'Revisión indicadores y POAS',
          horaInicio: '1:01 p.m.',
          horaFinal: '4:00 p.m.',
          responsable: 'Tecnología, Desarrollo Humano, Proyectos'
        },
        {
          titulo: 'Break II',
          horaInicio: '04:00 p.m.',
          horaFinal: '04:15 p.m.',
          responsable: 'Brindado por Gerencia'
        },
        {
          titulo: 'Revisión indicadores y POAS ',
          horaInicio: '04:15 p.m.',
          horaFinal: '05:30 p.m.',
          responsable: 'Jurídica, Comités i+d'
        }
      ]
    },
    {
      fecha: 'Agenda 25 Enero ⚡',
        
      puntos: [
        {
          titulo: 'Revisión indicadores y POAS',
          horaInicio: '08:30 a.m.',
          horaFinal: '09:30 a.m.',
          responsable: 'SGI'
        },
        {
          titulo: 'Break I',
          horaInicio: '09:31 a.m.',
          horaFinal: '09:45 a.m.',
          responsable: 'Brindado por Gerencia'
        },
        {
          titulo: 'Revisión indicadores y POAS',
          horaInicio: '09:46 a.m.',
          horaFinal: '12:30 p.m.',
          responsable: 'Operaciones, Mercadeo'
        },

   {
          titulo: 'Revisión indicadores y POAS',
          horaInicio: '1:01 p.m.',
          horaFinal: '4:00 p.m.',
          responsable: 'GAF, Dinamico, Comercial'
        },
    
        {
          titulo: 'Cierre con Gerencia',
          horaInicio: '04:01 p.m.',
          horaFinal: '05:30 p.m.',
          responsable: 'Únicamente Gerentes y directores de áreas'
        }
      ]
    }
  ];

  return (
    <main>
      {agendaDelDia.map((item, index) => (
        <div className="orden-del-dia" key={index}>
          <h2>{item.fecha}</h2>
          <ul>
            {item.puntos.map((punto, puntoIndex) => (
              <li key={puntoIndex}>
                <strong>{punto.titulo}</strong>
                <br />
                Hora de inicio: {punto.horaInicio} 
                <br />
                Responsables: {punto.responsable}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
};

export default OrdenDelDia;
