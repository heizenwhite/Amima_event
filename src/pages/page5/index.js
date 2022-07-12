import React from 'react'
import { NavPageContainer, Link } from 'react-windows-ui'

class Page5 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <NavPageContainer hasPadding={true} animateTransition={true}>
        <h1>Submissions</h1>
        <p>Start adding your fantastic ui here.</p>
      </NavPageContainer>
    )
  }
}

export default Page5
