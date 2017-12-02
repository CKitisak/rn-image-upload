import React from 'react'
import { Container, StyleProvider } from 'native-base'
import getTheme from '../native-base-theme/components'
import material from '../native-base-theme/variables/material'

import AppHeader from './containers/AppHeader'
import AppBody from './containers/AppBody'

const KCTheme = () => (
  <StyleProvider style={getTheme(material)}>
    <Container>
      <AppHeader />
      <AppBody />
    </Container>
  </StyleProvider>
)

export default KCTheme
