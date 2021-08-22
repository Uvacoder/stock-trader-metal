import React, { useEffect, useState } from "react"
import { Line } from 'react-chartjs-2'
import axios from "axios"

function Graph() {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const days = ['09', '10', '11', '12', '13', '14', '15']
    const [ratesByDate, setRatesbyDate] = useState([])

    // get exchange rates from api for 7 dates (days array) and return data for each day (dataByDay array):
    useEffect(async () => {
        const dataByDay = days.map((day) => {
            const url = `http://api.exchangeratesapi.io/v1/2021-08-${day}?access_key=d451377251cea73c754f6f86c84d33b2&symbols=XAU,XAG`;
            console.log({ url: url })
            axios.get(url)
                .then(response => {
                    console.log(response?.data)
                    setIsLoaded(true) 
                    setRatesbyDate(ratesByDate => [...ratesByDate, response?.data])
                    //return response?.data  //doesnt return the response 
                },
                    error => {
                        setIsLoaded(true)
                        setError(error);
                    }
                )
        })
        //const results = await Promise.all(dataByDay);
        //setRatesbyDate(ratesByDate => [...ratesByDate, results])
        //console.log(results) //returns undefined. async issue unsolved
    }, [])

    console.log(ratesByDate)
    const sortedRatesByDate = ratesByDate.sort((a, b) => new Date(a.date) - new Date(b.date))
    console.log(sortedRatesByDate);
    //to get the gold-silver ratio from RatesbyDate:
    const ratio = (index) => {
        return (
            sortedRatesByDate[index].rates.XAG / sortedRatesByDate[index].rates.XAU)
    }

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded || sortedRatesByDate.length < days.length) {
        return <div>Loading...</div>
    } else {
    //returned values would go into data to create a chart:
    const data = {
        labels: [sortedRatesByDate[0].date, sortedRatesByDate[1].date, sortedRatesByDate[2].date, sortedRatesByDate[3].date, sortedRatesByDate[4].date, sortedRatesByDate[5].date, sortedRatesByDate[6].date],//to be replaced with dates from ratesByDate
        datasets: [
            {
                label: 'Gold-Silver Ratio',
                data: [ratio(0), ratio(1), ratio(2), ratio(3), ratio(4), ratio(5), ratio(6)], //to be replaced with ratios from ratesByDate
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
        return (
            <div>
                <h3>Gold-Silver Chart</h3>
                <Line data={data} options={options} width={500} />
            </div>
        )
    }

}


export default React.memo(Graph);