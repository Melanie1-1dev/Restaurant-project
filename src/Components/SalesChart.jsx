import React from 'react';
import Chart from 'react-apexcharts';

export default function SalesChart({ liveData }) {
  // Setup data arrays matching the screenshot days
  const defaultCategories = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const defaultSeriesData = [1200, 1100, 1600, 900, 1400, 1300, 1800];

  // Map incoming data if present
  const categories = liveData ? liveData.map(d => d.day) : defaultCategories;
  const seriesData = liveData ? liveData.map(d => d.sales) : defaultSeriesData;

  const chartOptions = {
    chart: {
      id: 'sales-overview-chart',
      toolbar: { show: false }, // Hide ugly download menus
      sparkline: { enabled: false },
    },
    grid: { show: false }, // Hide background gridlines for that minimalist look
    stroke: {
      curve: 'smooth', // <--- This makes the line beautifully wavy!
      width: 3,
      colors: ['#b45309'] // Golden-brown color from your image
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.35,
        opacityTo: 0.05,
        stops: [0, 90, 100],
        colorStops: [
          {
            offset: 0,
            color: '#b45309',
            opacity: 0.35
          },
          {
            offset: 100,
            color: '#b45309',
            opacity: 0.0
          }
        ]
      }
    },
    xaxis: {
      categories: categories,
      labels: {
        style: {
          colors: '#a3aed0',
          fontSize: '11px',
          fontWeight: 600,
          fontFamily: 'Inter, sans-serif'
        }
      },
      axisBorder: { show: false },
      axisTicks: { show: false }
    },
    yaxis: {
      show: false // Hide Y-Axis numbers exactly like the screenshot design
    },
    tooltip: {
      theme: 'dark',
      x: { show: false },
      y: {
        formatter: (val) => `$${val.toLocaleString()}`,
        title: { formatter: () => '' }
      },
      style: {
        fontSize: '12px',
        fontFamily: 'Inter, sans-serif'
      }
    },
    markers: {
      size: 0 // Hide dot markers unless hovering
    }
  };

  const chartSeries = [
    {
      name: 'Sales',
      data: seriesData
    }
  ];

  return (
    <div style={{ width: '100%', marginTop: '10px' }}>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="area"
        height={220}
      />
    </div>
  );
}