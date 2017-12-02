import React, { Component } from 'react'
import { Button, Icon } from 'native-base'
import ImagePicker from 'react-native-image-picker'

class ImagePickerButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      avatarSource: null
    }
  }

  __showImagePicker() {
    ImagePicker.launchImageLibrary({}, (response)  => {
      console.log('Response = ', response)

      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else {
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        let source = { uri: response.uri }

        this.setState({
          avatarSource: source
        })
      }
    })
  }

  render() {
    return (
      <Button transparent onPress={() => this.__showImagePicker()}>
        <Icon name='archive' />
      </Button>
    )
  }
}

export default ImagePickerButton
