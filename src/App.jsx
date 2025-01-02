import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Contact from './Components/Contact'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
