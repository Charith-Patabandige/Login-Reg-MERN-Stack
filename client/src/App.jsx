import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup/>}></Route>
        <Route path='/register' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
