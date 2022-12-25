import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginpage from './components/loginpage'
import Signup from './components/Signup'
const App = () => {
  return (
    <div>
      <Loginpage/><BrowserRouter>
      <Routes>

        <Route path='/create' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
      <Signup/>
      </div>
      
    
  )
}

export default App