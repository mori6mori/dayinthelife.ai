import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UploadMaterial from './components/UploadMaterial';
import HookGenerator from './components/HookGenerator';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UploadMaterial />} />
          <Route path="/hook-generator" element={<HookGenerator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;