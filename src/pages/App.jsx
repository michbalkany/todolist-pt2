import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [textInput, setTextInput] = useState("")
  const [todos, updateTodos] =useState([])

  function handleSubmit() {
    let task = {
      label: textInput,
      done: false,
    }
    updateTodos((todos)=> [...todos, task])
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
    <div>{todos.map(task => {
      return task.label
    })}</div>
    </div>
  )
}

export default App
