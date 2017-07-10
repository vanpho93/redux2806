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
