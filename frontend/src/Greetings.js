import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class Greetings extends Component {

    constructor(props) {
        
        super(props);
        this.state = {clients: []};
        // this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/test')
            .then(response => response.json())
            .then(data => this.setState({clients: data}));
    }

    render() {
        const { clients, isLoading } = this.state;
        
        if (isLoading) {
            return <p>Loading...</p>;
        }
        console.log("HEY");
        const clientList = clients.map(client => {
            return <tr key={client.id}>
                <td>{client}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/clients/" + client.id}>Edit</Button>
                        <Button size="sm" color="danger" onClick={() => this.remove(client.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/clients/new">Add Coin</Button>
                    </div>
                    <h3>Top Coins</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="70%">Coin</th>
                        </tr>
                        </thead>
                        <tbody>
                            {clientList}
                       </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}
export default Greetings;
