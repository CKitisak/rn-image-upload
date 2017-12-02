const api = (url, options = {}) => {
  return fetch(url, options)
    .then(response => response.json())
    .then(json => json)
    .catch(error => error)
}

export default api
