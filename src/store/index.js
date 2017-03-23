import Redux,{createStore,applyMiddleware} from 'redux'
import {logger} from 'redux-logger'

import todoAPPReducer from '../reducer/index'

const store = createStore(todoAPPReducer,applyMiddleware(logger))
export default store