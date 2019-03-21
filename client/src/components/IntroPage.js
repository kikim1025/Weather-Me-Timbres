import React from 'react';
import { connect } from 'react-redux';
import { getLoc } from '../redux/actions';
import './IntroPage.css';

class ConnectIntroPage extends React.Component {

    handleLocate = () => {
        this.props.getLoc();
    };
    
    render() {
        return (
            <div>
                <button id='button--location' onClick={this.handleLocate}>Send Location</button>
                <div id='alert'>When browser prompt appears, please allow to </div>
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getLoc: () => dispatch(getLoc())
    };
};


const IntroPage = connect(null, mapDispatchToProps) (ConnectIntroPage);

export default IntroPage;