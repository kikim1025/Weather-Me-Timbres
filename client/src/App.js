import React, { Component } from 'react';
import { connect } from 'react-redux';
import WeatherPage from './components/WeatherPage';
import IntroPage from './components/IntroPage';

class ConnectApp extends Component {
  
  render() {
    return (
      <div id="page">
        { this.props.weather
          ? <WeatherPage />
          : <IntroPage />
        }
      </div>
    );
  };
};

// access redux store
const mapStateToProps = (state) => {
  return { weather: state.weather };
};

// connect to redux
const App = connect(mapStateToProps) (ConnectApp);

export default App;