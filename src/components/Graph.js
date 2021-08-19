import React, { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import axios from "axios";

function Graph() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [ratesAug9, setRatesAug9] = useState({});
    const [dateAug9, setDateAug9] = useState();
    console.log(ratesAug9);
    console.log(dateAug9);
    const [ratesAug10, setRatesAug10] = useState({});
    const [dateAug10, setDateAug10] = useState();
    console.log(ratesAug10);
    console.log(dateAug10);
    const [ratesAug11, setRatesAug11] = useState({});
    const [dateAug11, setDateAug11] = useState();
    console.log(ratesAug11);
    console.log(dateAug11);
    const [ratesAug12, setRatesAug12] = useState({});
    const [dateAug12, setDateAug12] = useState();
    console.log(ratesAug12);
    console.log(dateAug12);
    const [ratesAug13, setRatesAug13] = useState({});
    const [dateAug13, setDateAug13] = useState();
    console.log(ratesAug13);
    console.log(dateAug13);
    const [ratesAug14, setRatesAug14] = useState({});
    const [dateAug14, setDateAug14] = useState();
    console.log(ratesAug14);
    console.log(dateAug14);
    const [ratesAug15, setRatesAug15] = useState({});
    const [dateAug15, setDateAug15] = useState();
    console.log(ratesAug15);
    console.log(dateAug15);

    useEffect(() => {
        const urlAug9 = 'http://api.exchangeratesapi.io/v1/2021-08-09' +
            '?access_key=' + 'c127b702a402a46651358545fc8ba347' +
            '&symbols=XAU,XAG';
        console.log({ url: urlAug9 });
        axios.get(urlAug9)
            .then(response => {
                console.log(response);
                setRatesAug9(response.data?.rates);
                setDateAug9(response.data?.date);
                setIsLoaded(true);
            },
                error => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
            const urlAug10 = 'http://api.exchangeratesapi.io/v1/2021-08-10' +
            '?access_key=' + 'c127b702a402a46651358545fc8ba347' +
            '&symbols=XAU,XAG';
        console.log({ url: urlAug10 });
        axios.get(urlAug10)
            .then(response => {
                console.log(response);
                setRatesAug10(response.data?.rates);
                setDateAug10(response.data?.date);
                setIsLoaded(true);
            },
                error => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
            const urlAug11 = 'http://api.exchangeratesapi.io/v1/2021-08-11' +
            '?access_key=' + 'c127b702a402a46651358545fc8ba347' +
            '&symbols=XAU,XAG';
        console.log({ url: urlAug11 });
        axios.get(urlAug11)
            .then(response => {
                console.log(response);
                setRatesAug11(response.data?.rates);
                setDateAug11(response.data?.date);
                setIsLoaded(true);
            },
                error => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
            const urlAug12 = 'http://api.exchangeratesapi.io/v1/2021-08-12' +
            '?access_key=' + 'c127b702a402a46651358545fc8ba347' +
            '&symbols=XAU,XAG';
        console.log({ url: urlAug12 });
        axios.get(urlAug12)
            .then(response => {
                console.log(response);
                setRatesAug12(response.data?.rates);
                setDateAug12(response.data?.date);
                setIsLoaded(true);
            },
                error => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
            const urlAug13 = 'http://api.exchangeratesapi.io/v1/2021-08-13' +
            '?access_key=' + 'c127b702a402a46651358545fc8ba347' +
            '&symbols=XAU,XAG';
        console.log({ url: urlAug13 });
        axios.get(urlAug13)
            .then(response => {
                console.log(response);
                setRatesAug13(response.data?.rates);
                setDateAug13(response.data?.date);
                setIsLoaded(true);
            },
                error => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
            const urlAug14 = 'http://api.exchangeratesapi.io/v1/2021-08-14' +
            '?access_key=' + 'c127b702a402a46651358545fc8ba347' +
            '&symbols=XAU,XAG';
        console.log({ url: urlAug14 });
        axios.get(urlAug14)
            .then(response => {
                console.log(response);
                setRatesAug14(response.data?.rates);
                setDateAug14(response.data?.date);
                setIsLoaded(true);
            },
                error => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
            const urlAug15 = 'http://api.exchangeratesapi.io/v1/2021-08-15' +
            '?access_key=' + 'c127b702a402a46651358545fc8ba347' +
            '&symbols=XAU,XAG';
        console.log({ url: urlAug15 });
        axios.get(urlAug15)
            .then(response => {
                console.log(response);
                setRatesAug15(response.data?.rates);
                setDateAug15(response.data?.date);
                setIsLoaded(true);
            },
                error => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    const ratioAug9 = ratesAug9.XAG / ratesAug9.XAU;
    console.log(ratioAug9);
    const ratioAug10 = ratesAug10.XAG / ratesAug10.XAU;
    console.log(ratioAug10);
    const ratioAug11 = ratesAug11.XAG / ratesAug11.XAU;
    console.log(ratioAug11);
    const ratioAug12 = ratesAug12.XAG / ratesAug12.XAU;
    console.log(ratioAug12);
    const ratioAug13 = ratesAug13.XAG / ratesAug13.XAU;
    console.log(ratioAug13);
    const ratioAug14 = ratesAug14.XAG / ratesAug14.XAU;
    console.log(ratioAug14);
    const ratioAug15 = ratesAug15.XAG / ratesAug15.XAU;
    console.log(ratioAug15);

    const data = {
        labels: [dateAug9, dateAug10, dateAug11, dateAug12, dateAug13, dateAug14, dateAug15],
        datasets: [
            {
                label: 'Gold-Silver Ratio',
                data: [ratioAug9, ratioAug10, ratioAug11, ratioAug12, ratioAug13, ratioAug14, ratioAug15],
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

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
        <div>
            <h3>Gold-Silver Chart</h3>
            <Line data={data} options={options} />
        </div>
    )
        }

}

export default React.memo(Graph);