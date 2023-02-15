import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar'
import About from './Components/About'
import Service from './Components/Service'
import Blog from './Components/Blog'
import Login from './Components/Login'
import Footer from './Components/Footer'

function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
