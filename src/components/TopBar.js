import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
//import { useDispatch, useSelector } from "react-redux";
//import loadLatestRates from '../actions/actions';
import axios from 'axios';

function TopBar(props) {
    /*const rates = useSelector(state => state.rates); //getting the state from the reducer
    console.log({rates});


    const dispatch = useDispatch();
    useEffect(() => {
        loadLatestRates(rates);
    }, [rates])
    const loadLatestRatesNow = useCallback(() => 
        dispatch(loadLatestRates()), [dispatch]
    )*/

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [latestRates, setLatestRates] = useState({/*XAU: '', XAG: '', UDS: '', ILS: '', GBP: '', BTC: ''*/});
    const [updateTime, setUpdateTime] = useState();
    console.log(latestRates);
    useEffect(() => {
        const url = 'http://api.exchangeratesapi.io/v1/latest' +
            '?access_key=' + '07ca71cb0c1303744d0451ad4d008df6' +
            '&symbols=XAU,XAG,USD,ILS,GBP,BTC';
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
                <Navbar collapseOnSelect bg="light" variant="light" sticky="top">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                            <Nav>
                                <Navbar.Text>
                                    <img
                                        alt=""
                                        src="https://img.icons8.com/fluency/50/000000/gold-bars.png"
                                        width="25"
                                        height="25"
                                        className="d-inline-block align-top"
                                    />   GOLD
                                    <br />
                                    { latestRates.XAU.toFixed(6) }
                                </Navbar.Text>
                                <Nav.Link>
                                    <img
                                        alt=""
                                        src="https://img.icons8.com/dotty/50/000000/gold-bars.png"
                                        width="25"
                                        height="25"
                                        className="d-inline-block align-top"
                                    />   SILVER
                                    <br />
                                    { latestRates.XAG.toFixed(6) }
                                    </Nav.Link>
                                <Nav.Link>
                                    <img
                                        alt=""
                                        src="https://img.icons8.com/ios-filled/50/000000/exchange-dollar.png"
                                        width="25"
                                        height="25"
                                        className="d-inline-block align-top"
                                    />   USD/EUR
                                    <br />
                                    { latestRates.USD.toFixed(6) }
                                    </Nav.Link>
                                <Nav.Link>
                                    <img
                                        alt=""
                                        src="https://img.icons8.com/ios-glyphs/50/000000/shekel.png"
                                        width="25"
                                        height="25"
                                        className="d-inline-block align-center"
                                    />   ILS/EUR
                                    <br />
                                    { latestRates.ILS.toFixed(6) }
                                    </Nav.Link>
                                <Nav.Link>
                                    <img
                                        alt=""
                                        src="https://img.icons8.com/ios-filled/50/000000/exchange-pound.png"
                                        width="25"
                                        height="25"
                                        className="d-inline-block align-center"
                                    />   GBP/EUR
                                    <br />
                                    { latestRates.GBP.toFixed(6) }
                                    </Nav.Link>
                                <Nav.Link>
                                    <img
                                        alt=""
                                        src="https://img.icons8.com/ios-filled/50/000000/exchange-bitcoin.png"
                                        width="25"
                                        height="25"
                                        className="d-inline-block align-center"
                                    />   BTC/EUR
                                    <br />
                                    { latestRates.BTC.toFixed(6) }
                                    </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                                    <Navbar.Text style={{fontSize: 10}}>Updated: {updateTime}</Navbar.Text>
                </Navbar>
                
            </div>
        )
    }

}

export default React.memo(TopBar);