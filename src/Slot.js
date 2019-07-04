import React, { Component } from 'react'

const { Provider, Consumer } = React.createContext()

const DEFAULT = 'default'

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

function withSlots (WrappedComponent) {
  return class extends Component {
    static displayName = `withSlots(${getDisplayName(WrappedComponent)})`
    get slots () {
      const map = {}
      React.Children.forEach(this.props.children, children => {
        if (React.isValidElement(children)) {
          const SLOT = children.props.slot || DEFAULT
          map[SLOT] = map[SLOT] || []
          map[SLOT].push(children)
        } else {
          map[DEFAULT] = map[DEFAULT] || []
          map[DEFAULT].push(children)
        }
      })
      return map
    }
    render () {
      return (<Provider value={this.slots}>
        <WrappedComponent {...this.props} />
      </Provider>)
    }
  }
}

export default class Slot extends Component {
  static with = withSlots
  
  render () {
    const NAME = this.props.name || DEFAULT
    return (<Consumer>
      {value => value[NAME]}
    </Consumer>)
  }
}
