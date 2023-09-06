import './App.css'
import Home from './pages/Home'
import Programs from './pages/Programs'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/programs/:name" element={<Programs/>}  />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
