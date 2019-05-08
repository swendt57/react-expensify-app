import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

store.dispatch(addExpense({description: 'water bill', amount: 20000, createdAt: 123456}));
store.dispatch(addExpense({description: 'gas bill', amount: 5000, createdAt: 654321}));
store.dispatch(addExpense({description: 'cable bill', amount: 25000}));

// store.dispatch(setTextFilter('water'));
//
// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
//
// }, 3000)

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

// console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
