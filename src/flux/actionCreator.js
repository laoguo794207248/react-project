import { INPUT_CHANGE, ADD_ITEM } from './actionType'


export const getInputChange = (value) => {
	return {
		type: INPUT_CHANGE,
		inputValue: value
	}
}

export const addItem = () => {
	return {
		type: ADD_ITEM
	}
}