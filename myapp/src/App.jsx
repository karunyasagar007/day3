import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import NavBar from './components/NavBar'
import { Route, Router, Routes } from 'react-router-dom'
import Table from './components/Table'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'
import Name from './components/Name'
import Api from './components/Api'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/table" element={<Table />} />
        <Route path="/statebasics" element={<StateBasics />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/name" element={<Name />} />
        <Route path="/api" element={<Api />} />
        <Route path="/product" element={<Product />} />
      </Routes>

      {/* <Login />
      <Signup /> */}
      <NavBar />
      {/* <Counter /> */}

      
    </>
  );
}

export default App
