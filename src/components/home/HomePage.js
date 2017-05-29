import React from 'react';
import {Link} from 'react-router'; //

class HomePage extends React.Component {
  render(){
    return (
      <div className="jumbotron">
        <h1>React Starter Kit by Chris</h1>
        <p>Boiler Plate code for React, Redux, React-Router, Axios, OAuth</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more </Link>
      </div>
    );
  }
}

export default HomePage;
