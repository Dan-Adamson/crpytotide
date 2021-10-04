import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import "./App.css"
import AppNavbar from './AppNavbar';

class About extends Component {

    render() {
        return (
            <div>
                <AppNavbar />
                <Container style={{ color: "white" }}>
                    <Row>
                        <Col>
                            <br></br>
                            <h2 >About CryptoTide</h2>
                            <hr style={{ backgroundColor: "#BB86FC" }}></hr>
                            <br></br>
                            <h4 style={{ textAlign:"center"}}>
                                The <span style={{ color: "#BB86FC" }}>Crypto</span> market is dynamic and we aim to show the shift in <span style={{ color: "#BB86FC" }}>Tides</span> for the top currencies.
                            </h4>
                            <br></br>
                            <p>
                                CryptoTide provides the latest in market statistics for some of the top
                                crypto currencies. Data is collected from CoinGecko's free API and formatted using a Java backend
                                utilizing the Spring Framework. The frontend was built using React.
                            </p>
                            <br></br>
                            <p>
                                *Project Attribution - This project is made possible with the help of the
                                <a style={{ color: "#BB86FC" }} href="https://www.coingecko.com/en/api"> CoinGecko's API</a> for crypto currencies. Use of the API is free with limited uses
                                and proper attribution.
                            </p>

                            <br></br>
                            <br></br>

                            <p style={{ textAlign:"center" }} >
                                Built and designed by Daniel Adamson. <a style={{ color: "#BB86FC" }} href="https://www.hardlybrief.com" target="_blank">Visit Portfolio Site</a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        ); 
    }
}

export default About;