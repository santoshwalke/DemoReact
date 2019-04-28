import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Signin from './auth/Signin';
import Signup from './auth/Signup';
import BookRide from './ride/bookRide';
import ShowAllRide from './ride/showAllRides';
import OfferRide from './ride/offerRide';

class MainRouting extends Component {

    render () {
        return (
            <Switch>
                <Route exact strict path="/" component={Signin} />
                <Route exact strict path="/signUp" component={Signup} />
                <Route exact strict path="/book-ride" component={BookRide} />
                <Route exact strict path="/show-rides" component={ShowAllRide} />
                <Route exact strict path="/offer-ride" component={OfferRide} />
            </Switch>
        );
    }
}

export default MainRouting;