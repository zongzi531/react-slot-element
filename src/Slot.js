import React, { Component } from 'react'

const { Provider, Consumer } = React.createContext()

function withSlots (WrappedComponent) {
  return class extends Component {
    render () {
      return (<Provider value={React.Children.map(this.props.children, children => children)}>
        <WrappedComponent {...this.props} />
      </Provider>)
    }
  }
}

export default class Slot extends Component {
  static with = withSlots
  
  render () {
    return (<Consumer>
      {value => value || this.props.children}
    </Consumer>)
  }
}
