import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Music from './pages/Music';
import Live from './pages/Live';
import Bio from './pages/Bio';
import Contact from './pages/Contact';
import Producer from './pages/Producer';
import Visuals from './pages/Visuals';
import Press from './pages/Press';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/live" element={<Live />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/producer" element={<Producer />} />
          <Route path="/visuals" element={<Visuals />} />
          <Route path="/press" element={<Press />} />
          
          {/* Catch-all redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;