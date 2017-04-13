import React, { Component } from 'react';

import Event from './Popular';

class PopularList extends Component {

    render () {
        var popularList = this.props.data.map(function(item) {
            //console.log(fanArt);
            return (
                <Event
                    image={item.image}
                    description={item.description}
                    key={item.image}
                />
            );
        }, this);
        return (
            <div className="popularList row">
                    {popularList}
            </div>
        );
    }

}

export default PopularList;