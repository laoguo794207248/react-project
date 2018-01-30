import { Dispatcher } from 'flux'
import { INPUT_CHANGE, ADD_ITEM } from './actionType'
import store from './store'

const dispatcher = new Dispatcher()

dispatcher.register((action) => {
	const { type, index, inputValue } = action
	if (type === INPUT_CHANGE ) {
		store.inputValueChange(inputValue)
	}
	if (type === ADD_ITEM ) {
		store.addItem()
	}
})
export default dispatcher;