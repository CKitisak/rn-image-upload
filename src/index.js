import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './redux'
import { Container, StyleProvider } from 'native-base'
import getTheme from '../native-base-theme/components'
import material from '../native-base-theme/variables/material'
import AppHeader from './containers/AppHeader'
import AppBody from './containers/AppBody'

const store = configureStore()

const KCTheme = () => (
  <Provider store={store}>
    <StyleProvider style={getTheme(material)}>
      <Container>
        <AppHeader />
        <AppBody />
      </Container>
    </StyleProvider>
  </Provider>
)

export default KCTheme
