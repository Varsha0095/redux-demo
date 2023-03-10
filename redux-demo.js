//importing redux from redux library
const redux = require('redux');

//creating reducer function
const counterReducer = (state = {counter:0},action) => {
    if(action.type === 'incrementByTwo'){
        return{
                counter: state.counter + 2,
        }
    }
    if(action.type === 'decrementByTwo'){
        return{
            counter: state.counter - 2,
        }
    }
    
};

//creating centralStateStore
const store = redux.createStore(counterReducer);
// console.log(store.getState());

//components or subscribers to the central data store which will dispatch an action
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

//awaring redux of the subscriber function and tell redux that this function should be executed whenever the state changes
store.subscribe(counterSubscriber);

//dispatching action by calling dispatch method on the store and this method will dispatch an action 
//where action is a JS object with a type property which acts as identifier
store.dispatch({type: "incrementByTwo"})
store.dispatch({type: 'decrementByTwo'})

