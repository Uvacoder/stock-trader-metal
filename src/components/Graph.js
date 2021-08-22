import React, { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import axios from "axios";

function Graph() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const days = ['09', '10', '11', '12', '13', '14', '15'];
    const [ratesByDate, setRatesbyDate] = useState([]);
    console.log(ratesByDate) //returns empty because of async issues inside useEffect

    // get exchange rates from api for 7 dates (days array) and return data for each day (dataByDay array):
    useEffect(async () => {
        const dataByDay = days.map((day) => {
            const url = `http://api.exchangeratesapi.io/v1/2021-08-${day}?access_key=aeb7c3b01d6a122798a9bead9d4b8ace&symbols=XAU,XAG`;
            console.log({ url: url })
            axios.get(url)
                .then(response => {
                    console.log(response?.data)
                    setIsLoaded(true)
                    return response?.data  //doesnt return the response  
                },
                    error => {
                        setIsLoaded(true);
                        setError(error);
                    }
                )
        })
        const results = await Promise.all(dataByDay);
        setRatesbyDate(ratesByDate => [...ratesByDate, results])
        console.log(results) //returns undefined. async issue unsolved
    }, [])

    const ratio = (index) => {
        return (
            ratesByDate[index].rates.XAG / ratesByDate[index].rates.XAU)
    }
    //returned values would go into data to create the chart:
    const data = {
        labels: ['ratesByDate[0].date', 'ratesByDate[1].date', 'ratesByDate[2].date', 'ratesByDate[3].date', 'ratesByDate[4].date', 'ratesByDate[5].date', 'ratesByDate[6].date'],//to be replaced with dates from ratesByDate
        datasets: [
            {
                label: 'Gold-Silver Ratio',
                data: ['ratio(0)', 'ratio(1)', 'ratio(2)', 'ratio(3)', 'ratio(4)', 'ratio(5)', 'ratio(6)'], //to be replaced with ratios from ratesByDate
                lineTension: 0.3,
                borderColor: ['rgba(255, 206, 86, 0.8)'],
                backgroundColor: ['rgba(255, 206, 86, 0.4)'],
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
                        max: 80,
                        stepSize: 5
                    }
                }
            ]
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        hover: {
            mode: 'index',
            intersect: false
        }
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <h3>Gold-Silver Chart</h3>
                <Line data={data} options={options} width={500} />
            </div>
        )
    }

}


export default React.memo(Graph);