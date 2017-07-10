import React, { Component } from 'react';
import Word from './Word';
import WordFilter from './WordFilter';

const defaultArrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true, isShow: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false, isShow: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true, isShow: true },
    { id: 4, en: 'active', vn: 'chủ động', memorized: true, isShow: false },
    { id: 5, en: 'bath', vn: 'tắm', memorized: false, isShow: false },
    { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true, isShow: false },
    { id: 7, en: 'yard', vn: 'sân', memorized: false, isShow: false },
    { id: 8, en: 'yesterday', vn: 'hôm qua', memorized: true, isShow: false },
    { id: 9, en: 'young', vn: 'trẻ', memorized: true, isShow: false },
    { id: 10, en: 'zero', vn: 'số 0', memorized: false, isShow: false },
    { id: 11, en: 'abandon', vn: 'từ bỏ', memorized: true, isShow: false },
    { id: 12, en: 'above', vn: 'ở trên', memorized: false, isShow: false },
    { id: 13, en: 'against', vn: 'phản đối', memorized: true, isShow: false },
    { id: 14, en: 'arrange', vn: 'sắp xếp', memorized: false, isShow: false }
];

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrWords: defaultArrWords
        };
    }

    render() {
        return (
            <div>
                <WordFilter />
                {this.state.arrWords.map(e => <Word key={e.id} word={e} />)}
            </div>
        );
    }
}
//https://vanpho93.github.io/data.json
