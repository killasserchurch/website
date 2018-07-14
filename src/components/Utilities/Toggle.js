import React, { Component } from 'react'

// how to use
// drop this in a component where you want to use it
// <Toggle>
//   {({ on, toggle }) => (
//     <React.Fragment>
//       <button onClick={toggle}>Login</button>
//       <Modal on={on} toggle={toggle}>
//         <h2>Still in modal</h2>
//       </Modal>
//     </React.Fragment>
//   )}
// </Toggle>
export default class Toggle extends Component {
  state = {
    on: false,
  }

  toggle = () => {
    this.setState({
      on: !this.state.on,
    })
  }

  render() {
    const { children } = this.props
    return children({
      on: this.state.on,
      toggle: this.toggle,
    })
  }
}
