import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from "./store/reducers"




export const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware( thunk))
)


