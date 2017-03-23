import TodoList from '../component/TodoList'
import {connect} from 'react-redux'
import {toggleTodo} from '../action/index'

const getVisibleTodos = (todos,filter) => {
	switch(filter) {
		case 'SHOW_ALL':
			return todos
		case 'SHOW_COMPLETED':
			return todos.filter( t => t.completed)
		case 'SHOW_ACTIVE':
			return todos.filter( t => !t.completed)
	}
}

const mapStateToProps = (state) => {
	return {
		todos:getVisibleTodos(state.todos,state.visibilityFilter)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick:(id) => {
			dispatch(toggleTodo(id))
		}
	}
}

// 生成逻辑组件
const VisibleTodoList = connect(mapStateToProps,mapDispatchToProps)(TodoList)

export default VisibleTodoList