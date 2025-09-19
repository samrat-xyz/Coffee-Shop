import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Menu from './pages/Menu.jsx';
import About from './pages/About.jsx';
import OrderOnline from './pages/OrederOnline.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/about' element={<About />} />
      <Route path='/orderonline' element={<OrderOnline />} />
    </Routes>
  </BrowserRouter>
)
