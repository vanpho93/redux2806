import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actionCreators';

class Word extends Component {
    render() {
        const { en, vn, memorized, isShow, id } = this.props.word;
        const textDecoration = memorized ? 'line-through' : 'none';
        const meaning = isShow ? vn : '-------';
        return (
            <div className="div-word">
                <strong style={{ textDecoration }}>{en}</strong>
                <p>{meaning}</p>
                <button>Show</button>
                <button onClick={() => this.props.toggleMemorized(id)}>Memorized</button>
            </div>
        );
    }
}

export default connect(null, actionCreators)(Word);
