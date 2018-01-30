const stateDefault = {
	inputValue: '',
	list: []
}

export default (state = stateDefault, action ) => {
	const { inputValue, type } = action
	switch (type) {
		case 'inputValueChange': 
			return {
				inputValue: inputValue,
				list: state.list
			}
		case 'addItem': 
			return {
				inputValue: inputValue,
				list: [...state.list, state.inputValue]
			}	
		default : return state
	}
}