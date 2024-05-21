import './App.css';
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import Home from './pages/Home';
import Routing from './utils/Routing';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const mousefollower = () => {
      window.addEventListener("mousemove", (dets) => {
        document.querySelector(".mousecircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
      });
    };
    mousefollower();
  }, []);
  
  return (

    <div className="scroll-smooth">
      <div className="mousecircle fixed top-0 left-0 w-10 h-10 rounded-full bg-gray-100 z-50 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
      {/* <Routing /> */}
      <Navbar />
      <Home />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
