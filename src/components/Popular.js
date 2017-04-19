import React, { Component } from 'react';
import Truncate from 'react-truncate';

class Popular extends Component {
    //
    render () {
        return (
            <div className="col l4 m4 s12">
                <a href={this.props.link} target="_blank">
                    <h2>{this.props.title}</h2>
                </a>

                    <div className="bumpDown">
                        <Truncate lines={3} ellipsis={<span>...</span>}>
                            <p>{this.props.description}</p>
                        </Truncate>
                    </div>
            </div>
        );
    }

}

export default Popular;