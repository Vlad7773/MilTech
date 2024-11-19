import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TechPage from './pages/TechPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/tech' element={<TechPage/>}/>
    </Routes>
  </BrowserRouter>
</>);
