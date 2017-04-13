import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';

import News from './News';

class NewsList extends Component {

    render () {
        var newsList = this.props.data.map(function(item) {
            //console.log(fanArt);
            return (
                <News
                    image={item.image}
                    description={item.description}
                    key={item.image}
                />
            );
        }, this);
        return (
            <div className="newsList">
                <OwlCarousel slideSpeed={300} items={2} itemsTablet={[1125,2]} itemsMobile={[700,2]} stopOnHover={true} lazyLoad={true} autoPlay={true} singleItem={false}>
                    {newsList}
                </OwlCarousel>
            </div>
        );
    }

}

export default NewsList;