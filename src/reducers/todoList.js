import { fromJS } from 'immutable'

const defaultState = fromJS({

})

export default (state = defaultState, { type, payload }) => {
  switch(type) {
    default: 
      return state
  }
}