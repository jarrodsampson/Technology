import React, { Component } from 'react';

class Popular extends Component {

    render () {
        return (
            <div className="col l4 m4 s12">
                    <img
                        className=""
                        src={"images/photos/" + this.props.image}
                        alt={this.props.description} />

                    <div className="">
                        <p>{this.props.description}</p>
                    </div>
            </div>
        );
    }

}

export default Popular;