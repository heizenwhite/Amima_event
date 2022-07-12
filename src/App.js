import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
  AppTheme,
  SplashScreen,
  NavBar,
  NavBarLink,
  NavSearchSuggestion,
} from 'react-windows-ui'
import Page0 from './pages/page0'
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import Page3 from './pages/page3'
import Page4 from './pages/page4'
import Page5 from './pages/page5'
import Page6 from './pages/page6'
import Icon from './assets/icon.jpg'

const App = () => {
  const [splash, setSplash] = useState(true)

  useEffect(() => {
    setSplash(false)
  }, [])

  return (
    <Router basename="amima-event">
      <SplashScreen
        duration={1000} // adjust how long it takes after render
        isVisible={splash}
        // eslint-disable-next-line react/style-prop-object
        title={'Evenement AMIMA'}
      />

      <AppTheme //added AppTheme to make app reactive with theme
        scheme="light" // available props - 'light', 'dark' or 'system'
      />

      <NavBar
        title="AMIMA Event"
        //mobileHasIcons={true}
        shadowOnScroll={true}
      >
        {/* Optional component - emphasizes navbar Search funtionality */}
        <NavSearchSuggestion
          placeholder="Search Your Pages.."
          tooltip="Search Tooltip"
          data={[
            {
              label: 'home',
              link: '/',
              icon: <i className="icons10-home"></i>,
            },
            { label: 'Page 1', link: '/page1' },
            { label: 'Page 2', link: '/page2' },
            { label: 'Page 3', link: '/page3' },
            { label: 'Page 4', link: '/page4' },
            { label: 'Page 5', link: '/page5' },
            { label: 'Page 6', link: '/page6' },
          ]}
        />
        <h1>Content</h1>
        <div className="app-hr"></div>
        <NavBarLink to="/" exact={true} text="Home" img={Icon} />
        <NavBarLink
          to="/page1"
          text="A propos"
          icon={<i className="icons10-question-mark"></i>}
        />
        <NavBarLink
          to="/page2"
          text="Planning"
          icon={<i className="icons10-calendar"></i>}
        />
        <NavBarLink
          to="/page3"
          text="Participants"
          icon={<i className="icons10-user"></i>}
        />
        <NavBarLink
          to="/page4"
          text="Conférences"
          icon={<i className="icons10-share"></i>}
        />
        <NavBarLink
          to="/page5"
          text="Submissions"
          icon={<i className="icons10-briefcase"></i>}
        />
        <NavBarLink
          to="/page6"
          text="Partenaires"
          icon={<i className="icons10-user-group"></i>}
        />
      </NavBar>

      <Switch>
        <Route path="/" component={Page0} exact />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
        <Route path="/page4" component={Page4} />
        <Route path="/page5" component={Page5} />
        <Route path="/page6" component={Page6} />
      </Switch>
    </Router>
  )
}

export default App
