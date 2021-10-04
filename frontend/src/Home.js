import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Container, Col, Row } from 'reactstrap';
import MarketDataCard from './MarketDataCard';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {coins: []};
    }

    componentDidMount() {
        fetch('/api/coins/')
            .then(response => response.json())
            .then(data => this.setState({coins: data}));
    }
    
    render() {
        const { coins, isLoading } = this.state;
    
        if (isLoading) {
            return <p>Loading...</p>;
        }
        
        let marketCards = [];
        coins.map((coin, index) => {
            marketCards.push(<MarketDataCard id={coin} ></MarketDataCard>);
        });

        
        return (
            <div>
                <AppNavbar />
                <Container>
                    <Row>
                        <Col>
                        <div className='d-flex justify-content-center' style={{ backgroundColor: "#212121" }}>
                            <div className='mt-3'>
                                {marketCards}
                            </div>
                        </div>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        );
    }

}
export default Home;