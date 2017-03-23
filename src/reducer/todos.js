// 设置用户触发action之后的响应

// 设置一条数据的响应
const todo = (state,action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return {
				id:action.id,
				text:action.text,
				completed:false
			}
		case 'TOGGLE_TODO':
			if (state.id !== action.id) {
				return state
			}
			return Object.assign({},state,{
				completed:!state.completed
			})
		default:
			return state
	}
}
// 设置列表状态的响应
const defaultState = [{
	id:0,
	text:'吃饭睡觉打豆豆',
	completed:false
}]
const todos = (state = defaultState,action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return [
				...state,
				todo(undefined,action)
			]
		case 'TOGGLE_TODO':
			return state.map(item => todo(item,action))
		default:
			return state
	}
}

export default todos