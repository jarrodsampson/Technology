import React, { Component } from 'react';

import '../css/compiled/bundle.css';

import $ from 'jquery';

import FrameworkList from './FrameworkList';

class Frameworks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            frameworks: []
        };
    }

    loadData () {

        $.when(
            $.get("//jarrodsampson.com/api/frameworks/frameworks.php?format=json&version=v1"),
            $.get("/data/events.json")

        ).then(function(frameworks, events) {
            this.setState({
                frameworks: frameworks[0].data
            });
            console.log(frameworks[0].data);

        }.bind(this));

    }

    componentDidMount () {
        this.loadData();
    }

    render() {
        return (
            <div className="App">


                <div className="popularBg">
                    <div className="container">
                        <div className="wow fadeInLeft col s12 center-align scrollspy" id="popular">

                            <div className="col s12 spacer-small"></div>

                            <h1>Most Popular</h1>

                            <FrameworkList data={this.state.frameworks} />
                        </div>

                        <div className="col s12 spacer-small"></div>

                    </div>
                </div>


            </div>
        );
    }
}

export default Frameworks;
