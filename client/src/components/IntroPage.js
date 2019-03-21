import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../redux/actions';
import './IntroPage.css';

class ConnectIntroPage extends React.Component {

    // local state to show alert message
    state = {
        alert: false
    }

    handleLocate = () => {
        this.setState({ alert: !this.state.alert });
        this.props.getData();
    };
    
    render() {
        return (
            <div id='page--intro'>
                <button id='button' onClick={this.handleLocate}>Current Weather</button>
                <div id='alert'>
                    { this.state.alert
                        ? 'If the browser prompt appears, please allow permission for location for weather analysis'
                        : 'Please click the button to request weather data'
                    }
                </div>
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(getData())
    };
};

const IntroPage = connect(null, mapDispatchToProps) (ConnectIntroPage);

export default IntroPage;