import React, { Component } from 'react'
import store from './store'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
    store.subscribe(this.handleUpdate)
  }

  render () {
    return (
      <div>
        <input value={this.state.inputValue} onChange={this.handleInputChange}/>
        <button onClick={this.handleAddItem}>提交</button>
        <ul>
          {
            this.state.list.map((value, index) => {
              return <li key={index}>value</li>
            })
          }
        </ul>
      </div>
    )
  }

  handleInputChange (e) {
    const action = {
      type: 'inputValueChange',
      inputValue: e.target.value
    }
    store.dispatch(action)
  }

  handleUpdate () {
    this.setState(store.getState())
  }

  handleAddItem () {
    const action = {
      type: 'addItem',
      inputValue: ''
    }
    store.dispatch(action)
  }
}