import { useEffect, useState, useRef } from 'react'
import './App.css'


function App() {

  const [todos, setTodos] = useState([])
  console.log(todos)
async function todo() {
  const res = await fetch('http://localhost:8080/api/todos')
  const data = await res.json()
  console.log(res)
  console.log(data)
}

  useEffect(() => {
 todo()
  }, [])
const textRef = useRef()

async function handleSubmit(e) {
  e.preventDefault()
  const todo = {
    text: textRef.current.value,
    
  
    }
  fetch('http://localhost:8080/api/todos', {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      'Content-Type': 'application/json'
    }
});



  return (
    <>
      <div>
       <h1>Todos</h1>
       <form onSubmit={handleSubmit}>
          <input ref={textRef} type="text" />
          <button>Add</button>
       </form>
        <ul>
          {todos.map((todo) => (
            <li key={todo._id}>{todo.text}</li>
          ))}
          </ul>
      </div>
    </>
  )
}
}
export default App
