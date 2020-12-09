import {createStore, combineReducers} from "redux";
import {homeWorkReducer} from "../homeWorkReducer";

const combineReducer = combineReducers({
    homeWorkReducer: homeWorkReducer
})

export const store = createStore(combineReducer)