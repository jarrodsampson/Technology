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
                        <p dangerouslySetInnerHTML={{__html: this.props.description}} />
                        <p><em className=""><Moment unix fromNow>{this.props.time}</Moment></em></p>
                    </div>
            </div>
        );
    }

}

export default News;