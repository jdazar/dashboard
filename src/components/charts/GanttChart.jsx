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



// Plugin para dibujar una linea vertical cuando se hace hover sobre un conjunto de puntos (https://www.youtube.com/watch?v=TIXFcrVBz7U&ab_channel=ChartJS)
export const verticalHoverLine = {
  id: 'verticalHoverLine',
  beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, chartArea: { top, bottom }, scales: {x,y}, tooltip} = chart;

      ctx.save();
      
      if (tooltip._active[0]){
          
          ctx.setLineDash([5, 5]);
          ctx.beginPath();
          ctx.lineWidth = 1.5;
          ctx.strokeStyle = 'red';
          ctx.moveTo(x.getPixelForValue(tooltip._active[0].element.$context.parsed.x),top)
          ctx.lineTo(x.getPixelForValue(tooltip._active[0].element.$context.parsed.x),bottom)
          ctx.stroke();
          ctx.setLineDash([]); 
      }
      


  }

}




export const options = {
  responsive: true,
  maintainAspectRatio:false,

  // Para que las barras sean horizontales
  indexAxis:'y',
  
  // Esconder grid del eje x
  scales:{
    y:{
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
      data : [
        {x:[1,2], y:'January'},
        {x:[3,4], y:'January'},
        {x:[5,6], y:'April'},
        {x:[8,9], y:'May'},
        {x:[4,7], y:'May'},
        {x:[2,6], y:'March'}
      ],



      backgroundColor: '#4963E3', /* #497AEB  <- mas azul */
      //Cambiar grosor de las barras
      barPercentage:1,
      // Para que la parte izquierda también tenga borde
      borderSkipped:false,
      // Bordes redondeados
      borderRadius:7
    }
  ],
  
};

export function GanttChart({ title, height }) {

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
