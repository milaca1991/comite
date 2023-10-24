import React from 'react';

const OrdenDelDia = () => {
  const agendaDelDia = [
    {
      fecha: 'Agenda 1 Nov⚡',
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
          titulo: 'Revisión indicadores y POAS al corte Q3',
          horaInicio: '1:01 p.m.',
          horaFinal: '3:30 p.m.',
          responsable: 'Tecnología, Desarrollo Humano, Proyectos'
        },
        {
          titulo: 'Break II',
          horaInicio: '03:31 p.m.',
          horaFinal: '03:45 p.m.',
          responsable: 'Brindado por Gerencia'
        },
        {
          titulo: 'Revisión indicadores y POAS al corte Q3',
          horaInicio: '03:46 p.m.',
          horaFinal: '05:30 p.m.',
          responsable: 'Jurídica, Comités i+d, SGI'
        }
      ]
    },
    {
      fecha: 'Agenda 2 Nov ⚡',
      puntos: [
        {
          titulo: 'Revisión indicadores y POAS al corte Q3',
          horaInicio: '08:30 a.m.',
          horaFinal: '10:15 a.m.',
          responsable: 'Operaciones, Mercadeo, GAF'
        },
        {
          titulo: 'Break I',
          horaInicio: '10:16 a.m.',
          horaFinal: '10:30 a.m.',
          responsable: 'Brindado por Gerencia'
        },
        {
          titulo: 'Revisión indicadores y POAS al corte Q3',
          horaInicio: '10:31 a.m.',
          horaFinal: '12:30 p.m.',
          responsable: 'Dinámico, Comercial'
        },
        {
          titulo: 'Reunión con Gerencia',
          horaInicio: '01:30 p.m.',
          horaFinal: '',
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
