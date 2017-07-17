const isLoadingReducer = (state = false, action) => {
    if (action.type === 'START_FETCH') return true;
    if (action.type === 'FETCH_FAIL') return false;
    if (action.type === 'FETCH_SUCCESS') return false;
};

module.exports = isLoadingReducer;
