import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';
import Loading from './Loading';

const Feed = ({ searchTerm }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // API Call Logic
        setLoading(true);
        fetch("https://newsdata.io/api/1/latest?apikey=pub_6e6595993e38434eb0ed4b22c0d80485")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.results) {
                    setData(data.results);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
                setError("Failed to load stories. Please try again later.");
                setLoading(false);
            });
    }, []);

    // Filter logic based on searchTerm
    const filteredData = data.filter(item =>
        item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <Loading />;

    if (error) return (
        <div style={{ padding: '40px', textAlign: 'center', color: '#6b6b6b' }}>
            <p>{error}</p>
        </div>
    );

    return (
        <main className="feed-container">
            {/* Tabs */}
            <div style={{ display: 'flex', borderBottom: '1px solid #e6e6e6', marginBottom: '8px' }}>
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