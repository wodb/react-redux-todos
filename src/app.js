import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './component/App'
import store from './store/index'


render(
	<Provider store={store}>
		<App/>
	</Provider>
	,document.body.appendChild(document.createElement('div'))
)


