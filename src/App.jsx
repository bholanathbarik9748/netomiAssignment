import './App.css'
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Form from './page/form'

function App() {

  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
