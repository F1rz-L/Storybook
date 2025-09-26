import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import About from './Components/About.jsx';
import { Router } from 'react-router';
import Home from './Home.jsx';
import Post1 from './Pages/Post1.jsx';
import Post2 from './Pages/Post2.jsx';
import Post3 from './Pages/Post3.jsx';

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/post/1" element={<Post1 />} />
      <Route path="/post/2" element={<Post2 />} />
      <Route path="/post/3" element={<Post3 />} />
    </Routes>
  </BrowserRouter>
  ,
)
