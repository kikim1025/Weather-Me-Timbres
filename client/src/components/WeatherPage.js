import React from 'react';
import { connect } from 'react-redux';
import './WeatherPage.css';

class ConnectWeatherPage extends React.Component {

    render() {
        return (
            <div id='page--weather'>
                <div className='slot'>Latitude: {this.props.lat}</div>
                <div className='slot'>Longitude: {this.props.lon}</div>
                <div className='slot'>Location: {this.props.name}</div>
                <div className='slot'>Weather: {this.props.weather}</div>
                <div className='slot'>Temperature: {this.props.temp}F</div>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        lat: state.lat,
        lon: state.lon,
        temp: state.temp,
        name: state.name,
        weather: state.weather
    };
};

const WeatherPage = connect(mapStateToProps) (ConnectWeatherPage);

export default WeatherPage;