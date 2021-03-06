import React from 'react'
import {
  NavPageContainer,
  NavPageContainerInner,
  NavPageContainerRight,
  Link,
} from 'react-windows-ui'

class Page2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <NavPageContainer hasPadding={false} animateTransition={true}>
        <NavPageContainerInner>
          <h1>Planning de l'événement</h1>
          <p>Page with split containers : center | right</p>
          <Link>Components here</Link>
        </NavPageContainerInner>

        <NavPageContainerRight>
          <h4 className="m-0">Right Section Container</h4>
          <p>Your Right container contents</p>
          <Link>Components here</Link>
          <br />
          <Link>More Components here</Link>
        </NavPageContainerRight>
      </NavPageContainer>
    )
  }
}

export default Page2
