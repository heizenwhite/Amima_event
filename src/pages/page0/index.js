import React from 'react'
import { NavPageContainer } from 'react-windows-ui'
import Logo from './logo.jpg'

class Page0 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <NavPageContainer animateTransition={true}>
        <div
          style={{
            backgroundColor: '#282C34',
            height: '100%',
            textAlign: 'center',
          }}
          className="app-align-center"
        >
          <br />

          <div style={{ color: '#fff' }}>
            <div
              style={{
                backgroundColor: '#282C34',
                height: 'auto',
                textAlign: 'center',
                width: '100%',
              }}
            >
              <h1>
                <img src={Logo} alt="AMIMA" />
              </h1>
            </div>
            <h1 className="m-0">Welcome to the official AMIMA Event Website</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2>
              You will find everything related to the event here, just browse...
            </h2>
            <br />
          </div>
        </div>
      </NavPageContainer>
    )
  }
}

export default Page0
