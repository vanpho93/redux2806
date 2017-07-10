import React, { Component } from 'react';

export default class Word extends Component {
    render() {
        return (
            <div className="div-word">
                <strong>{this.props.en}</strong>
                <p>{this.props.vn}</p>
                <button>Show</button>
                <button>Memorized</button>
            </div>
        );
    }
}
