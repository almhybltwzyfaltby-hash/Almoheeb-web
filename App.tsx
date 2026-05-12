import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CvOptimizer from './components/CvOptimizer';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <CvOptimizer />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;