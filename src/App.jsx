import { useState } from 'react'
import Head from './components/Head.jsx'
import './css/App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Index from './components/Index.jsx'
import About from './components/About.jsx'
import Give from './components/Give.jsx'
import Join from './components/Join.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Sponsors from './components/Sponsors.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Router>
    <Head />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/give" element={<Give />} />
        <Route path='join' element={<Join />} />
        <Route path='footer' element={<Footer />} /> {/* For Testing purposes */}
      </Routes>
    </Router>

    </>
  )
}

export default App
