import React from "react";

const ArticleCard = ({ article }) => {

  const title = article.title || "No Title Available";
  const description = article.description || "No description available for this story.";
  const author = article.creator?.[0] || "Unknown Author";
  const date = article.pubDate || "Recently";
  const image = article.image_url || "https://via.placeholder.com/120?text=No+Image";

  return (

    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px 0",
        borderBottom: "1px solid #ddd"
      }}
    >

      {/* Left Side */}
      <div style={{ flex: 1 }}>

        <p style={{ fontSize: "14px" }}>
          {author}
        </p>

        <h2
          style={{
            fontSize: "22px",
            margin: "10px 0"
          }}
        >
          {title}
        </h2>

        <p
          style={{
            color: "gray",
            marginBottom: "10px"
          }}
        >
          {description.slice(0, 120)}...
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            fontSize: "13px",
            color: "gray"
          }}
        >
          <span>{date}</span>
          <span>12 Likes</span>
        </div>

      </div>

      {/* Right Side Image */}
      <img
        src={image}
        alt="article"
        style={{
          width: "120px",
          height: "120px",
          objectFit: "cover",
          borderRadius: "5px"
        }}
      />

    </div>
  );
};

export default ArticleCard;