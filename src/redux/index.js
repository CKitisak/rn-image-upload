import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import sagas from './sagas'

const configureStore = () => {
  const middlewares = []

  const saga = createSagaMiddleware()
  middlewares.push(saga)

  if (__DEV__) {
    const logger = createLogger({ collapsed: true })
    middlewares.push(logger)
  }

  const store = createStore(reducers, applyMiddleware(...middlewares))

  saga.run(sagas)

  return store
}

export default configureStore
