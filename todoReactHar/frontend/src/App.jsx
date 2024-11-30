import { useState } from 'react'

import './App.css'
import { CreateToDo } from './components/CreateToDo'
import { Todos } from './components/Todos'
function App() {

  const[todos, setTodos] = useState([])
  return (
    <div>
      <CreateToDo />
      <Todos todos={todos}/>
    </div>
  )
}

export default App
