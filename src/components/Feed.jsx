import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';
import Loading from './Loading';

const Feed = ({ searchTerm }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = () => {
        setLoading(true);
        setError(null);
        fetch("https://newsdata.io/api/1/latest?apikey=pub_41ee7da20cf04244827e83380bc3c928&language=en")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.results) {
                    setData(data.results);
                } else if (data.status === "error") {
                    throw new Error(data.message || "API error");
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
                setError("Failed to load stories. " + error.message);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    // Filter logic based on searchTerm
    const filteredData = data.filter(item =>
        item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <Loading />;

    if (error) return (
        <div style={{ padding: '40px', textAlign: 'center', color: '#6b6b6b' }}>
            <p style={{ marginBottom: '20px' }}>{error}</p>
            <button 
                onClick={fetchData}
                style={{
                    padding: '8px 16px',
                    borderRadius: '20px',
                    border: '1px solid #242424',
                    backgroundColor: 'white',
                    cursor: 'pointer'
                }}
            >
                Try Again
            </button>
        </div>
    );

    return (
        <main className="feed-container">
            <div style={{ display: 'flex', borderBottom: '1px solid #e6e6e6', marginBottom: '8px', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex' }}>
                <div style={{
                    padding: '16px 20px',
                    fontSize: '15px',
                    cursor: 'pointer',
                    color: '#242424',
                    borderBottom: '2px solid #242424',
                    marginBottom: '-1px'
                }}>
                    For you
                </div>
                <div style={{
                    padding: '16px 20px',
                    fontSize: '15px',
                    cursor: 'pointer',
                    color: '#6b6b6b'
                }}>
                    Following
                </div>
                <div 
                    onClick={fetchData}
                    style={{ 
                        padding: '0 20px', 
                        cursor: 'pointer', 
                        color: '#6b6b6b',
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '14px'
                    }}
                    title="Refresh feed"
                >
                    <i className="ti ti-refresh" style={{ marginRight: '5px' }}></i>
                    Refresh
                </div>
            </div>

            {/* Article List */}
            {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                    <ArticleCard key={index} article={item} />
                ))
            ) : (
                <div style={{ padding: '40px', textAlign: 'center', color: '#6b6b6b' }}>
                    No stories found matching "{searchTerm}"
                </div>
            )}
        </main>
    );
};

export default Feed;