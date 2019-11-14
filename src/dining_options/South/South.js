import  React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class South extends Component {
    render() {
        return(
            <ListGroup>
                <ListGroupItem><a href='/South/FrescoYCaliente'>Fresco Y Caliente</a></ListGroupItem>
                <ListGroupItem><a href='/South/HotSteelAndNoodles'>Hot Steel And Noodles</a></ListGroupItem>
                <ListGroupItem><a href='/South/InAPickle'>In A Pickle</a></ListGroupItem>
                <ListGroupItem><a href='/South/PiattoFelice'>Piatto Felice</a></ListGroupItem>
                <ListGroupItem><a href='/South/RediferCityGrill'>Redifer City Grill</a></ListGroupItem>
                <ListGroupItem><a href='/South/SouthsideBuffet'>Southside Buffet</a></ListGroupItem>
                <ListGroupItem><a href='/South/UrbanGarden'>Urban Garden</a></ListGroupItem>
            </ListGroup>
        )
    }
}

export default South;
