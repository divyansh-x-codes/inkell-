import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';
import Loading from './Loading';

const Feed = ({ searchTerm }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    // Fetch API
    const fetchData = () => {
        fetch("https://newsdata.io/api/1/latest?apikey=pub_41ee7da20cf04244827e83380bc3c928&language=en")
            .then((response) => response.json())
            .then((result) => {
                setData(result.results);

                setLoading(false);
            })
            .catch((err) => {
                setError("Failed to load articles");
                setLoading(false);

            });
    };
    // Run once
    useEffect(() => {
        fetchData();

    }, []);

    // Search Filter
    const filteredData = data.filter((item) =>
        item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Loading
    

    return (
        <main className="feed-container">
            {/* Top Bar */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: '1px solid #e6e6e6',
                marginBottom: '10px'
            }}>
                <div style={{ display: 'flex' }}>

                    <div style={{
                        padding: '16px 20px',
                        borderBottom: '2px solid black'
                    }}>
                        For you
                    </div>

                    <div style={{
                        padding: '16px 20px',
                        color: 'gray'
                    }}>
                        Following
                    </div>

                </div>

                {/* Refresh */}
                <div
                    onClick={fetchData}
                    style={{
                        padding: '16px 20px',
                        cursor: 'pointer'
                    }}
                >
                    Refresh
                </div>

            </div>

            {/* Error */}
            {error && (

                <div style={{
                    color: 'red',
                    marginBottom: '10px'
                }}>
                    {error}
                </div>

            )}

            {/* Articles */}
            {filteredData.length > 0 ? (

                filteredData.map((item, index) => (

                    <ArticleCard
                        key={index}
                        article={item}
                    />

                ))

            ) : (

                <div style={{
                    textAlign: 'center',
                    padding: '40px',
                    color: 'gray'
                }}>
                    No articles found
                </div>

            )}

        </main>
    );
};

export default Feed;