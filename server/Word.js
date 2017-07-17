// server express tra ve list word
// reactJS su dung redux-thunk
const queryDB = require('./db');

class Word {
    constructor(id, en, vn, memorized, isShow) {
        this.id = id;
        this.en = en;
        this.vn = vn;
        this.memorized = memorized;
        this.isShow = isShow;
    }

    static getAll() {
        const sql = 'SELECT * FROM "Word"';
        return queryDB(sql, [])
        .then(result => result.rows);
    }

    addNewWord() {

    }

    toggleIsShow() {

    }

    toggleIsMemorized() {

    }

    removeWord() {

    }
}

module.exports = Word;
