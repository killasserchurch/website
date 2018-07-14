import { Component } from 'react'
import ReactDOM from 'react-dom'

const portalRoot =
  typeof window !== 'undefined' ? document.getElementById('portal') : null

export default class Portal extends Component {
  constructor() {
    super()
    this.el = document.createElement('div')
  }

  componentDidMount = () => {
    portalRoot.appendChild(this.el)
  }

  componentWillUnmount = () => {
    portalRoot.removeChild(this.el)
  }

  render() {
    if (this.el) {
      const { children } = this.props
      return ReactDOM.createPortal(children, this.el)
    } else {
      return undefined
    }
  }
}
