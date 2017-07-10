import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import List from './components/List';
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <List />
    </Provider>,
    document.getElementById('root') // eslint-disable-line
);

// const person = { name: 'Pho', age: 18 };
// const p2 = { ...person, height: 20 };

// const nums = [1, 3, 4, 2, 4];

// const nums2 = [2000, ...nums, 1000];
// console.log(nums);
// console.log(nums2);
