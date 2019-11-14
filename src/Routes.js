import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import North from './dining_options/North/North';
import South from './dining_options/South/South';
import East from './dining_options/East/East';
import West from './dining_options/West/West';
import Pollock from './dining_options/Pollock';
import Hub from './dining_options/Hub/Hub';
import CafeLaura from './dining_options/CafeLaura';
import Saxbys from './dining_options/Saxbys';
import Bowls from './dining_options/East/Bowls';
import ChefsTable from './dining_options/East/ChefsTable';
import EastDeli from './dining_options/East/EastDeli';
import EastEdge from './dining_options/East/EastEdge';
import EastPasta from './dining_options/East/EastPasta';
import EastPizza from './dining_options/East/EastPizza';
import EastSalad from './dining_options/East/EastSalad';
import Flipps from './dining_options/East/Flipps';
import Pure from './dining_options/East/Pure';
import EastCommons from './dining_options/East/EastCommons';
import BurgerKing from './dining_options/Hub/BurgerKing';
import ChickFilA from './dining_options/Hub/ChickFilA';
import JambaJuice from './dining_options/Hub/JambaJuice';
import McCalistersDeli from './dining_options/Hub/McCalistersDeli';
import PandaExpress from './dining_options/Hub/PandaExpress';
import Sbarro from './dining_options/Hub/Sbarro';
import Starbucks from './dining_options/Hub/Starbucks';
import Northside from './dining_options/North/Northside';
import WorldBeat from './dining_options/North/WorldBeat';
import FrescoYCaliente from './dining_options/South/FrescoYCaliente';
import HotSteelAndNoodles from './dining_options/South/HotSteelAndNoodles';
import InAPickle from './dining_options/South/InAPickle';
import PiattoFelice from './dining_options/South/PiattoFelice';
import RediferCityGrill from './dining_options/South/RediferCityGrill';
import SouthsideBuffet from './dining_options/South/SouthsideBuffet';
import UrbanGarden from './dining_options/South/UrbanGarden';
import TheWestWing from './dining_options/West/TheWestWing';
import WaringSquare from './dining_options/West/WaringSquare';
import Checkout from './Checkout';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/North' component={North} />
        <Route exact path='/South' component={South} />
        <Route exact path='/East' component={East} />
        <Route exact path='/West' component={West} />
        <Route exact path='/Pollock' component={Pollock} />
        <Route exact path='/HUB' component={Hub} />
        <Route exact path='/CafeLaura' component={CafeLaura} />
        <Route exact path='/Saxbys' component={Saxbys} />
        <Route exact path='/East/Bowls' component={Bowls} />
        <Route exact path='/East/ChefsTable' component={ChefsTable} />
        <Route exact path='/East/EastCommons' component={EastCommons} />
        <Route exact path='/East/Deli' component={EastDeli} />
        <Route exact path='/East/Edge' component={EastEdge} />
        <Route exact path='/East/Pasta' component={EastPasta} />
        <Route exact path='/East/Pizza' component={EastPizza} />
        <Route exact path='/East/Salad' component={EastSalad} />
        <Route exact path='/East/Flipps' component={Flipps} />
        <Route exact path='/East/Pure' component={Pure} />
        <Route exact path='/Hub/BurgerKing' component={BurgerKing} />
        <Route exact path='/Hub/ChickFilA' component={ChickFilA} />
        <Route exact path='/Hub/JambaJuice' component={JambaJuice} />
        <Route exact path='/Hub/McCalistersDeli' component={McCalistersDeli} />
        <Route exact path='/Hub/PandaExpress' component={PandaExpress} />
        <Route exact path='/Hub/Sbarro' component={Sbarro} />
        <Route exact path='/Hub/Starbucks' component={Starbucks} />
        <Route exact path='/North/Northside' component={Northside} />
        <Route exact path='/North/WorldBeat' component={WorldBeat} />
        <Route exact path='/South/FrescoYCaliente' component={FrescoYCaliente} />
        <Route exact path='/South/HotSteelAndNoodles' component={HotSteelAndNoodles} />
        <Route exact path='/South/InAPickle' component={InAPickle} />
        <Route exact path='/South/PiattoFelice' component={PiattoFelice} />
        <Route exact path='/South/RediferCityGrill' component={RediferCityGrill} />
        <Route exact path='/South/SouthsideBuffet' component={SouthsideBuffet} />
        <Route exact path='/South/UrbanGarden' component={UrbanGarden} />
        <Route exact path='/West/TheWestWing' component={TheWestWing} />
        <Route exact path='/West/WaringSquare' component={WaringSquare} />
        <Route exact path='/Checkout' component={Checkout} />
    </Switch>
);

export default Routes;
