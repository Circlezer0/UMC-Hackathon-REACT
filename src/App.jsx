// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './assets/pages/LoginPage'
import { AuthProvider } from "./assets/components/AuthContext"
import './App.css'

function App() {
  return (
    <><AuthProvider>
        <div className="root-wrap">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
      </AuthProvider>
      </>
  
  );
}

export default App;
