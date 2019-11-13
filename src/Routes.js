import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import North from './locations/North';
import South from './locations/South';
import East from './locations/East';
import West from './locations/West';
import Hub from './locations/Hub';
import Checkout from './Checkout';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/North' component={North} />
        <Route exact path='/South' component={South} />
        <Route exact path='/East' component={East} />
        <Route exact path='/West' component={West} />
        <Route exact path='/HUB' component={Hub} />
        <Route exact path='/Checkout' component={Checkout} />
    </Switch>
);

export default Routes;
