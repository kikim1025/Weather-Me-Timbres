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
        this.props.getData();
    };
    
    render() {
        return (
            <div>
                <button id='button--location' onClick={this.handleLocate}>Get Weather</button>
                {this.state.alert
                    ? <div id='alert'>When the browser prompt appears, please allow permission for location for weather analysis</div>
                    : <div></div>
                }
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