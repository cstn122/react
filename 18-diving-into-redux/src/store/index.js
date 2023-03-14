import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    // undeclared state and action param will be read by redux
    // the new state and the old state will be automatically merged
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

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

// merging multiple slices

const initialAuthState = {
  isAuthenticated: false
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer
  }
});

export const counterActions = counterSlice.actions; // automatically generates unique identifiers
export const authActions = authSlice.actions; // automatically generates unique identifiers
export default store;
