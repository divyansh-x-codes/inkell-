import React from 'react';

const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      padding: '12px 24px',
      borderBottom: '1px solid #e6e6e6',
      backgroundColor: '#fff',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      gap: '12px'
    }}>
    
      <div style={{
        fontFamily: 'Georgia, serif',
        fontSize: '28px',
        fontWeight: '700',
        letterSpacing: '-1px',
        flexShrink: 0,
        cursor: 'pointer'
      }}>
        Inkell
      </div>

      {/* Search Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        background: '#f2f2f2',
        borderRadius: '99px',
        padding: '8px 16px',
        gap: '8px',
        maxWidth: '240px',
        flex: 1,
        marginLeft: '12px'
      }}>
        <i className="ti ti-search" style={{ fontSize: '16px', color: '#aaa' }}></i>
        <input 
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            border: 'none',
            background: 'transparent',
            fontSize: '14px',
            color: '#242424',
            width: '100%'
          }}
        />
      </div>

      {/* Nav Right */}
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: '#6b6b6b', cursor: 'pointer' }}>
          <i className="ti ti-edit" style={{ fontSize: '18px' }}></i>
          <span>Write</span>
        </div>
        <i className="ti ti-bell" style={{ fontSize: '20px', color: '#6b6b6b', cursor: 'pointer' }}></i>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          background: '#1a8917',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '13px',
          fontWeight: '600',
          color: '#fff',
          cursor: 'pointer'
        }}>
          U
        </div>
      </div>
    </nav>
  );
};

export default Navbar;