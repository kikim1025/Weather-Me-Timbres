import React from 'react';
import { connect } from 'react-redux';
import {  } from '../redux/actions';
import './WeatherPage.css';

class ConnectWeatherPage extends React.component {

    render() {
        return (

        );
    };
};

const mapStateToProps = (state) => {
    return {

    };
};


const WeatherPage = connect(mapStateToProps, {  }) (ConnectWeatherPage);

export default WeatherPage;