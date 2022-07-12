import React from 'react'
import { NavPageContainer, Link } from 'react-windows-ui'

class Page4 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <NavPageContainer hasPadding={true} animateTransition={true}>
        <h1>Conférences</h1>
        <p>Start adding your fantastic ui here.</p>
      </NavPageContainer>
    )
  }
}

export default Page4
