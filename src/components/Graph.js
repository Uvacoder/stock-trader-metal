import React from "react";
import { Line } from 'react-chartjs-2';

export default function Graph() {
    const data = {
        labels: ['09.08.21', '10.08.21', '11.08.21', '12.08.21', '13.08.21', '14.08.21', '15.08.21'],
        datasets: [
            {
                label: 'Gold-silver Ratio August 9-15, 2021',
                data: [100, 50, 3, 5, 80, 20, 150],
                lineTension: 0.3,
                borderColor: ['rgba(255, 206, 86, 0.8)'],
                backgroundColor: ['rgba(255, 206, 86, 0.4)' ],
                pointBackgroundColor: 'rgba(255, 206, 86, 0.8)',
                pointBorderColor: 'rgba(255, 206, 86, 0.6)',
                fill: true
            }
        ]
    }
    const options = {
        title: {
            display: true,
            text: 'Gold-Silver Ratio Chart'
        },
        scales: {
            yAxes: [
                {
                    tics: {
                        min: 0,
                        max: 200,
                        stepSize: 10
                    }
                }
            ]
        }
    }
    return (
        <div>
            <h3>Gold-Silver Chart</h3>
            <Line data={data} options={options} />
        </div>
    )

}