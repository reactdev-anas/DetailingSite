import './App.css'
import {BrowserRouter as Router, Routes,Route, } from 'react-router'
import { Home } from './views/Home'
import Services from './views/Services'
import OurWork from './views/OurWork'
import ContactUs from './views/ContactUs'
import Header from './components/Header'
function App() {

  return (
    <>
    <Router>
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/ourWork' element={<OurWork/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
    </Routes>
    </Router>
    
     
    </>
  )
}

export default App
