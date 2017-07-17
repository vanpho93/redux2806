const errorReducer = (state = null, action) => {
    if (action.type === 'START_FETCH') return null;
    if (action.type === 'FETCH_FAIL') return action.error;
    if (action.type === 'FETCH_SUCCESS') return null;
    return state;
};

module.exports = errorReducer;

//Bat dau tai
//Tai thanh cong
//Tai that bai

