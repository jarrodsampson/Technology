import React, { Component } from 'react';
import Moment from 'react-moment';

class News extends Component {

//src={"images/photos/" + this.props.image}
    render () {
        return (
            <div>
                    <img
                        src="http://placehold.it/1080x576"
                        alt={this.props.description} />

                    <div className="titleIt">
                        <p>{this.props.title}</p>
                        <em className="timeReddit"><Moment unix fromNow>{this.props.time}</Moment></em>
                    </div>
            </div>
        );
    }

}

export default News;