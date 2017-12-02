import api from '../_helper/api'

const sendComment = (comment) => {
  const data = new FormData();
  data.append('message', comment.message); // you can append anyone.
  data.append('photos', {
    uri: comment.image.uri,
    type: comment.image.type,
    name: comment.image.fileName
  });

  const options = {
    method: 'POST',
    body: data
  }
  const url = 'http://192.168.1.106:3003/photos/upload'

  return api(url, options)
}

export {
  sendComment
}
