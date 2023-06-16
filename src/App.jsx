import Navbar from "./Components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Opportunities from "./pages/Opportunities.jsx";
import Principles from "./pages/Principles.jsx";
import Partners from "./pages/Partners.jsx";
import Job from "./pages/Job.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Footer from "./pages/Footer.jsx";
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Opportunities/>
      <Principles/>
      <Partners/>
      <Job/>
      <Portfolio/>
      <Footer/>
    </div>
  )
}

export default App
