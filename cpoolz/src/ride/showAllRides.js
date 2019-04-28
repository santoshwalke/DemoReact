import React, { Component } from 'react';
import { Card, Button, ButtonToolbar, Table } from 'react-bootstrap';
import CardTemplate from '../core/card';
import './ride.css';

export default class ShowAllRide extends Component {
    constructor() {
        super();
    }

    templateObj = () => {
        const subObject = {
            'title': 'Ride Details',
            'body':
                <div>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className="text-center">
                        <Button variant="primary">Book</Button>
                    </div>
                </div>
        };

        const dataObj = {
            'title': 'Book a Ride',
            'body':
                <div>
                    <Card.Text>
                        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
                    </Card.Text>
                    <ButtonToolbar className="justify-content-center">
                        <Button variant="primary">Show All Ride</Button>
                        <Button variant="primary">To Office</Button>
                        <Button variant="primary">From Office</Button>
                        <Button variant="primary">Others</Button>
                    </ButtonToolbar>
                    <br />
                    <h6 className="text-center primary">Please select a ride !!!</h6>
                    <br />
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                    <CardTemplate template={subObject} ></CardTemplate>
                    <br />
                    <div className="text-center">
                        <Button variant="primary">Offer A Ride</Button>
                    </div>
                </div>
        }
        return dataObj;
    }

    render () {
        return (
            <CardTemplate template={this.templateObj()} ></CardTemplate>
        );
    }
}