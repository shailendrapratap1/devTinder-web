
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Body from './Body'
import Login from './Login'



// import Navbar from './Navbar'

function App() {

  return (
    <>
    <BrowserRouter basename='/'>
    <Routes>
     <Route path="/" element={<Body />} >
       <Route path='/login' element={<Login/>}></Route>
     </Route>
    </Routes>
    </BrowserRouter>
    {/* <Navbar /> */}

    </>
  )
}

export default App
