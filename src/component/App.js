import React from 'react'
import AddTodo from '../container/AddTodo'
import VisibleTodoList from '../container/visibleTodoList'
import Footer from './footer'


const App = () => (
	<div>
		<AddTodo />
		<VisibleTodoList />
		<Footer />
	</div>
)

export default App;