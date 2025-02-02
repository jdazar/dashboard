import React from 'react';
import zoomPlugin from 'chartjs-plugin-zoom';
import { ChartMenu } from './ChartMenu';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
    },
    tooltip: {
      backgroundColor: 'rgba(255, 255, 255, 1)',
      cornerRadius: '15',
      padding: 15,
      usePointStyle: true,
      borderWidth: '1',
      borderColor: '#ddd',
      titleColor: '#333',
      titleFont: {
        weight: 'bold',
        size: '14',
      },
      titleAlign: 'center',
      bodyColor: '#333',
    },

    legend: {
      position:'bottom',
      labels: {
          usePointStyle: true,
          },
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

const labels = ['January', 'February', 'March'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Digital',
      data: [150, 200, 180],
      backgroundColor: [
        '#008FFB',
        '#ebaa49',
        '#7c49eb',
      ],
      borderWidth: 0,
    },
  ],
};

export function PieChart({ title, height }) {
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
      <ChartMenu resetZoomFunction={handleResetZoom} zoomFunction={handleZoom} title={title} showContros={false}/>
      <Pie options={options} data={data} ref={chartRef} />
    </div>
  );
}