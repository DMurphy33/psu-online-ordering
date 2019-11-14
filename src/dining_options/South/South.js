import  React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import '../../App.css';

class South extends Component {
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
                    South
                </h4>
                <ListGroup>
                    <ListGroupItem><a href='/South/FrescoYCaliente'>Fresco Y Caliente</a></ListGroupItem>
                    <ListGroupItem><a href='/South/HotSteelAndNoodles'>Hot Steel And Noodles</a></ListGroupItem>
                    <ListGroupItem><a href='/South/InAPickle'>In A Pickle</a></ListGroupItem>
                    <ListGroupItem><a href='/South/Louies'>Louie's</a></ListGroupItem>
                    <ListGroupItem><a href='/South/OffTheGround'>Off The Ground</a></ListGroupItem>
                    <ListGroupItem><a href='/South/PiattoFelice'>Piatto Felice</a></ListGroupItem>
                    <ListGroupItem><a href='/South/RediferCityGrill'>Redifer City Grill</a></ListGroupItem>
                    <ListGroupItem><a href='/South/SouthsideBuffet'>Southside Buffet</a></ListGroupItem>
                    <ListGroupItem><a href='/South/UrbanGarden'>Urban Garden</a></ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}

export default South;
