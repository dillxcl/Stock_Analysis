import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { DEVELOPMENT_URL } from '../constants/urls';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      options: {}
    };
  }

  componentWillMount() {
    fetch(DEVELOPMENT_URL + "Stock_API/")
      .then(response => response.json())
      .then(data => {
        const { date, price, name } = data[0];
        this.setState({
          data: {
            labels: date.reverse(),
            datasets: [
              {
                label: name,
                borderColor: 'rgb(255, 99, 132)',
                data: price.reverse(),
              }
            ]
          }
        });
      });

    this.setState({
      options: {
        scales: {
          xAxes: [
            {
              ticks: {}
            }
          ],
          yAxes: [
            {
              ticks: {},
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Price'
              }
            }
          ]
        }
      }
    });
  }

	render() {  
    const { data, options } = this.state;
		return (
      <Container>
        <Row>
          <Col md = {{ span: 10, offset: 1 }}>
            <div>
              <Line
                data={data}
                options={options}
                height={500}
                width={700}
              />
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
