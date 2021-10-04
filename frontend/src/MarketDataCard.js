import React, { Component } from 'react';
import './App.css';
import './card.css';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

class MarketDataCard extends Component {

    constructor(props) {
        super(props);
        this.state = { coinData: "" };
        this.coinID = this.props.id;
    }

    async loadData() {
        var url = '/api/crypto/' + this.coinID + "/";
        try {
            fetch(url)
                .then(response => response.json())
                .then(data => this.setState({ coinData: data }));
        } catch (error) {
            console.log(error);
        }
        
    }

    componentDidMount() {
        
        this.loadData();
        // this.interval = setInterval(this.loadData, 60000);
    }
    
    componentWillUnmount() {
        // clearInterval(this.interval);
    }

    render() {
        const { coinData, isLoading } = this.state;

        const cardStyles = {
            backgroundColor: "#333",
            color: "white",
            minWidth: "20rem",
            Width: "60rem",
            marginBottom: "1rem",
            borderRadius: 20
        }
    

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <Card style={cardStyles} className={coinData.marketCapChangePercent24Hr >= 0 ? "bacground-gradient-green" : "bacground-gradient-red"}>
                <CardBody>
                    <div className="row">
                        <div className="col-sm-12">
                            <CardTitle style={{ color: "#BB86FC", fontSize: 30, margin:0 }} className="d-inline-block" >{coinData.currencyName}</CardTitle>
                            <CardSubtitle style={{ color: "#B2B2B2", fontSize:20, paddingLeft:".5rem", margin:0  }} className="mb-2 d-inline-block">{coinData.currencySymbol}</CardSubtitle>
                            <hr style={{ backgroundColor: "#BB86FC", margin:0, marginBottom:2 }}></hr>
                            
                        </div>
                    </div>
                    
                    
                    <CardText>
                        <div>
                            <div className="row">
                                <div className="col-sm-12">
                                <h3 style={coinData.marketCapChangePercent24Hr >= 0 ? {color:'#1EDDCB'} : {color:'#F48FB1'}}>${coinData.currentPrice}</h3>
                                <p style={coinData.marketCapChangePercent24Hr >= 0 ? {color:'#1EDDCB'} : {color:'#F48FB1'}} >Last 24H: {coinData.marketCapChangePercent24Hr}%</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <p>
                                        24H High: ${coinData.high24Hr} <br></br>
                                        24H Low: ${coinData.low24Hr}<br></br>
                                        24H Delta : ${coinData.priceChange24h}
                                    </p>
                                </div>
                                <div className="col-sm-6">
                                    <p>
                                        Market Cap Rank: {coinData.marketCapRank}<br></br>
                                        Market Cap: ${coinData.marketCap}<br></br>
                                        Supply: ${coinData.circulatingSupply}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </CardText>
                </CardBody>
            </Card>
        );
    }

}
export default MarketDataCard;