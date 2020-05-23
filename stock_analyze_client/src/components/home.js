import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Chart } from 'react-charts';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Home.css';
import { simpleAction } from '../actions/simpleAction';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      series: { showPoints: true },
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
      axes: [
        { primary: true, type: 'time', position: 'bottom' },
        { type: 'linear', position: 'left' }
      ]
    });
  }

	render() {  
    
    const { data, axes, series } = this.state;

		return (
      <Container>
        <Row>
          <Col md = {{ span: 10, offset: 1 }}>
            <div className = "HomeContainer">
              {data.length > 0 && axes.length > 0 && (
                <Chart
                  data={data}
                  series={series}
                  axes={axes}
                  tooltip
                  primaryCursor
                  secondaryCursor
                />
              )}
            </div>
          </Col>
        </Row>
      </Container>
		);
	}
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
