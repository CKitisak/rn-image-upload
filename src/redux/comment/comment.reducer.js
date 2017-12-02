import {
  OPEN_IMAGE_PICKER, SELECT_IMAGE, WRITE_COMMENT,
  SEND_COMMENT, SEND_COMMENT_SUCCESS, SEND_COMMENT_FAIL
} from './comment.action'

const initialState = {
  image: null,
  isSending: false,
  message: null,
  sendingError: null
}

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_IMAGE:
      return {
        ...state,
        image: action.image
      }
    case WRITE_COMMENT:
      return {
        ...state,
        message: action.message
      }
    case SEND_COMMENT:
      return {
        ...state,
        isSending: true,
      }
    case SEND_COMMENT_SUCCESS:
      return {
        ...initialState
      }
    case SEND_COMMENT_FAIL:
      return {
        ...state,
        isSending: false,
        sendingError: action.error
      }
    default:
      return state
  }
}

export default commentReducer
