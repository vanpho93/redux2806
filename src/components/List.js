import React, { Component } from 'react';
import { connect } from 'react-redux';
import Word from './Word';
import WordFilter from './WordFilter';

class List extends Component {
    render() {
        return (
            <div>
                <WordFilter />
                {this.props.arrWords.map(e => <Word key={e.id} word={e} />)}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ arrWords: state.arrWords });

export default connect(mapStateToProps)(List);
//https://vanpho93.github.io/data.json
