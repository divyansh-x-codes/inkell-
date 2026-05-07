import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import './App.css';

function App() {
  // State for search term to be shared between Navbar and Feed
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="app-container">
      {/* Banner */}
      <div style={{
        backgroundColor: '#ffc017',
        padding: '10px 20px',
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: '500',
        borderBottom: '1px solid #242424'
      }}>
        ✦ Get unlimited access to the best of Inkell for less than $1/week. 
        <span style={{ textDecoration: 'underline', marginLeft: '8px', cursor: 'pointer' }}>Become a member</span>
      </div>

      {/* Navbar */}
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Main Content Layout */}
      <div className="main-layout">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Center Feed */}
        <Feed searchTerm={searchTerm} />

        {/* Right Sidebar */}
        <Rightbar />
      </div>
    </div>
  );
}

export default App;