import React from 'react'
import { Button, Icon } from 'native-base'

const ImageUploadButton = () => (
  <Button transparent onPress={() => console.log('dispatch(uploadImage())')}>
    <Icon name='cloud-upload' />
  </Button>
)

export default ImageUploadButton
