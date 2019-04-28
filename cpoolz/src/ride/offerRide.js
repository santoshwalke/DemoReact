import React, { Component } from 'react';
import { Form, Button, ButtonToolbar } from 'react-bootstrap';
import CardTemplate from '../core/card';

export default class OfferRide extends Component {
    constructor() {
        super();
    }
    templateObj = () => {
        const tempObj = {
            'title': 'Car Ride Registration Form',
            'body':
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Start Location</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Destination</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Car</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Seat Available</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>
                    <ButtonToolbar>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Button variant="primary" type="button">
                            Reset
                        </Button>
                    </ButtonToolbar>
                </Form>
        }
        return tempObj;
    }

    render () {
        return (
            <CardTemplate template={this.templateObj()} ></CardTemplate>
        );
    }
}