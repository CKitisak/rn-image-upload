import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectImage } from '../redux/comment/comment.action'
import { Button, Icon } from 'native-base'
import ImagePicker from 'react-native-image-picker'

class ImagePickerButton extends Component {
  constructor(props) {
    super(props)
  }

  _showImagePicker() {
    ImagePicker.launchImageLibrary({
      mediaType: 'photo',
      maxWidth: 1280,
      maxHeight: 720
    }, (response)  => {
      console.log('Response = ', response)

      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else {
        this.props.selectImage(response)
      }
    })
  }

  render() {
    return (
      <Button transparent onPress={() => this._showImagePicker()}>
        <Icon name='archive' />
      </Button>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  selectImage(image) {
    dispatch(selectImage(image))
  }
})

ImagePickerButton = connect(null, mapDispatchToProps)(ImagePickerButton)

export default ImagePickerButton
