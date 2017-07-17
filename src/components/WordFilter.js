import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreator from '../redux/actionCreators';

class WordFilter extends Component {
    render() {
        const { showAll, showMemorized, showNeedPractice, filterMode } = this.props;
        const getDisable = (mode) => filterMode === mode;
        return (
            <div className="div-filter">
                <button onClick={showAll} disabled={getDisable('SHOW_ALL')}>
                    Show All
                </button>
                <button onClick={showMemorized} disabled={getDisable('MEMORIZED')}>
                    Show Memorized
                </button>
                <button onClick={showNeedPractice} disabled={getDisable('NEED_PRACTICE')}>
                    Show Need Practice
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => ({ filterMode: state.filterMode });

export default connect(mapStateToProps, actionCreator)(WordFilter);
