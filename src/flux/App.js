import React, { Component } from 'react';
import store from './store'
import { getInputChange, addItem } from './actionCreator'
import dispatcher from './dispatcher'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleChangeState = this.handleChangeState.bind(this)
    store.on('change', this.handleChangeState)
  }

  render() {
    return (
      <div className="App">
        <input value={this.state.inputValue} onChange={this.handleInputChange}/>
        <button onClick={this.handleAddItem}>添加</button>
        <ul>
          {
            this.state.list.map((value, index) => {
              return <li key={index}>{value}</li>
            })
          }
        </ul>
      </div>
    )
  }

  handleInputChange (e) {
    const action = getInputChange(e.target.value)
    dispatcher.dispatch(action)
  }

  handleAddItem () {
   const action = addItem()
   dispatcher.dispatch(action) 
  }

  handleChangeState () {
    this.setState(store.getState())
  }
}

export default App;
