import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';

import News from './News';

class NewsList extends Component {

    render () {
        var newsList = this.props.data.map(function(item) {
            //console.log(fanArt);
            return (
                <News
                    title={item.attributes.title}
                    image={item.image}
                    description={item.attributes.body.value}
                    time={item.attributes.created}
                    key={item.attributes.created}
                />
            );
        }, this);
        return (
            <div className="newsList">
                <OwlCarousel slideSpeed={300} items={2} itemsTablet={[1525,2]} itemsMobile={[700,1]} stopOnHover={true} lazyLoad={true} autoPlay={true} singleItem={false}>
                    {newsList}
                </OwlCarousel>
            </div>
        );
    }

}

export default NewsList;