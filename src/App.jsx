import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Contact from './Components/Contact'
import Useffect from './Components/Useefect'
import Useref from './Components/Useref'
import Nav from './Components/Navbar'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Contact/>}/>
        <Route path="/useeffect" element={<Useffect/>}/>
        <Route path="/useref" element={<Useref/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
