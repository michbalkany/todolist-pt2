import { useState } from 'react'

export function TodoList() {
  const [count, setCount] = useState(0)
  const [textInput, setTextInput] = useState("")
  const [todos, updateTodos] =useState([])
  const [editingId, setEditingId] = useState(null)

  function handleSubmit() {
    let task = {
      id: new Date.now(),
      label: textInput,
      done: false,
    }
    updateTodos((todos)=> [...todos, task])
    setTextInput('')
  }
  function handleDelete(id) {
    updateTodos((todos) => todos.filter(task => task.id !== id))
  }
  function handleDone(id){
    updateTodos((todos) => todos.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done }
      } else {
        return task
      }
    }))
    function handleEdit(id) { 
        setEditingId(id)
    }
    function handleUpdate(id, newLabel) {
        updateTodos((todos) => todos.map(task => {
            if (task.id === id) {
              return { ...task, label: newLabel }
            } else {
              return task
            }
        }))
        setEditingId(null) 
    }
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
          <div key={task.id} style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
            {task.label}
            <input className="btn btn-primary" type="done" value="Done"onClick={() => handleDone(task.id)}></input>
            <input className="btn btn-primary" type="delete" value="Delete" onClick={() => handleDelete(task.id)}/>
            <button onClick={() => handleEdit(task.id)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  )
}

