import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expensesFixture';

import moment from 'moment';

test('should set default state ', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-123'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual( expenses );
});


test('should add new expense by id', () => {
    const expenseToAdd = {
        description: 'car wash',
        note: '',
        amount: 1500,
        createdAt: 20000
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: expenseToAdd
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expenseToAdd]);
});

test('should edit an expense', () => {
    const amount = 555000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[2].amount).toBe(amount);
});

test('should not edit an expense with bad id', () => {
    const amount = 555000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
    expect(state[2].amount).toBe(4500);
});