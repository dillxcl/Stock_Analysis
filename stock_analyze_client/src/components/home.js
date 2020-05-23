import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Chart } from 'react-charts';
import { Container, Row, Button } from 'react-bootstrap';

import './home.css';
import { simpleAction } from '../actions/simpleAction';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      series: null,
      axes: []
    };
  }

  componentDidMount() {
    this.setState({
      data: [
        {
          label: "Series 1",
          datums: [
            {
              x: new Date("2020-03-18T11:00:00.000Z"),
              y: 60
            },
            {
              x: new Date("2020-03-18T11:30:00.000Z"),
              y: 23
            },
            {
              x: new Date("2020-03-18T12:00:00.000Z"),
              y: 65
            },
            {
              x: new Date("2020-03-18T12:30:00.000Z"),
              y: 84
            },
            {
              x: new Date("2020-03-18T13:00:00.000Z"),
              y: 87
            },
            {
              x: new Date("2020-03-18T13:30:00.000Z"),
              y: 84
            },
            {
              x: new Date("2020-03-18T14:00:00.000Z"),
              y: 96
            },
            {
              x: new Date("2020-03-18T14:30:00.000Z"),
              y: 88
            },
            {
              x: new Date("2020-03-18T15:00:00.000Z"),
              y: 63
            },
            {
              x: new Date("2020-03-18T15:30:00.000Z"),
              y: 60
            }
          ]
        },
        {
          label: "Series 2",
          datums: [
            {
              x: new Date("2020-03-18T11:00:00.000Z"),
              y: 41
            },
            {
              x: new Date("2020-03-18T11:30:00.000Z"),
              y: 15
            },
            {
              x: new Date("2020-03-18T12:00:00.000Z"),
              y: 95
            },
            {
              x: new Date("2020-03-18T12:30:00.000Z"),
              y: 96
            },
            {
              x: new Date("2020-03-18T13:00:00.000Z"),
              y: 33
            },
            {
              x: new Date("2020-03-18T13:30:00.000Z"),
              y: 96
            },
            {
              x: new Date("2020-03-18T14:00:00.000Z"),
              y: 32
            },
            {
              x: new Date("2020-03-18T14:30:00.000Z"),
              y: 49
            },
            {
              x: new Date("2020-03-18T15:00:00.000Z"),
              y: 18
            },
            {
              x: new Date("2020-03-18T15:30:00.000Z"),
              y: 69
            }
          ]
        }
      ]
    });
    this.setState({
      series: {
        showPoints: true
      }
    });
    this.setState({
      axes: [
        { primary: true, type: 'time', position: 'bottom' },
        { type: 'linear', position: 'left' }
      ]
    });
  }

	render() {  
    const series = {
      showPoints: false
    };
    
    // const axes = [
    //   { primary: true, type: 'time', position: 'bottom' },
    //   { type: 'linear', position: 'left' }
    // ];
    
    const { data, axes } = this.state;

		return (
      <div className = "HomeContainer">
        {data.length > 0 && axes.length > 0 && (
          <Chart
            data={data}
            series={this.state.series}
            axes={axes}
            tooltip
            primaryCursor
            secondaryCursor
          />
        )}
      </div>
		);
	}

  
  // simpleAction = (event) => {
  //   this.props.simpleAction();
  // }

  // render() {
  //   return (
  //     <div className="Home">
  //       <pre>{JSON.stringify(this.props)}</pre>
  //       <button onClick = {this.simpleAction}>Test redux action</button>
  //     </div>
  //   );
  // }
};

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
