import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class CardTemplate extends Component {
    constructor( props ) {
        super( props );
    }

    render () {
        const { template = {} } = this.props;
        const { title = null, body = null } = template;
        return (
            <Container>
                <Row className='justify-content-center'>
                    <Card>
                        <Card.Header className="text-left" bg="primary" text="white">{title}</Card.Header>
                        <Card.Body className="text-left">
                            {body}
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        );
    }
}

export default CardTemplate;