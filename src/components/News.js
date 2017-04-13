import React, { Component } from 'react';

class News extends Component {

    render () {
        return (
            <div>
                    <img
                        data-src={"images/photos/" + this.props.image}
                        src={"images/photos/" + this.props.image}
                        alt={this.props.description} />

                    <div className="titleIt">
                        <p>{this.props.description}</p>
                    </div>
            </div>
        );
    }

}

export default News;