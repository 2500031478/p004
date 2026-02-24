import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App1 from './App1.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/p004">
      <Routes>
        <Route path="/" element={<App1 />} />
        <Route path="/fc" element={<App1 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)