import { createSlice } from '@reduxjs/toolkit';

// // the 'createStore' version
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       ...state,
//       counter: state.counter + 1
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       ...state,
//       counter: state.counter + action.payload
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       ...state,
//       counter: state.counter - 1
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       ...state,
//       showCounter: !state.showCounter
//     };
//   }

//   return state;
// };

// const store = createStore(counterSlice.reducer);

const initialCounterState = {
    counter: 0,
    showCounter: true
};

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        // undeclared 'state' and 'action' param will be read by redux
        // the new state and the old state will be automatically merged
        increment(state) {
            state.counter += 1;
        },
        increase(state, action) {
            state.counter += action.payload;
        },
        decrement(state) {
            state.counter -= 1;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export const counterActions = counterSlice.actions; // automatically generates unique identifiers

export default counterSlice.reducer;
