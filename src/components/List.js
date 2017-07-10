import React, { Component } from 'react';
import { connect } from 'react-redux';
import Word from './Word';
import WordFilter from './WordFilter';

class List extends Component {
    render() {
        const { arrWords, filterMode } = this.props;
        const showArrWord = arrWords.filter(e => {
            if (filterMode === 'SHOW_ALL') return true;
            if (filterMode === 'MEMORIZED') return e.memorized;
            return !e.memorized;
        });
        return (
            <div>
                <WordFilter />
                {showArrWord.map(e => <Word key={e.id} word={e} />)}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ 
    arrWords: state.arrWords,
    filterMode: state.filterMode 
});

export default connect(mapStateToProps)(List);
//https://vanpho93.github.io/data.json
