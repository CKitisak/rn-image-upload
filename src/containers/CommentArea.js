import React from 'react';
import { connect } from 'react-redux'
import { writeComment } from '../redux/comment/comment.action'
import { Item, Input } from 'native-base';

const CommentArea = ({ message, writeComment }) => (
  <Item regular>
    <Input
      placeholder={'Your comment...'}
      value={message}
      onChangeText={writeComment}
    />
  </Item>
)

const mapStateToProps = (state) => ({
  message: state.comment.message
})

const mapDispatchToProps = (dispatch) => ({
  writeComment(message) {
    dispatch(writeComment(message))
  }
})

CommentArea = connect(mapStateToProps, mapDispatchToProps)(CommentArea)

export default CommentArea
