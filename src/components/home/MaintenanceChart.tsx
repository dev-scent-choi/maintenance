import React from 'react';
import { Bar } from 'react-chartjs-2';

import { Chart, CategoryScale, LinearScale, BarController, BarElement } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarController, BarElement);

const MaintenanceChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Maintenance Data',
                data: [65, 59, 80, 81, 56, 55, 40],
            }
        ]
    };

    const options = {
        responsive: true, 
        scales: {
            x: {
                beginAtZero: true, 
            },
            y: {
                beginAtZero: true, 
            }
        },
    };

    return (
        <div>
            <Bar data={data} options={options} />
        </div>
    );
};

export default MaintenanceChart;