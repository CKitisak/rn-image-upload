import { call, put } from 'redux-saga/effects'
import { sendCommentFail, sendCommentSuccess } from './comment.action'
import { sendComment } from '../../_services/comment'

export function* onSendComment(action) {
  const response = yield call(sendComment, action.comment)
  if (response.code === 200) {
    yield put(sendCommentSuccess(response))
  } else {
    yield put(sendCommentFail(response))
  }
}
