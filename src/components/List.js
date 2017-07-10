import React, { Component } from 'react';
import Word from './Word';
import WordFilter from './WordFilter';

export default class List extends Component {
    render() {
        return (
            <div>
                <WordFilter />
                {this.props.arrWords.map(e => <Word key={e.id} word={e} />)}
            </div>
        );
    }
}
//https://vanpho93.github.io/data.json
