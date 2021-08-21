import React, { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import axios from "axios";

function Graph() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const days = ['09', '10', '11', '12', '13', '14', '15'];
    const [ratesByDate, setRatesbyDate] = useState([]);
    const [rate, setRate] = useState({});
    const [date, setDate] = useState();
    const [ratio, setRatio] = useState();

    // get exchange rates from api for 7 dates (days array) and return data for each day (dataByDay array):
    useEffect(() => {
        const dataByDay = days.map((day) => {
            const url = `http://api.exchangeratesapi.io/v1/2021-08-${day}?access_key=07ca71cb0c1303744d0451ad4d008df6&symbols=XAU,XAG`;
            console.log({ url: url });
            axios.get(url)
                .then(response => {
                    console.log(response);
                    setRate(response.data?.rates);
                    console.log(rate);
                    setRatio(rate.XAG / rate.XAU);
                    console.log(ratio);
                    setDate(response.data?.date);
                    console.log(date);
                    setIsLoaded(true);
                },
                    error => {
                        setIsLoaded(true);
                        setError(error);
                    }
                )
            return {
                day: day,
                rate: rate, // returns only the latest setRate value in all array items. is there another way to get the rate?
                date: date, //returns only the latest setState value in all array items. is there another way to get the date?
                ratio: ratio //returns only the latest setState value in all array items
            }
        })
        console.log(dataByDay);
        setRatesbyDate(dataByDay);
        console.log(ratesByDate);
    }, [])

    //returned values would go into data to create the chart:
    const data = {
        labels: ['dateAug9', 'dateAug10', 'dateAug11', 'dateAug12', 'dateAug13', 'dateAug14', 'dateAug15'],//to be replaced with dates from ratesByDate
        datasets: [
            {
                label: 'Gold-Silver Ratio',
                data: [70, 75, 73, 71, 70, 70, 82], //to be replaced with ratios from ratesByDate
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