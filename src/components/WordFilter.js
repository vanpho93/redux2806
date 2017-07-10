import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../redux/actionCreators';

class WordFilter extends Component {
    render() {
        return (
            <div className="div-filter">
                <button onClick={this.props.showAll}>Show All</button>
                <button onClick={this.props.showMemorized}>Show Memorized</button>
                <button onClick={this.props.showNeedPractice}>Show Need Practice</button>
            </div>
        );
    }
}

export default connect(null, actionCreator)(WordFilter);
