
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Routing from "./utils/Routing";

function App() {
  return (
    <div className="bg-primary overflow-hidden bg-slate-100 scroll-smooth">
      <div className="pt-20 lg:pt-0">
      <Navbar />
      <Routing />
      </div>
    </div>
  );
}

export default App;