import React from 'react'
import { connect } from 'react-redux'
import { sendComment } from '../redux/comment/comment.action'
import { Button, Icon } from 'native-base'

const ImageUploadButton = ({ comment, sendComment }) => (
  <Button transparent onPress={() => sendComment(comment)}>
    <Icon name='cloud-upload' />
  </Button>
)

const mapStateToProps = (state) => ({
  comment: state.comment
})

const mapDispatchToProps = (dispatch) => ({
  sendComment(comment) {
    dispatch(sendComment(comment))
  }
})

ImageUploadButton = connect(mapStateToProps, mapDispatchToProps)(ImageUploadButton)

export default ImageUploadButton
