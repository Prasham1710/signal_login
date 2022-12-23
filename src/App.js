import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/loginpage'
import Signup from './components/signup'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/create' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
      <Signup/>
      </div>
      
    
  )
}

export default App