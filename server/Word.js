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
        const sql = 'INSERT INTO public."Word"(en, vn, memorized, "isShow") VALUES ($1, $2, false, false)';
        return queryDB(sql, [this.en, this.vn]);
    }

    toggleIsShow() {
        
    }

    toggleIsMemorized() {

    }

    removeWord() {

    }
}

module.exports = Word;

const word = new Word(null, 'Sleep', 'Ngủ');
word.addNewWord()
.then(() => console.log('Thêm thành công'))
.catch(() => console.log('Thêm thất bại'));

