import getAllWordsAPI from '../api/getAll';

export function showAll() {
    return { type: 'FILTER_SHOW_ALL' };
}

export function showMemorized() {
    return { type: 'FILTER_SHOW_MEMORIZED' };
}

export function showNeedPractice() {
    return { type: 'FILTER_NEED_PRACTICE' };
}

export function toggleMemorized(id) {
    return { type: 'TOGGLE_MEMORIZED', id };
}

export function getAllWords() {
    return dispatch => {
        dispatch({ type: 'START_FETCH' });
        getAllWordsAPI()
        .then(words => dispatch({ type: 'FETCH_SUCCESS', arrWords: words }))
        .catch((err) => {
             dispatch({ type: 'FETCH_FAIL' });
             console.log(err);
        });
    };
}
