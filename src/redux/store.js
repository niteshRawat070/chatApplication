import { createStore,applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'
import userReducer from './reducer'
import logger from 'redux-logger'

function saveToLocalStorage(state) {
    try {
        const serializedState=JSON.stringify(state)
        localStorage.setItem('state',serializedState)
    } catch (e) {
        console.log(e)
    }
}

function loadFromLocalStorage() {
    try {
        const serializedState=localStorage.getItem('state')
        if(serializedState===null) return undefined
        return JSON.parse(serializedState)
    } catch (e) {
        console.log(e)
        return undefined
    }
}

const persistedState=loadFromLocalStorage()
const store = createStore(userReducer,persistedState,composeWithDevTools(applyMiddleware(logger,thunk)))

store.subscribe(()=>saveToLocalStorage(store.getState()))

export default store