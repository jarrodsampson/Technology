import React, { Component } from 'react';
//import Formsy from 'formsy-react';
//import MyInput from './Input';

import '../css/compiled/bundle.css';

import $ from 'jquery';

import CommunityList from './CommunityList';
import EventsList from './EventsList';
import PopularList from './PopularList';
import NewsList from './NewsList';

class Home extends Component {

    constructor(props) {
        super(props);
        // TODO: States to REDUX
        this.state = {
            mostPopular: [],
            community: [],
            news: [],
            events: [],
            childVisible: false,
            details: {},
            canSubmit: true
        };
    }

    loadData () {

        // Promise checking for errors
        $.when(
            $.get("//jarrodsampson.com/api/frameworks/frameworks.php?format=json&version=v1&query=javascript&category=popularity"),
            $.get("//admin.jarrodsampson.com/jsonapi/node/news_release?page[limit]=10&sort[sort-created][path]=created&sort[sort-created][direction]=DESC"),
            $.get("/data/events.json"),
            $.get("//www.reddit.com/r/javascript/new.json?limit=10")

        ).then(function(mostPopular, news, events, community) {
            // TODO: States to REDUX
            this.setState({
                mostPopular: mostPopular[0].data,
                news: news[0].data,
                events: events[0],
                community: community[0].data.children
            });
            console.log(mostPopular[0].data);
            console.log(news[0].data);
            console.log(events[0]);
            console.log(community[0].data.children);

        }.bind(this));

    }

    componentDidMount () {
        this.loadData();
    }

    enableButton() {
        this.setState({
            canSubmit: true
        });
    }
    disableButton() {
        this.setState({
            canSubmit: false
        });
    }
    submit(model) {
        console.log(model.email);

        if (model.email !== "") {
            $.ajax({
                type: 'POST',
                url: '/assets/mail/subscribe.php',
                data: model,
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' },
                success: function(result) {
                    console.log(result);
                },
                error: function(err) {
                    console.log(err);
                }
            });
        }
    }

    render() {
        return (
            <div className="App">

                <div className="videoMain">

                    <div id="homeTop">
                        <video id="self1" className="html5-video player" width="100%" loop="true" autoPlay="true" muted>
                            <source src="media/intro.mp4" width="100%" type="video/mp4">
                            </source>
                        </video>
                        <div className="col l12 m12 s12 center">
                            <a href="#about" className="explore tooltipped" data-tooltip="Learn More" data-position="top">
                                <i className="fa fa-angle-down" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>

                </div>

                <div className="summaryBg brown lighten-5">
                    <div className="container">
                        <div className="wow fadeInLeft col s12 center-align scrollspy" id="about">
                            <div className="col s12 spacer-small"></div>
                            <h1>About The Language</h1>

                            <p>
                               JavaScript is a high-level, dynamic, untyped, and interpreted run-time language. It has been standardized
                               in the ECMAScript language specification. Alongside HTML and CSS, JavaScript is one of the
                               three core technologies of World Wide Web content production; the majority of websites employ
                               it, and all modern Web browsers support it without the need for plug-ins. JavaScript is
                               prototype-based with first-class functions, making it a multi-paradigm language, supporting
                               object-oriented, imperative, and functional programming styles.
                            </p>
                            <p>
                                <a id="game" className="modal-trigger waves-effect waves-light btn modal-trigger blue-grey darken-1" target="_blank" href="https://en.wikipedia.org/wiki/JavaScript">Learn More</a>
                            </p>
                        </div>

                        <div className="col s12 spacer-small"></div>

                    </div>
                </div>

                <div className="newsBg grey lighten-3">

                    <div className="" id="news">
                        <div className="wow fadeInLeft col s12 center-align scrollspy" id="about">
                            <div className="col s12 spacer-small"></div>
                            <h1>Recent News</h1>

                            <div className="col l12 m12 s12 no-padding">
                                <NewsList data={this.state.news} />
                            </div>

                        </div>

                        <div className="col s12 spacer-small"></div>

                    </div>

                    <div className="" id="events">
                        <div className="wow fadeInLeft col s12 center-align scrollspy" id="about">
                            <div className="col s12 spacer-small"></div>
                            <h1>Events</h1>

                            <div className="col l12 m12 s12 no-padding">
                                <EventsList data={this.state.events} />
                            </div>

                        </div>

                        <div className="col s12 spacer-small"></div>

                    </div>
                </div>

                <div className="parallax-container">
                    <div className="parallax"><img src="images/art1.jpg" alt="Banner" /></div>
                    <h2>
                        <a href="https://blog.codinghorror.com/does-more-than-one-monitor-improve-productivity/" target="_blank">
                            Does More Than One Monitor Improve Productivity?
                        </a>
                    </h2>
                </div>

                <div className="popularBg brown lighten-5">
                    <div className="container">
                        <div className="wow fadeInLeft col s12 center-align scrollspy" id="popular">

                            <div className="col s12 spacer-small"></div>

                            <h1>Most Popular</h1>

                            <PopularList data={this.state.mostPopular} />
                        </div>

                        <div className="col s12 spacer-small"></div>

                    </div>
                </div>

                <div className="parallax-container bottomMargin">
                    <div className="parallax"><img src="images/art2.jpg" alt="Banner" /></div>
                    <h2>
                        <a href="http://www.allaboutvision.com/cvs/irritated.htm" target="_blank">
                            Computer Eye Strain: 10 Steps For Relief
                        </a>
                    </h2>
                </div>

                <div className="communityBg  brown lighten-5">
                    <div className="row wow fadeInLeft col s12 center-align scrollspy" id="community">
                        <div className="col s12 spacer-small"></div>
                        <div className="container">
                            <h1>The Javascript Community</h1>
                            <CommunityList data={this.state.community} />
                        </div>
                        <div className="col s12 spacer-small"></div>

                    </div>
                </div>

                {/*
                <div className="contactBg">
                    <div className="row wow fadeInLeft col s12 center-align scrollspy" id="contact">
                        <div className="col s12 spacer-small"></div>
                        <div className="container">
                            <h1>Contact Us</h1>

                            <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                                <MyInput name="email" validations="isEmail" validationError="This is not a valid email" required/>
                                <button type="submit" className="">Submit</button>
                            </Formsy.Form>

                        </div>
                        <div className="col s12 spacer-small"></div>

                    </div>
                </div> */}

            </div>
        );
    }
}

export default Home;
