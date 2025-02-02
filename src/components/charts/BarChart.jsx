import React from 'react';
import zoomPlugin, { resetZoom } from 'chartjs-plugin-zoom';
import { ChartMenu } from './ChartMenu';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);


export const options = {
  responsive: true,
  maintainAspectRatio:false,
  
  // Esconder grid del eje x
  scales:{
    y:{
        grid:{
            display: false
        }
    },
    x:{
        grid:{
            display: false
        }
    }
  },

  plugins: {
    legend: {
      display: false,
    },

    tooltip:{

      // Generales del tooltip
      backgroundColor:'rgba(255, 255, 255, 1)',
      cornerRadius:'15',
      padding: 15,
      usePointStyle:true,
      borderWidth:'1',
      borderColor:'#ddd',
      
      // Titulo
      titleColor:'#333',
      titleFont: {
        weight: 'bold',
        size: '14'
      },
      titleAlign:'center',

      // Cuerpo
      bodyColor:'#333',


      
    
    },
    zoom: {
      pan: {
        enabled: true,
        mode: 'x',
        modifierKey: 'ctrl',
      },
      zoom: {
        mode: 'x',
        drag: {
          enabled: true,
          borderColor: '#ccc',
          borderWidth: 1,
          backgroundColor: 'rgba(238,238,238,0.7)'
        }
      }
    },
  },
};



const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];



export const data = {
  labels,
  datasets: [
    {
      label: 'Digital',
      data: [150, 200, 180, 220, 170, 190, 70],

      backgroundColor: '#4963E3', /* #497AEB  <- mas azul */
      //Cambiar grosor de las barras
      barPercentage:0.5,
      // Para que la parte izquierda también tenga borde
      borderSkipped:false,
      // Bordes redondeados
      borderRadius:7
    }
  ],
  
};

export function BarChart({ title, height }) {

  // Crear una referencia del grafico para obtener sus propiedades
  const chartRef = React.useRef(null);

  // Funcion que hace el manejo cuando se resetea el zoom
  const handleResetZoom = () => {
    if (chartRef && chartRef.current) {
      chartRef.current.resetZoom();
    }
  };
  
  // Funcion para hacer zoom a partir de un valor numerico que indica la escala
  const handleZoom = (value) => {
    if (chartRef && chartRef.current) {
      chartRef.current.zoom(value);
    }
  };


  return (

    <div className='chart-container' style={{height:height }}>
        <ChartMenu resetZoomFunction={handleResetZoom} zoomFunction={handleZoom} title={title}/>
        <Bar options={options} data={data} ref={chartRef} />
    </div>

  ) 
  
  
  
}
