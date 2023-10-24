import React from 'react';

const OrdenDelDia = () => {
  const agendaDelDia = [
    {
      fecha: '01 DE NOVIEMBRE',
      puntos: [
        {
          titulo: 'Seguimiento a compromisos del comité del primer trimestre',
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
          titulo: 'Seguimiento a compromisos del comité del primer trimestre',
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
          titulo: 'Revisión de resultados de indicadores y POAS que aplican al corte Septiembre 2023 - parte 1',
          horaInicio: '1:01 p.m.',
          horaFinal: '3:30 p.m.',
          responsable: 'Gerentes, Directores y Coordinadores de las áreas.'
        },
        {
          titulo: 'Break II',
          horaInicio: '03:31 p.m.',
          horaFinal: '03:45 p.m.',
          responsable: 'Brindado por Gerencia'
        },
        {
          titulo: 'Revisión de resultados de indicadores Y POAS que aplican al corte Septiembre 2023 - parte 2',
          horaInicio: '03:46 p.m.',
          horaFinal: '05:30 p.m.',
          responsable: 'Gerentes, Directores y Coordinadores de las áreas.'
        }
      ]
    },
    {
      fecha: '02 DE NOVIEMBRE',
      puntos: [
        {
          titulo: 'Revisión de resultados de indicadores Y POAS que aplican al corte Septiembre 2023 - parte 3',
          horaInicio: '08:30 a.m.',
          horaFinal: '10:15 a.m.',
          responsable: 'Gerentes, Directores y Coordinadores de las áreas.'
        },
        {
          titulo: 'Break I',
          horaInicio: '10:16 a.m.',
          horaFinal: '10:30 a.m.',
          responsable: 'Brindado por Gerencia'
        },
        {
          titulo: 'Revisión de resultados de indicadores Y POAS que aplican al corte Septiembre 2023 - parte 3',
          horaInicio: '10:31 a.m.',
          horaFinal: '12:30 p.m.',
          responsable: 'Responsable de cada compromiso.'
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
