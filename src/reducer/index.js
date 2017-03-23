import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibility'

const todoAPPReducer = combineReducers({
	todos,
	visibilityFilter
})
export default todoAPPReducer