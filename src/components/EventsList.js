import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';

import Event from './Event';

class EventsList extends Component {

    render () {
        var eventsList = this.props.data.map(function(event) {
            //console.log(fanArt);
            return (
                <Event
                    image={event.image}
                    description={event.description}
                    key={event.image}
                />
            );
        }, this);
        return (
            <div className="photoList">
                <OwlCarousel slideSpeed={300} items={4} itemsTablet={[1125,3]} itemsMobile={[500,1]} stopOnHover={true} lazyLoad={true} autoPlay={true} singleItem={false}>
                    {eventsList}
                </OwlCarousel>
            </div>
        );
    }

}

export default EventsList;