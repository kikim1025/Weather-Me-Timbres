import React from 'react';
import { connect } from 'react-redux';
//import {  } from '../redux/actions';
import './WeatherPage.css';

class ConnectWeatherPage extends React.Component {

    render() {
        return (
            <div>
                <div>Latitude: {this.props.lat}</div>
                <div>Longitude: {this.props.lon}</div>
                <div>Weather: {this.props.weather}</div>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        lat: state.lat,
        lon: state.lon,
        weather: state.weather
    };
};

const WeatherPage = connect(mapStateToProps) (ConnectWeatherPage);

export default WeatherPage;