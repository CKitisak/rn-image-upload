import React from 'react'
import { Body, Header, Left, Right, Title } from 'native-base'
import ImagePickerButton from './ImagePickerButton'
import ImageUploadButton from './ImageUploadButton'

const AppHeader = () => (
  <Header>
    <Left>
      <ImagePickerButton />
    </Left>
    <Body>
      <Title>Image Upload</Title>
    </Body>
    <Right>
      <ImageUploadButton />
    </Right>
  </Header>
)

export default AppHeader
