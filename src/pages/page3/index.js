import React from 'react'
import {
  NavPageContainer,
  Link,
  TableView,
  InputSearchBar,
  Accordion,
} from 'react-windows-ui'

class Page3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <NavPageContainer hasPadding={true} animateTransition={true}>
        <h1>Liste des participants</h1>
        <br />
        <br />
        <Accordion title="Atelier 1" focused={true}>
          <div>
            {' '}
            <InputSearchBar
              name="search_name"
              onSubmit={() => {}}
              placeholder="Search here"
            />
            <TableView
              columns={[
                { title: 'Nom' },
                { title: 'Prénom' },
                { title: 'Role', showSortIcon: false, sortable: false },
              ]}
              rows={[
                ['El Idrissi', 'Marouane', 'Bon Médecin Interne'],
                ['Heizenwhite', 'The coder', 'Good developper'],
              ]}
            />
          </div>
        </Accordion>
        <br />
        <br />
        <Accordion title="Atelier 2" focused={true}>
          <div>
            {' '}
            <InputSearchBar
              name="search_name"
              onSubmit={() => {}}
              placeholder="Search here"
            />
            <TableView
              columns={[
                { title: 'Nom' },
                { title: 'Prénom' },
                { title: 'Role', showSortIcon: false, sortable: false },
              ]}
              rows={[
                ['El Idrissi', 'Marouane', 'Bon Médecin Interne'],
                ['Heizenwhite', 'The coder', 'Good developper'],
              ]}
            />
          </div>
        </Accordion>
        <br />
        <br />
        <Accordion title="Atelier 3" focused={true}>
          <div>
            {' '}
            <InputSearchBar
              name="search_name"
              onSubmit={() => {}}
              placeholder="Search here"
            />
            <TableView
              columns={[
                { title: 'Nom' },
                { title: 'Prénom' },
                { title: 'Role', showSortIcon: false, sortable: false },
              ]}
              rows={[
                ['El Idrissi', 'Marouane', 'Bon Médecin Interne'],
                ['Heizenwhite', 'The coder', 'Good developper'],
              ]}
            />
          </div>
        </Accordion>
      </NavPageContainer>
    )
  }
}

export default Page3
