import React from 'react';
import { Provider } from 'react-redux';
import { buildStore } from './store'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TodoListConatiner from './containers/todoList'

const store = buildStore()

function App() {
  return (
    <Provider store={ store }>
      <Router>
        <Route path="/" component={ TodoListConatiner } />
      </Router>
    </Provider>
  );
}

export default App;
