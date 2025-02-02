import React, { useContext, useEffect } from 'react';
import { Chart, Line } from 'react-chartjs-2';
import zoomPlugin, { resetZoom } from 'chartjs-plugin-zoom';
import { useState } from 'react';
import { ChartMenu } from './ChartMenu';

// ========== GLOBAL CONTEXT ===========
import { GlobalContext } from '../../context/GlobalContext';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

ChartJS.defaults.font.family = "Nunito"

// Colores por defecto para las lineas
let defaultColors = ['#008FFB','#00E396','#FEB019','#FF4560','#775DD0','#008FFB','#00E396','#FEB019','#FF4560','#775DD0']

// Plugin para dibujar una linea vertical cuando se hace hover sobre un conjunto de puntos (https://www.youtube.com/watch?v=TIXFcrVBz7U&ab_channel=ChartJS)
export const verticalHoverLine = {
    id: 'verticalHoverLine',
    beforeDatasetsDraw(chart) {
        const { ctx, chartArea: { top, bottom }, scales: {x,y}, tooltip} = chart;

        ctx.save();
    
        if (tooltip._active[0]){
            
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.lineWidth = 1.5;
            ctx.strokeStyle = '#bbb';
            ctx.moveTo(x.getPixelForValue(tooltip._active[0].element.$context.parsed.x),top) //Inicio de la linea
            ctx.lineTo(x.getPixelForValue(tooltip._active[0].element.$context.parsed.x),bottom) //Final de la linea
            ctx.stroke(); // Dibujar la linea
            ctx.setLineDash([]); // Para que las lineas siguientes no se grafiquen como lineas discontinuas
        }
    }
}

export function LineChart({ x, y, title, legends, height }) {

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


  // Obtener el tema actual para modificar los colores de la grafica
  const { theme } = useContext(GlobalContext);
  const colors = {
    Light : {
      scales : {
        x : '#909192',
        y : '#909192'
      },
      grid : {
        x: 'transparent',
        y: 'rgba(100,100,100,0.15)'
      },
      legends : '#909192',
      zoom: {
        border : '#ccc',
        background : 'rgba(238,238,238,0.7)'
      },
      tooltip:{
        background : 'rgba(255, 255, 255, 1)',
        border : '#ddd',
        color: '#333'
      }
    },

    Dark : {
      scales : {
        x : 'rgba(154, 171, 194,0.4)',
        y : 'rgba(154, 171, 194,0.4)'
      },
      grid : {
        x: 'transparent',
        y: 'rgba(100,100,100,0.15)'
      },
      legends : 'rgba(154, 171, 194,0.4)',
      zoom: {
        border : 'rgba(154, 171, 194,0.2)',
        background : 'rgba(154, 171, 194,0.2)'
      },
      tooltip:{
        background : 'rgba(255, 255, 255, 1)',
        border : '#ddd',
        color: '#333'
      }
    }
  }


  // Generar la forma adecuada que recibe Chart JS para los datos
  const [series, setSeries] = useState(() =>{

    // Estructura base de los datos que recibe Chart JS
    let data = {
      labels:x,
      datasets: []
    }

    // Rellenar con los datasets
    legends.forEach((legend,i) => data.datasets.push({
        label: legend,
        data : y[i],
        borderColor: defaultColors[i],
        backgroundColor: defaultColors[i]
    }));

    return data
  })

  // Opciones
 const options = {
  responsive: true,
  maintainAspectRatio:false,

  // Configurar el eje X como linear
  scales:{
    x:{
        type:'linear',
        //position:'bottom',
        grid:{
            display: false
        },
        max: Math.max(x),
        ticks:{
          color:colors[theme].scales.x
        },
        grid:{
          color:colors[theme].grid.x
        }
    },
    y:{
      ticks:{
        color:colors[theme].scales.y
      },
      grid:{
        color:colors[theme].grid.y
      }
  }
  },
  
  // Para que cuando se pase el mouse encima de las graficas se muestre en el tooltip todas las se#ales
  // Intersect permite que el tooltip salga de acuerdo al elemento mas cercano al mouse
  interaction:{
    intersect: false,
    mode:'index'
  },

  // Para que la linea sea curvada, mantener entre 0 y 0.5 maximo para evitar deformaciones
  tension: 0.3,

  // Graduar grosor de la linea, se recomienda 1.5
  borderWidth:1.5,

  // Radio de los puntos
  radius: 0,

  // Plugins
  plugins: {

    tooltip:{

      // Generales del tooltip
      backgroundColor:colors[theme].tooltip.background,
      cornerRadius:'15',
      padding: 15,
      usePointStyle:true,
      borderWidth:'1',
      borderColor:colors[theme].tooltip.border,
      
      // Titulo
      titleColor:colors[theme].tooltip.color,
      titleFont: {
        weight: 'bold',
        size: '14'
      },
      titleAlign:'center',

      // Cuerpo
      bodyColor:colors[theme].tooltip.color,
    },

    legend: {
        position:'bottom',
        labels: {
            usePointStyle: true,
            color:colors[theme].legends
            },
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
          borderColor: colors[theme].zoom.border,
          borderWidth: 1,
          backgroundColor: colors[theme].zoom.background
        },
        pinch: {
          enabled: true
        },
      }
    }
  },
};

  return (

    <div className='chart-container' style={ {height:height} }>
      <ChartMenu resetZoomFunction={handleResetZoom} zoomFunction={handleZoom} title={title}/>
      <Line ref={chartRef} options={options} data={series} plugins={[verticalHoverLine]}/>
    </div>

  )

}



