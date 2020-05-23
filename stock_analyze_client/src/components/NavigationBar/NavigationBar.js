import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';

import './NavigationBar.css'


class NavigationBar extends Component {
	constructor(props) {
		super(props);
	}

	render() {  
		return (
			<Navbar expand = "lg">
				<Navbar.Brand href = "/" id = "nav-brand">StockAnalyzer</Navbar.Brand>
			</Navbar>
		);
	}
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBar);
