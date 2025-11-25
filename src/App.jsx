import Nav from './Nav'
import Footer from './Footer'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import FormSetup from './FormSetup'
import Home from './Home'

function App() {
  return (
    <>
        <Nav />

        <Routes>
            <Route path='/' element={<Home/>}></Route>
        </Routes>

        <Footer/>
    </>
  )
}

export default App
