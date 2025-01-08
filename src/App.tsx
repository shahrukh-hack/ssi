import React from 'react';
import { Code2, Cpu, Globe2, Laptop, Mail, MapPin, Phone, Rocket, Users } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;