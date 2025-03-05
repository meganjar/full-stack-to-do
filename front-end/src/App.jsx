import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
async function test() {
  const res = await fetch('http://localhost:8080/test')
  const data = await res.json()
  console.log(res)
  console.log(data)
}

  useEffect(() => {
 test()
  }, [])



  return (
    <>
      <div>
        hello
      </div>
    </>
  )
}

export default App
