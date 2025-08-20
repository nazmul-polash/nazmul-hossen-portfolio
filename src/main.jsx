import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,  Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import Home from './pages/home/Home.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />}/>
      </Route>
    </Routes>
  </BrowserRouter>,
)
