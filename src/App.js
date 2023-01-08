import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginpage from './components/loginpage'
import Signup from './components/signup'
const App = () => {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Loginpage/>} />
        <Route path='/create' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
      
    
  )
}

export default App