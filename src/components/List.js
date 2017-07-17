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
        if (this.props.isLoading) return <p>Loading</p>;
        if (this.props.error) return <p>An error has occur</p>;
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
    filterMode: state.filterMode,
    isLoading: state.isLoading,
    error: state.error 
});

export default connect(mapStateToProps)(List);
//https://vanpho93.github.io/data.json
