import {createStore, applyMiddleware, compose} from 'redux';
import root from './reducer/Reducer.js'
import thunk from 'react-thunk'

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(
    root,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)