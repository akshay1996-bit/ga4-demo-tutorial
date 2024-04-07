import { Login } from './components/LoginComponent'
import Home from './components/Home'
import './App.css'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Login />}></Route>
        <Route exact path='home' element={<Home />} ></Route>
      </Routes>
    </>
  )
}

export default App
