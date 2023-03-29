import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [textInput, setTextInput] = useState("")
  const [todos, updateTodos] =useState([])

  function handleSubmit() {
    let task = {
      id: Date.now(),
      label: textInput,
      done: false,
    }
    updateTodos((todos)=> [...todos, task])
  }
  function handleDelete(id) {
    updateTodos((todos) => todos.filter(task => task.id !== id))
  }
  console.log(todos)
  return (
    <div className="App container">
      <h1 className='todo-header text-center py-2'>Michs Daily Todo's</h1>
      <input className="form-control form-control-lg" type="text" placeholder="Type here..." aria-label=".form-control-lg example"
        onChange={(e) => {
          setTextInput(e.target.value)
        }}
        value={textInput}
      />
      <input className="btn btn-primary" type="submit" value="Submit"
      onClick={()=> handleSubmit()}
      />
    <div>
        {todos.map(task => (
          <div key={task.id}>
            {task.label} 
            <input className="btn btn-primary" type="delete" value="Delete" onClick={() => handleDelete(task.id)}
            /> 
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
