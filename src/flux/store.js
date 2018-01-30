import { EventEmitter } from 'events'

const store = Object.assign({}, EventEmitter.prototype, {
	state: {
		inputValue: '124',
		list: []
	},

	getState () {
		return this.state
	},

	inputValueChange (value) {
		this.state.inputValue = value
		this.emit('change')
	},

	addItem () {
		this.state.list.push(this.state.inputValue)
		this.state.inputValue = '',
		this.emit('change')
	}
})

export default store;