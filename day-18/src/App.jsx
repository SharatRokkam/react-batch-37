import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import './App.css'

const App = () => {
  return (
    <div>

        <h2>Todo Application</h2>
        <AddTodo/>
        <Todos />
    </div>
  )
}

export default App