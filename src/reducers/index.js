
import { combineReducers } from 'redux'
import { default as todoListReducer } from './todoList'

export const rootReducer = combineReducers({
  todoList: todoListReducer,
})