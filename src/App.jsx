import Nav from './Nav'
import Footer from './Footer'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import FormSetup from './FormSetup'
import Home from './Home'
import FormEdu from './FormEdu'

function App() {
  return (
    <>
        <Nav />

        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/form' element={<FormSetup/>}></Route>
            <Route path='/form/education' element={<FormEdu/>}></Route>
        </Routes>

        <Footer/>
    </>
  )
}

export default App
