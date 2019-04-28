import React, { Component } from 'react';
import CardTemplate from '../core/card';
import { Card, Button } from 'react-bootstrap';

class BookRide extends Component {
    constructor() {
        super();
    }

    templateObj = () => {
        const dataObj = {
            'title': 'Show All Ride',
            'body':
                <div>
                    <Card.Text>
                        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
                    </Card.Text>
                    <div className="text-center">
                        <Button variant="primary">Show All Ride</Button>
                    </div>
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

export default BookRide;