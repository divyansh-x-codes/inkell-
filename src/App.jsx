import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="app-container">
      
      <div style={{
        backgroundColor: '#ffc017',
        padding: '10px 20px',
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: '500',
        borderBottom: '1px solid #242424'
      }}>
        ✦ Get unlimited access to the best of Medium for less than $1/week. 
        <span style={{ textDecoration: 'underline', marginLeft: '8px', cursor: 'pointer' }}>Become a member</span>
      </div>

      
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      
      <div className="main-layout">
        
        <Sidebar />

        
        <Feed searchTerm={searchTerm} />

        
        <Rightbar />
      </div>
    </div>
  );
}

export default App;