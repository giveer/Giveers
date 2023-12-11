import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './pages/navbar/Navbar';

export default function Main() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Main />);