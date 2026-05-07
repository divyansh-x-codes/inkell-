import React from "react";

const Rightbar = () => {

  const staffPicks = [
    {
      author: "Natalie Armendariz",
      title: "Coming Back to Center",
      date: "22h ago"
    },
    {
      author: "Olivia Bussey",
      title: "Whose wars are we allowed to forget?",
      date: "Dec 20, 2025"
    },
    {
      author: "Karla L. Miller",
      title: "Minor mendings",
      date: "Apr 29"
    }
  ];

  const topics = [
    "Programming",
    "AWS",
    "React",
    "Data Science",
    "AI Agent"
  ];

  const followUsers = [
    {
      name: "Aditi Sharma",
      bio: "AI researcher"
    },
    {
      name: "Ravi Mehta",
      bio: "Tech writer"
    }
  ];

  return (
    <div className="rightbar">

      {/* Staff Picks */}
      <h3>Staff Picks</h3>

      {staffPicks.map((item, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          
          <p>{item.author}</p>

          <h4>{item.title}</h4>

          <span>{item.date}</span>

        </div>
      ))}

      <p style={{ color: "green" }}>
        See full list
      </p>

      <hr />

      {/* Topics */}
      <h3>Recommended Topics</h3>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>

        {topics.map((topic, index) => (
          <button
            key={index}
            style={{
              border: "none",
              padding: "8px 14px",
              borderRadius: "20px",
              cursor: "pointer"
            }}
          >
            {topic}
          </button>
        ))}

      </div>

      <hr />

      {/* Follow Section */}
      <h3>Who to Follow</h3>

      {followUsers.map((user, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px"
          }}
        >

          <div>
            <h4>{user.name}</h4>
            <p>{user.bio}</p>
          </div>

          <button
            style={{
              padding: "6px 14px",
              borderRadius: "20px",
              border: "1px solid black",
              background: "white",
              cursor: "pointer"
            }}
          >
            Follow
          </button>

        </div>
      ))}

    </div>
  );
};

export default Rightbar;