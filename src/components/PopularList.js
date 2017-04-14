import React, { Component } from 'react';

import Event from './Popular';

class PopularList extends Component {

    render () {
        let index = 0;
        var popularList = this.props.data.map(function(item) {
            //console.log(fanArt);
            if (index >= 3) {
                return null;
            }
            else {
                index += 1;
                return (
                    <Event
                        image={item.image}
                        description={item.description}
                        title={item.framework}
                        link={item.link}
                        key={item.id}
                    />
                );
            }
        }, this);
        return (
            <div className="popularList row">
                    {popularList}
            </div>
        );
    }

}

export default PopularList;