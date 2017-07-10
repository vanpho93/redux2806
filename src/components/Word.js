import React, { Component } from 'react';

export default class Word extends Component {
    render() {
        const { en, vn, memorized, isShow } = this.props.word;
        const textDecoration = memorized ? 'line-through' : 'none';
        const meaning = isShow ? vn : '-------';
        return (
            <div className="div-word">
                <strong style={{ textDecoration }}>{en}</strong>
                <p>{meaning}</p>
                <button>Show</button>
                <button>Memorized</button>
            </div>
        );
    }
}
