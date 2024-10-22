import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Eatnow from './pages/Eatnow.jsx'
import Cheeze from './pages/Cheeze.jsx'
import Coffee from './pages/Coffee.jsx'
import {Route,Routes,BrowserRouter} from "react-router-dom"


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 <Routes>
 <Route path="/" element={<App />} />
   <Route path="/eatnow" element={<Eatnow/>} />
   <Route path="/cheeze" element={<Cheeze />} />
   <Route path="/coffee" element={<Coffee />} />
 </Routes>
 </BrowserRouter>
)
