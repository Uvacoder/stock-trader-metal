import React, { useEffect, useState } from "react"
import { Navbar, Container } from 'react-bootstrap'
import axios from 'axios'
import '../styles/TopBar.css'

function TopBar(props) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [latestRates, setLatestRates] = useState({});
    const [updateTime, setUpdateTime] = useState();
    console.log(latestRates);
    useEffect(() => {
        const url = 'http://api.exchangeratesapi.io/v1/latest?access_key=9e206f87340f24fb2691d006f69fa15c&symbols=XAU,XAG,USD,ILS,GBP,BTC';
        console.log({ url: url });
        axios.get(url)
            .then(response => {
                console.log(response);
                setLatestRates(response.data?.rates);
                setUpdateTime(new Date(response.data?.timestamp * 1000).toLocaleString("en-GB", { timeZone: 'UTC' }));
                console.log(response.data?.timestamp);
                setIsLoaded(true);
            },
                error => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <Navbar collapseOnSelect bg="light" variant="light" sticky="top" className="navbar">
                    <Container className="item-container">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                                <Navbar.Text className="bar-items">
                                    <img
                                        alt=""
                                        src="https://img.icons8.com/fluency/50/000000/gold-bars.png"
                                        width="25"
                                        height="25"
                                        className="d-inline-block align-top"
                                    />   GOLD
                                    <br />
                                    <b>{latestRates.XAU.toFixed(6)}</b>
                                </Navbar.Text>
                                <Navbar.Text className="bar-items">
                                    <img
                                        alt=""
                                        src="https://img.icons8.com/dotty/50/000000/gold-bars.png"
                                        width="25"
                                        height="25"
                                        className="d-inline-block align-top"
                                    />   SILVER
                                    <br />
                                    <b>{latestRates.XAG.toFixed(6)}</b>
                                </Navbar.Text>
                                <Navbar.Text className="bar-items">
                                    <img
                                        alt=""
                                        src="https://img.icons8.com/ios-filled/50/000000/exchange-dollar.png"
                                        width="25"
                                        height="25"
                                        className="d-inline-block align-top"
                                    />   USD/EUR
                                    <br />
                                    <b>{latestRates.USD.toFixed(6)}</b>
                                </Navbar.Text>
                                <Navbar.Text className="bar-items">
                                    <img
                                        alt=""
                                        src="https://img.icons8.com/ios-glyphs/50/000000/shekel.png"
                                        width="25"
                                        height="25"
                                        className="d-inline-block align-center"
                                    />   ILS/EUR
                                    <br />
                                    <b>{latestRates.ILS.toFixed(6)}</b>
                                </Navbar.Text>
                                <Navbar.Text className="bar-items">
                                    <img
                                        alt=""
                                        src="https://img.icons8.com/ios-filled/50/000000/exchange-pound.png"
                                        width="25"
                                        height="25"
                                        className="d-inline-block align-center"
                                    />   GBP/EUR
                                    <br />
                                    <b>{latestRates.GBP.toFixed(6)}</b>
                                </Navbar.Text>
                                <Navbar.Text className="bar-items">
                                    <img
                                        alt=""
                                        src="https://img.icons8.com/ios-filled/50/000000/exchange-bitcoin.png"
                                        width="25"
                                        height="25"
                                        className="d-inline-block align-center"
                                    />   BTC/EUR
                                    <br />
                                    <b>{latestRates.BTC.toFixed(6)}</b>
                                </Navbar.Text>
                            
                        </Navbar.Collapse>
                    </Container>
                    <Navbar.Text className="update">Updated: {updateTime}</Navbar.Text>
                </Navbar>

            </div>
        )
    }

}

export default TopBar;