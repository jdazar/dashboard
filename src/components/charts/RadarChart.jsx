import React from 'react';
import zoomPlugin from 'chartjs-plugin-zoom';
import { ChartMenu } from './ChartMenu';
import {
  Chart as ChartJS,
  CategoryScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Radar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      angleLines: {
        color: 'rgba(200, 200, 200, 0.5)', // Color de las líneas de los ángulos
      },
      grid: {
        color: 'rgba(200, 200, 200, 0.5)', // Color de la cuadrícula
      },
      pointLabels: {
        color: '#666', // Color de las etiquetas de los puntos
      },
      ticks: {
        display: false, // Ocultar los números
      },
    },
  },
  plugins: {
    legend: {
      position:'bottom',
      labels: {
          usePointStyle: true,
          },
      },
    tooltip: {
      backgroundColor: 'rgba(255, 255, 255, 1)',
      cornerRadius: '15',
      padding: 15,
    },
    zoom: {
      pan: {
        enabled: true,
        mode: 'xy',
        modifierKey: 'ctrl',
      },
      zoom: {
        mode: 'xy',
        drag: {
          enabled: true,
          borderColor: '#ccc',
          borderWidth: 1,
          backgroundColor: 'rgba(238,238,238,0.7)',
        },
      },
    },
  },
};

const labels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling'];

export const data = {
  labels,
  datasets: [
    {
      label: 'A',
      data: [65, 59, 90, 81, 56, 55],
      backgroundColor: 'rgba(255, 99, 132, 1)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
    {
      label: 'B',
      data: [58, 48, 50, 55, 96, 57],
      backgroundColor: 'rgba(54, 162, 235, 1)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
  ],
};

export function RadarChart({ title, height }) {
  const chartRef = React.useRef(null);

  const handleResetZoom = () => {
    if (chartRef && chartRef.current) {
      chartRef.current.resetZoom();
    }
  };

  const handleZoom = (value) => {
    if (chartRef && chartRef.current) {
      chartRef.current.zoom(value);
    }
  };

  return (
    <div className='chart-container' style={{ height: height }}>
      <ChartMenu resetZoomFunction={handleResetZoom} zoomFunction={handleZoom} title={title} />
      <Radar options={options} data={data} ref={chartRef} />
    </div>
  );
}