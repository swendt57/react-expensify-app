import {createStore} from 'redux';

//Action generators

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy  //or just incrementBy (both values have same name)
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
})

const setCount = ({count}) => ({
    type: 'SET',
    count: count
});

const resetCount = () => ({
    type: 'RESET'
});

//Reducers

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: state.count = 0
            }
        default:
            return state;
    }
};

const store = createStore(countReducer)

const unsubscribe =  store.subscribe(() => {
    console.log(store.getState());
});


// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({incrementBy: 5}));

// store.dispatch({
//     type: 'INCREMENT'
// });

store.dispatch(incrementCount());

// store.dispatch({
//     type: 'RESET'
// })

store.dispatch(resetCount());

store.dispatch(decrementCount());

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

store.dispatch(decrementCount({decrementBy: 10}));

// store.dispatch({
//     type: 'SET',
//     count: 101
// });

store.dispatch(setCount({count: 101}));

store.dispatch(incrementCount());
