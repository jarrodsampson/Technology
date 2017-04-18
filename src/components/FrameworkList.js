import React, { Component } from 'react';

import Frame from './Framework';

class FrameworkList extends Component {

    render () {
        var frameworkList = this.props.data.map(function(item) {
            //console.log(fanArt);
                return (
                    <Frame
                        image={item.image}
                        description={item.description}
                        title={item.framework}
                        link={item.link}
                        key={item.id}
                    />
                );
        }, this);
        return (
            <div className="popularList row">
                    {frameworkList}
            </div>
        );
    }

}

export default FrameworkList;