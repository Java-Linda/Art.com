import React from 'react'
import AllArtists from './AllArtists'

describe('<AllArtists />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AllArtists />)
  })
})