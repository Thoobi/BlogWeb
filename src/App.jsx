import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'
import './App.css'
import Articles from './Articles';

function App() {

  return (
    <Router>
    <Navbar />
    <Routes>
        <Route path="/articles" element={<Articles />} />
        <Route path="/app" element={
    <>
      <h1>Welcome to Blog A</h1>
    </>
        } />
    </Routes>
    </Router>
  )
}

export default App
