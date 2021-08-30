import React, { useEffect, useState } from "react"
import { Line, defaults } from 'react-chartjs-2'
import axios from "axios"
import "../styles/Graph.css";

function Graph() {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const days = ['09', '10', '11', '12', '13', '14', '15']
    const [ratesByDate, setRatesbyDate] = useState([])

    // get exchange rates from api for 7 dates (days array) and return data for each day (dataByDay array):
    useEffect(() => {
        days.map((day) => {
            const url = `https://api.exchangerate.host/2021-08-${day}&symbols=XAU,XAG`;
            console.log({ url: url })
            return (
                axios.get(url)
                .then(response => {
                    console.log(response?.data)
                    setIsLoaded(true)
                    setRatesbyDate(ratesByDate => [...ratesByDate, response?.data])
                },
                    error => {
                        setIsLoaded(true)
                        setError(error);
                    }
                )
            )
        })
        // eslint-disable-next-line
    }, [])

    //console.log(ratesByDate)
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
        //after all dates are retrevied from api, returned values would go into data to create a chart:
        console.log(defaults)
        defaults.global.defaultFontColor = '#FFFFFF';

        const data = {
            labels: [sortedRatesByDate[0].date, sortedRatesByDate[1].date, sortedRatesByDate[2].date, sortedRatesByDate[3].date, sortedRatesByDate[4].date, sortedRatesByDate[5].date, sortedRatesByDate[6].date],//to be replaced with dates from ratesByDate
            datasets: [
                {
                    label: 'Gold/Silver Ratio',
                    data: [ratio(0), ratio(1), ratio(2), ratio(3), ratio(4), ratio(5), ratio(6)],
                    lineTension: 0.3,
                    borderColor: ['rgba(192, 192, 192, 0.9)'],
                    backgroundColor: ['rgba(255, 206, 86, 0.5)'],
                    pointBackgroundColor: 'rgba(255, 206, 86, 0.9)',
                    pointBorderColor: 'rgba(255, 206, 86, 0.6)',
                    fill: true,
                    scaleFontColor: "#FFFFFF",
                    fontColor: '#FFFFFF'
                }
            ]
        }
        const options = {
            title: {
                display: false,
            text: 'Gold-Silver Ratio Chart', 
                align: 'start',
                position: 'top',
                fontSize: 18
            },
            scales: {
                yAxes: [
                    {
                        tics: {
                            min: 0,
                            max: 10,
                            stepSize: 5
                        },
                        gridLines: {
                            color: '#505050'
                        }
                    }
                ],
                xAxes: [
                    {
                        tics: {
                            min: 0,
                            max: 7,
                            stepSize: 1
                        },
                        gridLines: {
                            color: '#505050'
                        }
                    }
                ],
            },

            plugins: {
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                legend: {
                    title: {
                        position: 'start'
                    }
                },
                title: {
                    display: true,
                text: 'Gold-Silver Ratio Chart', 
                    align: 'start',
                    position: 'top',
                    fontSize: 18
                },
                hover: {
                    mode: 'index',
                    intersect: false
                }
            }
        }
        return (
            <div className='chart'>
                <h3><span className='gold'>Gold</span>-<span className='silver'>Silver</span> Chart</h3>
                <Line data={data} options={options}/>
            </div>
        )
    }

}


export default Graph;