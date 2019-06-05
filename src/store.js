import { createStore } from 'redux'
import { fromJS, Map } from 'immutable'
import { rootReducer } from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'

const defaultInitialStore = fromJS({
})

const composeEnhancers = composeWithDevTools({})

export const buildStore = (initialState = defaultInitialStore) => {
  if (!Map.isMap(initialState)) initialState = fromJS(initialState)

  return createStore(rootReducer, initialState, composeEnhancers())
}