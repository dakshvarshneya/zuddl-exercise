import { combineReducers, createStore } from "redux";
import throttle from "lodash.throttle";
import board from "./board";
import lists from "./lists";
import cards from "./cards";
import mockData from "../mockData"

const reducers = combineReducers({
  board : board,
  lists: lists,
  cards: cards
});
  
const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.log("Error while writing to local storage", err);
  }
};
  
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
  
const persistedState = loadState();
const store = createStore(reducers, persistedState);
  
store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

if (!store.getState().board.lists.length) {
  mockData(store);
}
  
export default store;