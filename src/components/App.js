import React, { Component } from 'react';

import '../css/animate.css';
import '../css/main.css';
import '../css/owl.carousel.min.css';
import '../css/owl.theme.default.min.css';
import '../css/swipebox.css';

import $ from 'jquery';

import CommunityList from './CommunityList';
import EventsList from './EventsList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mostPopular: [],
      community: [],
      news: [],
      events: [],
      childVisible: false,
      details: {}
    };
  }

  loadData () {

    $.when(
        $.get("/data/popular.json"),
        $.get("/data/photobooth.json"),
        $.get("/data/events.json"),
        $.get("//www.reddit.com/r/webarebears/new.json?limit=10")

    ).then(function(mostPopular, news, events, community) {
      this.setState({
        mostPopular: mostPopular[0],
        news: news[0],
        events: events[0],
        community: community[0].data.children
      });
      console.log(mostPopular[0]);
      console.log(news[0]);
      console.log(events[0]);
      console.log(community[0].data.children);

    }.bind(this));

  }

  componentDidMount () {
    this.loadData();
  }

  render() {
    return (
      <div className="App">

        <div className="videoMain">

          <video id="self1" className="html5-video player" width="100%" loop="true" autoPlay="true" muted>
            <source src="media/main.mp4" width="100%" type="video/mp4">
            </source>
          </video>

        </div>

        <div className="summaryBg">
          <div className="container">
            <div className="wow fadeInLeft col s12 center-align scrollspy" id="About">
              <div className="col s12 spacer-small"></div>
              <h1>About</h1>

              <p>
                We Bare Bears follows three adoptive bear brothers: Grizzly, Panda and Ice Bear. The bears attempt to integrate with human society, such as by purchasing food, making human companions or trying to become famous on the Internet, although these attempts see the bears struggle to do so due to the civilized nature of humans and their own animal instincts. However, in the end, they figure out that they have each other for support. One notable aspect of the show's humor is the bears' ability to form a "bear stack". As its name implies, the bears stack on top of each other, which serves as their unique way of transportation.
              </p>
              <p>
                <a id="game" className="modal-trigger waves-effect waves-light btn modal-trigger orange darken-1" href="#moreHistory">Learn More</a>
              </p>
            </div>

            <div className="col s12 spacer-small"></div>

          </div>
        </div>

        <div id="moreHistory" className="modal">
          <div className="modal-content">
            <h4 className="center-align">More History</h4>
            <p className="indent">
              In 1991, Craig McCracken, then a student in the character animation program of CalArts, created 'The Whoopass Girls' as a drawing of three girls on a small sheet of orange construction paper. The following year he included them as the main characters of his short film Whoopass Stew! The Whoopass Girls in: A Sticky Situation.This short, along with a few of McCracken's No Neck Joe shorts, was selected to be shown at Spike and Mike's Sick and Twisted Festival of Animation in 1994. While working on Dexter's Laboratory, McCracken submitted his work to Hanna-Barbera's innovative What a Cartoon! Show shorts program, which was eventually produced for Cartoon Network as "The Powerpuff Girls in: Meat Fuzzy Lumpkins" as part of World Premiere Toons."Meat Fuzzy Lumpkins" first aired in 1995, and was followed by a second short, "Crime 101," a year later.
            </p>
            <p className="indent">
              Announcer Ernie Anderson, the narrator of the pilot episodes, died of cancer in 1997 before the show premiered, and he was
              Powerpuff girls movie The movie\'s DVD cover.
              replaced by Tom Kenny for the remainder of the series.The show's animation director was McCracken's former classmate Genndy Tartakovsky (Dexter's Laboratory, Samurai Jack), who also directed many episodes himself. All of the original episodes (except the WAC shorts with the first one being animated at Animal House in Japan and the Second being animated at Fil Cartoons in the Philippines) were hand-drawn and produced at Rough Draft Studios in South Korea. The Powerpuff Girls series debut on November 18, 1998 was the highest rated premiere in Cartoon Network's history at the time.
            </p>
            <p className="indent">
              The series consistently scored the highest rating each week for the network across a wide range of demographics—from young children to adults. In October 2000, Cartoon Network credited the Powerpuff Girls for its Friday night prime time ratings win among cable networks. By the end of 2000, merchandising based on The Powerpuff Girls encompassed a whole variety of products, including T-shirts, toys, video games, lunchboxes, and dishware. Concerning the Powerpuff Girls success, Craig McCracken has stated, "I thought it would get on Cartoon Network and college kids would watch it and there would be a few random T-shirts out there in the rave scene or in record shops. But I had no idea that it would take off to this extent."In August 2008, McCracken revealed on his DeviantArt account, as had been announced in that year's Comic Con, that he was working with Cartoon Network on a new half-hour Powerpuff Girls special to celebrate the series' 10-year anniversary. The special, titled "The Powerpuff Girls Rule!!!," aired on the Pan-Euro Cartoon Network on November 29, 2008, on the Powerpuff Girls Birthday Marathon, and in the United States on January 19, 2009, as part of its 10th anniversary marathon. Unlike previous episodes in the series, the anniversary special was animated using Adobe Flash at Cartoon Network Studios.
            </p>
          </div>
          <div className="modal-footer">
            <a className=" modal-action modal-close waves-effect waves-green btn-flat">Got It!</a>
          </div>
        </div>

        <div className="photoBg" id="photos">
            <div className="wow fadeInLeft col s12 center-align scrollspy" id="about">
              <div className="col s12 spacer-small"></div>
              <h1>Events</h1>

              <div className="col l12 m12 s12 no-padding">
                <EventsList data={this.state.events} />
              </div>

            </div>

            <div className="col s12 spacer-small"></div>

        </div>

        <div className="parallax-container">
          <div className="parallax"><img src="http://placehold.it/1920x1080" alt="Banner" /></div>
          <h2>Parallax</h2>
        </div>

        <div className="communityBg">
          <div className="row wow fadeInLeft col s12 center-align scrollspy" id="community">
            <div className="col s12 spacer-small"></div>
            <div className="container">
              <h1>The Community</h1>
              <CommunityList data={this.state.community} />
            </div>
            <div className="col s12 spacer-small"></div>

          </div>
        </div>


      </div>
    );
  }
}

export default App;
