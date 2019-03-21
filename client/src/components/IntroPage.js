import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../redux/actions';
import './IntroPage.css';

class ConnectIntroPage extends React.Component {

    handleLocate = () => {
        this.props.getData();
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
        getData: () => dispatch(getData())
    };
};


const IntroPage = connect(null, mapDispatchToProps) (ConnectIntroPage);

export default IntroPage;