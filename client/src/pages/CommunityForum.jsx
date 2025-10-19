import React, { useState } from "react";
import "./CommunityForum.css";

// --- Student Leaderboard Component ---
function StudentProfilesLeaderboard({ initial, name, points, rank }) {
  return (
    <div className="student-profile">
      <div className="rank">{rank}</div>
      <div className="student-circle">{initial}</div>
      <div className="student-info">
        <div className="student-name">{name}</div>
        <div className="student-points">{points} pts</div>
      </div>
    </div>
  );
}

// --- Search Bar Component ---
function SearchBarLocal({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
    onSearch && onSearch(e.target.value);
  }

  return (
    <input
      type="text"
      placeholder="Search discussions..."
      value={query}
      onChange={handleChange}
      className="search-bar"
    />
  );
}

// --- Post Component (recursive) ---
function Post({ initial, name, title, preview, depth = 0 }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [replies, setReplies] = useState([]);

  // Simulate share action
  const handleShare = async () => {
    const textToCopy = `${name} shared a post: "${title}" — from SkillSphere Community`;
    try {
      await navigator.clipboard.writeText(textToCopy);
      alert("Post link copied to clipboard! 📋");
    } catch (err) {
      alert("Clipboard not supported in this browser.");
    }
  };

  // Add new reply (mini post)
  const handleCommentSubmit = () => {
    if (!commentText.trim()) return;

    const newReply = {
      initial: "U", // Simulated current user
      name: "You",
      title: "",
      preview: commentText,
    };

    setReplies([...replies, newReply]);
    setCommentText("");
    setShowCommentBox(false);
  };

  return (
    <div
      className="post-card"
      style={{ marginLeft: depth * 30, marginTop: depth > 0 ? 10 : 20 }}
    >
      <div className="post-header">
        <div className="post-initial">{initial}</div>
        <div>
          <div className="post-author">By: {name}</div>
          {title && <div className="post-title">{title}</div>}
        </div>
      </div>

      <div className="post-preview">{preview}</div>

      <div className="post-actions">
        <button onClick={() => setLikes(likes + 1)}>👍 {likes}</button>
        <button onClick={() => setDislikes(dislikes + 1)}>👎 {dislikes}</button>
        <button onClick={() => setShowCommentBox(!showCommentBox)}>💬 Comment</button>
        <button onClick={() => setLikes(likes + 1)}>❤️ Like</button>
        <button onClick={handleShare}>🔁 Share</button>
      </div>

      {/* Comment box */}
      {showCommentBox && (
        <div className="comment-box">
          <textarea
            rows="2"
            placeholder="Write a reply..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <div className="comment-actions">
            <button onClick={handleCommentSubmit}>Post Reply</button>
            <button className="cancel" onClick={() => setShowCommentBox(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Recursive replies */}
      {replies.length > 0 && (
        <div className="reply-section">
          {replies.map((r, i) => (
            <Post
              key={i}
              initial={r.initial}
              name={r.name}
              title={r.title}
              preview={r.preview}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// --- Page Component ---
function CommunityForum() {
  return (
    <div className="community-page">
      <div className="forum-container">
        {/* LEFT COLUMN */}
        <div className="forum-left">
          <h1 className="forum-header">Community Forum</h1>
          <div className="composer">
            <h3>Hey everyone! 🎉</h3>
            <p>
              Get ready to share your favorite questions, topics and blah blah blah 🚀
            </p>
            <p>
              Please stay kind and civil and don't be degenerates. Love yall mwah &lt; 3
            </p>
            <div className="tag-section">
              <span className="tag">study-group</span>
              <span className="tag">share-insight</span>
              <span className="tag">help-question</span>
              <button className="add-tag">+ Add Tags</button>
            </div>
            <button className="post-btn">Post</button>
          </div>

          <div className="tab-bar">
            <button className="active">Post</button>
            <button>Discussion</button>
            <button>Resources</button>
            <button>Announcements</button>
          </div>

          <SearchBarLocal />
          <h2>Recent Discussions</h2>

          <Post
            initial="B"
            name="Bob"
            title="SAT SCORES CAME OUT EARLY"
            preview="Guess who got a 1600 👅"
          />
          <Post
            initial="M"
            name="Mia"
            title="I JUST BROKE A MACBOOK WITH CSS"
            preview="Why does one missing semicolon have this kind of power 😭"
          />
          <Post
            initial="T"
            name="Tyler"
            title="Teacher typed `pubic class` instead of `public`"
            preview="The entire class lost composure in 0.2 seconds"
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="forum-right">
          <div className="sidebar-card">
            <h3>Top discussion this week 🔥</h3>
            <div className="sidebar-item">
              <p>
                Share your best study habits or learn from others. How do you
                stay focused during sessions?
              </p>
              <button>Details →</button>
            </div>
            <div className="sidebar-item">
              <p>
                Seek feedback on your recent assignment and get suggestions for
                improvement.
              </p>
              <button>Details →</button>
            </div>
          </div>

          <div className="sidebar-card">
            <h3>Top Students</h3>
            <StudentProfilesLeaderboard rank={1} initial="A" name="Alice" points={128} />
            <StudentProfilesLeaderboard rank={2} initial="B" name="Ben" points={102} />
            <StudentProfilesLeaderboard rank={3} initial="C" name="Chloe" points={88} />
          </div>

          <div className="sidebar-card">
            <h3>Recommended topics</h3>
            <div className="topic-tags">
              <span>Programming</span>
              <span>Copywriting</span>
              <span>Productivity</span>
              <span>Machine learning</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityForum;
