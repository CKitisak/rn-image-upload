import React from 'react'
import { connect } from 'react-redux'
import { Content, Spinner, Text, View } from 'native-base'
import CommentArea from './CommentArea'
import ImagePreview from './ImagePreview'

const AppBody = ({ isSendingComment }) => (
  <Content padder>
    { isSendingComment &&
      <Spinner color='blue' />
    }
    { !isSendingComment &&
      <View>
        <Text>Share your photo with some comment to us...</Text>
        <ImagePreview />
        <CommentArea />
      </View>
    }
  </Content>
)

const mapStateToProps = (state) => ({
  isSendingComment: state.comment.isSending
})

AppBody = connect(mapStateToProps)(AppBody)

export default AppBody
