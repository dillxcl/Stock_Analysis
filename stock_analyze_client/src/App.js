import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import { simpleAction } from './actions/simpleAction';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar/NavigationBar';


class App extends Component {
  
  // simpleAction = (event) => {
  //   this.props.simpleAction();
  // }

  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //       <pre>{JSON.stringify(this.props)}</pre>
  //       <button onClick = {this.simpleAction}>Test redux action</button>
  //     </div>
  //   );
  // }

  render() {
    return(
      <React.Fragment>
        <NavigationBar />
        <Router>
          <Switch>
            <Route exact path = "/" component = {Home} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }

}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
