
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import Login from './components/Login'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import Feed from './components/Feed'
import Profile from './components/Profile'



 
// import Navbar from './Navbar'

function App() {

  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter basename='/'>
    <Routes>
     <Route path="/" element={<Body />} >
     <Route path='/' element={<Feed />}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/profile' element={<Profile/>}> </Route>
     </Route>
    </Routes>
    </BrowserRouter>
    {/* <Navbar /> */}
    </Provider>

    </>
  )
}

export default App
