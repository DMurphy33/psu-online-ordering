import  React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import '../../App.css';

class Hub extends Component {
    render() {
        return(
            <div>
                <span>
                    <a className='back-button' href='/'>
                        <FontAwesomeIcon icon={faChevronLeft} />
                        Locations
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </a>
                </span>
                <h4 className='section-title'>
                    HUB Dining
                </h4>
                <ListGroup>
                    <ListGroupItem><a href='/Hub/BurgerKing'>Burger King</a></ListGroupItem>
                    <ListGroupItem><a href='/Hub/ChickFilA'>Chick-Fil-A</a></ListGroupItem>
                    <ListGroupItem><a href='/Hub/JambaJuice'>Jamba Juice</a></ListGroupItem>
                    <ListGroupItem><a href='/Hub/McCalistersDeli'>McCalister's Deli</a></ListGroupItem>
                    <ListGroupItem><a href='/Hub/PandaExpress'>Panda Express</a></ListGroupItem>
                    <ListGroupItem><a href='/Hub/Sbarro'>Sbarro</a></ListGroupItem>
                    <ListGroupItem><a href='/Hub/Starbucks'>Starbucks</a></ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

export default Hub;
