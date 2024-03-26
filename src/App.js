import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layouts from './components/ui/Layouts'
import Login from './pages/Login'
import Register from './pages/Register'
import NoPageFound from './components/ui/NoPageFound'

export default function App() {
    return (
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layouts />}>
                  <Route index element={<Home />}></Route>
                  <Route path="login" element={<Login />}></Route>
                  <Route path="register" element={<Register />}></Route>
                  <Route path="*" element={<NoPageFound />}></Route>
              </Route>
              
            </Routes>
          </BrowserRouter>
    )
}
