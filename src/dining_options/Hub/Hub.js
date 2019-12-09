import  React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../../App.css';

class Hub extends Component {
    render() {
        return(
            <div>
                <span>
                    <Link className='back-button' to='/'>
                        <FontAwesomeIcon icon={faChevronLeft} />
                        Locations
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </Link>
                </span>
                <h4 className='section-title'>
                    HUB Dining
                </h4>
                <ListGroup>
                    <ListGroupItem><Link className='page-navigation' to='/Hub/BurgerKing'>Burger King</Link></ListGroupItem>
                    <ListGroupItem><Link className='page-navigation' to='/Hub/ChickFilA'>Chick-Fil-A</Link></ListGroupItem>
                    <ListGroupItem><Link className='page-navigation' to='/Hub/JambaJuice'>Jamba Juice</Link></ListGroupItem>
                    <ListGroupItem><Link className='page-navigation' to='/Hub/McCalistersDeli'>McCalister's Deli</Link></ListGroupItem>
                    <ListGroupItem><Link className='page-navigation' to='/Hub/PandaExpress'>Panda Express</Link></ListGroupItem>
                    <ListGroupItem><Link className='page-navigation' to='/Hub/Sbarro'>Sbarro</Link></ListGroupItem>
                    <ListGroupItem><Link className='page-navigation' to='/Hub/Starbucks'>Starbucks</Link></ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

export default Hub;
