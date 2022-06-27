import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import schedular from "./Reducers/SchedularReducer"
import reminder from "./Reducers/RemindarReducer"
const combineReducer = combineReducers({
  schedulardata: schedular,
  reminderdata: reminder
})
// const thunkMiddleware = thunk()

const store = configureStore({
  reducer: combineReducer
})
export default store;