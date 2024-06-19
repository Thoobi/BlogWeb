import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'
import Home from './Home';
import './App.css'
import Articles from './Articles';
import Footer from './Footer';

function App() {

  return (
    <Router>
    <Navbar />
    <Routes>
        <Route path="/articles" element={<Articles />} />
        <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
    </Router>
  )
}

export default App
