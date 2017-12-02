import { takeLatest } from 'redux-saga/effects'

import { SEND_COMMENT } from './comment/comment.action'
import { onSendComment } from './comment/comment.saga'

export default function* sagas() {
  yield takeLatest(SEND_COMMENT, onSendComment)
}
