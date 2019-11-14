import  React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class Hub extends Component {
    render() {
        return(
            <ListGroup>
                <ListGroupItem><a href='/Hub/BurgerKing'>Burger King</a></ListGroupItem>
                <ListGroupItem><a href='/Hub/ChickFilA'>Chick-Fil-A</a></ListGroupItem>
                <ListGroupItem><a href='/Hub/JambaJuice'>Jamba Juice</a></ListGroupItem>
                <ListGroupItem><a href='/Hub/McCalistersDeli'>McCalister's Deli</a></ListGroupItem>
                <ListGroupItem><a href='/Hub/PandaExpress'>Panda Express</a></ListGroupItem>
                <ListGroupItem><a href='/Hub/Sbarro'>Sbarro</a></ListGroupItem>
                <ListGroupItem><a href='/Hub/Starbucks'>Starbucks</a></ListGroupItem>
            </ListGroup>
        )
    }
}

export default Hub;
