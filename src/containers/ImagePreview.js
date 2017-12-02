import React from 'react'
import { connect } from 'react-redux'
import { Dimensions, Image } from 'react-native';
import { View } from 'native-base'

const window = Dimensions.get('window');
const imageSize = window.width - 40;

const ImagePreview = ({ image }) => (
  <View padder>
   { image &&
      <Image
        resizeMode={'contain'}
        source={{ uri: `data:${image.type};base64,${image.data}` }}
        style={{ width: imageSize, height: imageSize }}
      />
   }
  </View>
)

const mapStateToProps = (state) => ({
  image: state.comment.image
})

ImagePreview = connect(mapStateToProps)(ImagePreview)

export default ImagePreview
