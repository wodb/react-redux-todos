import {connect} from 'react-redux'
import Link from '../component/Link'
import {setVisibility} from '../action/index'

const mapStateToProps = (state,ownProps) => {
	return {
		active:ownProps.filter === state.visibilityFilter
	}
}

const mapDispatchToProps = (dispatch,ownprops) => {
	return {
		onClick:() => {
			dispatch(setVisibility(ownprops.filter))
		}
	}
}



const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(Link)

export default FilterLink

