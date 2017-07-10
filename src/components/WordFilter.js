import React, { Component } from 'react';

export default class WordFilter extends Component {
    render() {
        return (
            <div className="div-filter">
                <button>Show All</button>
                <button>Show Memorized</button>
                <button>Show Need Practice</button>
            </div>
        );
    }
}
