import React, { Component } from 'react';

import '../css/compiled/bundle.css';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// http://recharts.org/#/en-US/guide/customize

class Charts extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    loadData () {

    }

    componentDidMount () {
        this.loadData();
    }

    render() {

        // TODO add in support for 60 rows in table for data analytics (5 years)
        var chartData = [
            {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
            {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
            {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
            {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
            {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
            {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
            {name: 'Page G', uv: 3490, pv: 4300, amt: 2100}
        ];

        var margins = {left: 0, right: 0, top: 0, bottom: 0},
            chartSeries = [
                {
                    field: 'BMI',
                    name: 'BMI',
                    color: '#ff7f0e'
                }
            ];

        return (
            <div className="App">
                <div className="chartBg">
                    <div className="container">
                        <div className="wow fadeInLeft col s12 center-align scrollspy" id="chartContainer">

                            <div className="col s12 spacer-small"></div>

                            <h1>Charts</h1>

                                <LineChart width={800} height={600} chartSeries={chartSeries} margins={margins} data={chartData}>
                                    <XAxis dataKey="name"/>
                                    <YAxis/>
                                    <Tooltip/>
                                    <Legend />
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}} />
                                    <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{r: 8}} />
                                </LineChart>

                        </div>

                        <div className="col s12 spacer-small"></div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Charts;