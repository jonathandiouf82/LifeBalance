import React from 'react';
import { Pie } from 'react-chartjs-2';
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
        {
            label: 'My First Dataset',
            data: [50, 50, 50],
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
            hoverOffset: 4
        }
    ]
};

const MyPieChart = () => {
    return (
        <div>
            <Pie data={data}/>
        </div>
    );
};

export default MyPieChart;
