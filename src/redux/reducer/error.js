const errorReducer = (state = null, action) => {
    if (action.type === 'START_FETCH') return null;
    if (action.type === 'FETCH_FAIL') return 'CO_LOI';
    if (action.type === 'FETCH_SUCCESS') return null;
    return state;
};

export default errorReducer;
