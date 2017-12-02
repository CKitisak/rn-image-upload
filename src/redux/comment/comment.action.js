export const OPEN_IMAGE_PICKER = 'OPEN_IMAGE_PICKER'
export const SELECT_IMAGE  = 'SELECT_IMAGE '
export const WRITE_COMMENT = 'WRITE_COMMENT'
export const SEND_COMMENT = 'SEND_COMMENT'
export const SEND_COMMENT_FAIL = 'SEND_COMMENT_FAIL'
export const SEND_COMMENT_SUCCESS = 'SEND_COMMENT_SUCCESS'

export const openImagePicker = () => ({
  type: OPEN_IMAGE_PICKER
})

export const selectImage = (image) => ({
  type: SELECT_IMAGE,
  image
})

export const writeComment = (message) => ({
  type: WRITE_COMMENT,
  message
})

export const sendComment = (comment) => ({
  type: SEND_COMMENT,
  comment
})

export const sendCommentFail = (error) => ({
  type: SEND_COMMENT_FAIL,
  error
})

export const sendCommentSuccess = (result) => ({
  type: SEND_COMMENT_SUCCESS,
  result
})
