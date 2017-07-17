const arrWordsReducer = (state = [], action) => {
    if (action.type === 'START_FETCH') return [];
    if (action.type === 'FETCH_FAIL') return [];
    if (action.type === 'FETCH_SUCCESS') return action.arrWords;
    if (action.type === 'TOGGLE_MEMORIZED') {
        return state.map(e => {
            if (e.id !== action.id) return e;
            return { ...e, memorized: !e.memorized };
        });
    }
    return state;
};

export default arrWordsReducer;

// words -> arr error loading
