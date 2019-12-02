import  React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../../App.css';

class South extends Component {
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
                    South
                </h4>
                <ListGroup>
                    <ListGroupItem><Link to='/South/FrescoYCaliente'>Fresco Y Caliente</Link></ListGroupItem>
                    <ListGroupItem><Link to='/South/HotSteelAndNoodles'>Hot Steel And Noodles</Link></ListGroupItem>
                    <ListGroupItem><Link to='/South/InAPickle'>In A Pickle</Link></ListGroupItem>
                    <ListGroupItem><Link to='/South/PiattoFelice'>Piatto Felice</Link></ListGroupItem>
                    <ListGroupItem><Link to='/South/RediferCityGrill'>Redifer City Grill</Link></ListGroupItem>
                    <ListGroupItem><Link to='/South/SouthsideBuffet'>Southside Buffet</Link></ListGroupItem>
                    <ListGroupItem><Link to='/South/UrbanGarden'>Urban Garden</Link></ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

export default South;
