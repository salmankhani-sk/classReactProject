import './App.css';
import Navbar from './pages/navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import Signin from './pages/singin';
import Signup from './pages/signup';
import Services from './pages/services';
import Contactus from './pages/contactus';
import About from './pages/about';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
