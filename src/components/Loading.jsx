import React from 'react';

const Loading = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '50px',
      color: '#6b6b6b'
    }}>
      <i className="ti ti-loader-2" style={{ 
        fontSize: '40px', 
        animation: 'spin 1s linear infinite' 
      }}></i>
      <p style={{ marginTop: '10px', fontSize: '14px' }}>Fetching latest stories...</p>
      
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Loading;