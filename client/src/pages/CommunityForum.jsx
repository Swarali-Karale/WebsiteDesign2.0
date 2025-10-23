import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import "./CommunityForum.css";

/* -------------------------
   Helper UI pieces
   -------------------------*/

function Avatar({ initials, size = 44, bg }) {
  const style = {
    width: size,
    height: size,
    borderRadius: "999px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    color: "#ffffff",
    background: bg || "var(--accent-dark)",
    boxShadow: "0 4px 8px rgba(16,24,40,0.06)",
    flexShrink: 0,
  };
  return <div style={style}>{initials}</div>;
}

function Medal({ rank }) {
  if (rank === 1) {
    return <span className="medal medal-gold">🥇</span>;
  }
  if (rank === 2) {
    return <span className="medal medal-silver">🥈</span>;
  }
  if (rank === 3) {
    return <span className="medal medal-bronze">🥉</span>;
  }
  return <span className="rank-pill">{rank}</span>;
}

/* Polished leaderboard item */
function LeaderboardItem({ user }) {
  return (
    <div className="leaderboard-item card-compact">
      <div className="lb-left">
        <Avatar initials={user.initials} bg={user.color} />
        <div className="lb-rank">
          <Medal rank={user.rank} />
        </div>
      </div>
      <div className="lb-body">
        <div className="lb-name">{user.name}</div>
        <div className="lb-points">{user.points} pts</div>
      </div>
    </div>
  );
}

/* Generic post used across tabs */
function Post({
  post,
  onLike,
  onDislike,
  onReply,
  onShare,
  onMarkBestAnswer,
  showBestAnswerButton,
}) {
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleReply = () => {
    if (!replyText.trim()) return;
    onReply(post.id, {
      id: Date.now(),
      initial: "U",
      name: "You",
      preview: replyText,
      likes: 0,
      dislikes: 0,
      replies: [],
    });
    setReplyText("");
    setShowReplyBox(false);
  };

  return (
    <article className="post-card animate-pop">
      <div className="post-head">
        <div className="post-avatar">
          <Avatar initials={post.initial || post.name?.[0] || "U"} bg={post.color} />
        </div>
        <div className="post-meta">
          <div className="post-author">
            <strong>{post.name}</strong>
            <span className="post-time"> · {post.time || "now"}</span>
          </div>
          {post.title && <div className="post-title">{post.title}</div>}
        </div>
      </div>

      <p className="post-body">{post.preview}</p>

      {post.link && (
        <div className="post-link">
          <a href={post.link} target="_blank" rel="noreferrer">
            {post.linkText || post.link}
          </a>
        </div>
      )}

      <div className="post-actions">
        <button className="btn-flat" onClick={() => onLike(post.id)}>👍 {post.likes || 0}</button>
        <button className="btn-flat" onClick={() => onDislike(post.id)}>👎 {post.dislikes || 0}</button>
        <button className="btn-flat" onClick={() => setShowReplyBox((s) => !s)}>💬 {post.replies?.length || 0}</button>
        <button className="btn-flat" onClick={() => onShare(post)}>🔁 Share</button>
        {showBestAnswerButton && (
          <button className="btn-primary small" onClick={() => onMarkBestAnswer(post.id)}>✅ Mark Best Answer</button>
        )}
      </div>

      {showReplyBox && (
        <div className="reply-box">
          <textarea
            rows="2"
            placeholder="Write a reply..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <div className="reply-actions">
            <button className="btn-primary" onClick={handleReply}>Post Reply</button>
            <button className="btn-flat cancel" onClick={() => setShowReplyBox(false)}>Cancel</button>
          </div>
        </div>
      )}

      {post.isBestAnswer && <div className="best-answer">Best Answer ✓</div>}

      {post.replies?.length > 0 && (
        <div className="reply-list">
          {post.replies.map((r) => (
            <div key={r.id} className="reply-item animate-pop-sm">
              <div className="reply-left">
                <Avatar initials={r.initial || "U"} size={36} bg="#7aa7ff" />
              </div>
              <div className="reply-content">
                <div className="reply-meta"><strong>{r.name}</strong> · <span className="muted">reply</span></div>
                <div className="reply-text">{r.preview}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}

/* Resource card */
function ResourceCard({ r, onDownload, onBookmark, onShare }) {
  return (
    <div className="resource-card animate-pop">
      <div className="resource-left">
        <Avatar initials={r.initial} bg="#ffdede" />
      </div>
      <div className="resource-main">
        <div className="resource-title">{r.title}</div>
        <div className="resource-preview muted">{r.preview}</div>
        <div className="resource-actions">
          <button className="btn-flat" onClick={() => onDownload(r)}>⬇️ Download</button>
          <button className="btn-flat" onClick={() => onBookmark(r.id)}>{r.bookmarked ? "🔖 Bookmarked" : "🔖 Bookmark"}</button>
          <button className="btn-flat" onClick={() => onShare(r)}>🔁 Share</button>
        </div>
      </div>
    </div>
  );
}

/* Event card */
function EventCard({ e, onRsvp }) {
  return (
    <div className="event-card animate-pop">
      <div className="event-date">{e.date}</div>
      <div className="event-main">
        <div className="event-title">{e.title}</div>
        <div className="muted">{e.info}</div>
        <div style={{ marginTop: 8 }}>
          <button className={e.rsvp ? "btn-primary" : "btn-flat"} onClick={() => onRsvp(e.id)}>
            {e.rsvp ? "Going ✓" : "RSVP"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* -------------------------
   Main Component
   -------------------------*/
export default function CommunityForum() {
  const tabs = ["posts", "discussions", "resources", "announcements", "help", "events"];
  const [activeTab, setActiveTab] = useState("posts");
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("recent");
  const [visibleCount, setVisibleCount] = useState(6);

  /* Dummy data */
  const [posts, setPosts] = useState([
    { id: 1, initial: "B", color: "#66b3ff", name: "Bob", title: "SAT SCORES CAME OUT EARLY", preview: "Guess who got a 1600 👅 — celebrate with me!", likes: 12, dislikes: 1, replies: [], time: "2h" },
    { id: 2, initial: "M", color: "#ff92b0", name: "Mia", title: "I JUST BROKE A MACBOOK WITH CSS", preview: "One missing semicolon = chaos 😭", likes: 7, dislikes: 0, replies: [], time: "6h" },
    { id: 3, initial: "T", color: "#8de0a3", name: "Tyler", title: "Tiny tips to sleep before exams", preview: "Try a 15-min pre-sleep wind-down routine.", likes: 9, dislikes: 0, replies: [], time: "1d" },
  ]);
  const [discussions, setDiscussions] = useState([
    { id: 101, initial: "A", color: "#9fb4ff", name: "Alex", title: "Best note-taking app for college?", preview: "Notion vs Obsidian vs GoodNotes — what are you using?", likes: 15, dislikes: 1, replies: [], time: "3d" },
    { id: 102, initial: "S", color: "#ffd18f", name: "Sophie", title: "Pomodoro vs flow state — what works?", preview: "Long term results? share your method", likes: 10, dislikes: 2, replies: [], time: "2d" },
  ]);
  const [resources, setResources] = useState([
    { id: 201, initial: "L", name: "Leo", title: "📘 Free AP Chemistry Resources", preview: "Flashcards + summaries (chapter-wise).", link: "#", linkText: "View resource", likes: 30, dislikes: 0, bookmarked: false },
    { id: 202, initial: "C", name: "Carmen", title: "🧠 Memory Improvement YouTube Channels", preview: "Science-backed techniques playlist.", link: "#", linkText: "Open playlist", likes: 18, dislikes: 1, bookmarked: true },
  ]);
  const [announcements, setAnnouncements] = useState([
    { id: 301, initial: "A", name: "Admin", title: "🎉 Welcome to SkillSphere Beta!", preview: "Launching early access to first 500 users — enjoy!", likes: 45, dislikes: 0, time: "1w" },
    { id: 302, initial: "A", name: "Admin", title: "⚙️ Scheduled Maintenance", preview: "Forum downtime 2–4 AM PST this Sunday.", likes: 10, dislikes: 0, time: "4d" },
  ]);
  const [help, setHelp] = useState([
    { id: 401, initial: "J", color: "#7aa7ff", name: "Jamal", title: "How do I center a div in CSS?", preview: "Tried margin:auto and flex but not working.", likes: 8, dislikes: 0, replies: [{ id: 5001, initial: "K", name: "Kara", preview: "Use `display:flex; place-items:center; justify-content:center;` on parent", likes: 5, dislikes: 0 }], isBestAnswer: false },
    { id: 402, initial: "N", color: "#ffb86b", name: "Nina", title: "Best way to memorize dates?", preview: "Mnemonics or spaced repetition tips?", likes: 6, dislikes: 0, replies: [], isBestAnswer: false },
  ]);
  const [events, setEvents] = useState([
    { id: 501, date: "Oct 30", title: "30-Day Study Streak Challenge", info: "Share what you learned each day.", rsvp: false },
    { id: 502, date: "Nov 2", title: "AMA with College Officer", info: "Submit questions beforehand.", rsvp: true },
  ]);

  /* Leaderboard dummy */
  const [leaderboard] = useState([
    { rank: 1, initials: "AL", name: "Alice Lee", points: 128, color: "#50b8dc" },
    { rank: 2, initials: "BE", name: "Ben E.", points: 102, color: "#6fbdf0" },
    { rank: 3, initials: "CH", name: "Chloe H.", points: 88, color: "#ffd166" },
    { rank: 4, initials: "DA", name: "Darin", points: 72, color: "#a4d8eb" },
    { rank: 5, initials: "EM", name: "Emma", points: 65, color: "#b6e6f7" },
  ]);

  /* Composer state */
  const [newPost, setNewPost] = useState({ title: "", content: "" });

  /* Tab underline refs & logic */
  const tabsRef = useRef(null);
  const underlineRef = useRef(null);
  const [tabRects, setTabRects] = useState({});
  const activeTabIndex = tabs.indexOf(activeTab);

  useLayoutEffect(() => {
    const node = tabsRef.current;
    if (!node) return;
    const btns = [...node.querySelectorAll(".tab-btn")];
    const rects = {};
    btns.forEach((b, i) => {
      rects[tabs[i]] = b.getBoundingClientRect();
    });
    setTabRects(rects);
  }, [tabsRef.current, window.innerWidth, activeTab]); // eslint-disable-line

  useEffect(() => {
    function handleResize() {
      const node = tabsRef.current;
      if (!node) return;
      const btns = [...node.querySelectorAll(".tab-btn")];
      const rects = {};
      btns.forEach((b, i) => {
        rects[tabs[i]] = b.getBoundingClientRect();
      });
      setTabRects(rects);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 useEffect(() => {
  const rect = tabRects[activeTab];
  const container = tabsRef.current;
  if (!rect || !container) return;
  const containerRect = container.getBoundingClientRect();

  const left = rect.left - containerRect.left;
  const width = rect.width;

  const el = underlineRef.current;
  if (!el) return;

  el.style.transition = "transform 0.25s cubic-bezier(0.25, 1, 0.5, 1)";
  el.style.transform = `translateX(${left}px)`;
  el.style.width = `${width}px`;
}, [tabRects, activeTab]);


  /* Utility functions */
  const getCurrentData = () => {
    switch (activeTab) {
      case "posts": return posts;
      case "discussions": return discussions;
      case "resources": return resources;
      case "announcements": return announcements;
      case "help": return help;
      case "events": return events;
      default: return [];
    }
  };
  const setCurrentData = (data) => {
    switch (activeTab) {
      case "posts": return setPosts(data);
      case "discussions": return setDiscussions(data);
      case "resources": return setResources(data);
      case "announcements": return setAnnouncements(data);
      case "help": return setHelp(data);
      case "events": return setEvents(data);
      default: return;
    }
  };

  /* Interactions */
  const handleLike = (id) => {
    const updated = getCurrentData().map((p) => p.id === id ? { ...p, likes: (p.likes || 0) + 1 } : p);
    setCurrentData(updated);
  };
  const handleDislike = (id) => {
    const updated = getCurrentData().map((p) => p.id === id ? { ...p, dislikes: (p.dislikes || 0) + 1 } : p);
    setCurrentData(updated);
  };
  const handleReply = (parentId, reply) => {
    const updated = getCurrentData().map((p) => p.id === parentId ? { ...p, replies: [...(p.replies || []), reply] } : p);
    setCurrentData(updated);
  };
  const handleShare = async (post) => {
    const text = post.title ? `${post.name}: ${post.title}` : `${post.name}: ${post.preview?.slice(0, 80)}`;
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied to clipboard");
    } catch {
      alert("Clipboard not available");
    }
  };

  const handleNewPost = () => {
    if (!newPost.title.trim() || !newPost.content.trim()) return;
    const newEntry = {
      id: Date.now(),
      initial: "U",
      color: "#50b8dc",
      name: "You",
      title: newPost.title,
      preview: newPost.content,
      likes: 0,
      dislikes: 0,
      replies: [],
      time: "now",
    };
    setPosts([newEntry, ...posts]);
    setNewPost({ title: "", content: "" });
  };

  const handleDownload = (r) => alert(`Simulated download: ${r.title}`);
  const handleBookmark = (id) => {
    setResources(resources.map((r) => r.id === id ? { ...r, bookmarked: !r.bookmarked } : r));
  };
  const handleMarkBest = (id) => setHelp(help.map((h) => h.id === id ? { ...h, isBestAnswer: !h.isBestAnswer } : h));
  const handleRsvp = (id) => setEvents(events.map((e) => e.id === id ? { ...e, rsvp: !e.rsvp } : e));

  /* Search + filter */
  const applySearchFilter = (items) => {
    const q = searchQuery.trim().toLowerCase();
    const filtered = items.filter((p) => {
      if (!q) return true;
      const hay = `${p.name || ""} ${p.title || ""} ${p.preview || ""}`.toLowerCase();
      return hay.includes(q);
    });
    const sorted = filtered.sort((a, b) => {
      if (filter === "likes") return (b.likes || 0) - (a.likes || 0);
      if (filter === "dislikes") return (b.dislikes || 0) - (a.dislikes || 0);
      return (b.id || 0) - (a.id || 0);
    });
    return sorted;
  };

  const dataToShow = applySearchFilter(getCurrentData()).slice(0, visibleCount);

  const topics = ["Programming", "Productivity", "Study Tips", "College", "Machine Learning"];
  const topDiscussion = discussions.slice().sort((a, b) => (b.likes || 0) - (a.likes || 0))[0] || null;

  return (
    <div className="community-wrap">
      <div className="forum-container">
        <main className="forum-left">
          <div className="forum-header-left">
            <div>
              <h1 className="site-title">Community Forum</h1>
              <div className="site-sub">Where learners connect and grow 📚</div>
            </div>
          </div>

          {/* Composer (only on posts) */}
          {activeTab === "posts" && (
            <section className="composer card-compact animate-pop">
              <div className="composer-top">
                <Avatar initials="U" bg="#50b8dc" />
                <div className="composer-fields">
                  <input placeholder="Post title..." value={newPost.title} onChange={(e) => setNewPost({ ...newPost, title: e.target.value })} />
                  <textarea rows="3" placeholder="What's up?" value={newPost.content} onChange={(e) => setNewPost({ ...newPost, content: e.target.value })} />
                </div>
              </div>
              <div className="composer-bottom">
                <div className="composer-tags">
                  <button className="tag">study-group</button>
                  <button className="tag">share-insight</button>
                  <button className="tag">help-question</button>
                </div>
                <div>
                  <button className="btn-primary" onClick={handleNewPost}>Post</button>
                </div>
              </div>
            </section>
          )}

          {/* Tab bar (left-aligned) */}
          <nav className="tabs-wrap">
            <div className="tabs" ref={tabsRef}>
              {tabs.map((t) => (
                <button
                  key={t}
                  className={`tab-btn ${activeTab === t ? "active" : ""}`}
                  onClick={() => { setActiveTab(t); setSearchQuery(""); setVisibleCount(6); }}
                >
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
              <div className="tabs-underline" ref={underlineRef} />
            </div>
          </nav>

          {/* Search + filter */}
          <div className="searchbar-row">
            <input className="search-input" placeholder={`Search ${activeTab}...`} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <select className="filter-select" value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="recent">Most Recent</option>
              <option value="likes">Most Liked</option>
              <option value="dislikes">Most Disliked</option>
            </select>
          </div>

          <h2 className="feed-heading">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Feed</h2>

          <section className="feed-list">
            {dataToShow.length > 0 ? dataToShow.map((item) => {
              if (activeTab === "resources") {
                return <ResourceCard key={item.id} r={item} onDownload={handleDownload} onBookmark={handleBookmark} onShare={handleShare} />;
              }
              if (activeTab === "events") {
                return <EventCard key={item.id} e={item} onRsvp={handleRsvp} />;
              }
              return (
                <Post
                  key={item.id}
                  post={item}
                  onLike={handleLike}
                  onDislike={handleDislike}
                  onReply={handleReply}
                  onShare={handleShare}
                  onMarkBestAnswer={handleMarkBest}
                  showBestAnswerButton={activeTab === "help"}
                />
              );
            }) : <p className="muted">No {activeTab} found.</p>}
          </section>

          <div className="load-more-row">
            {applySearchFilter(getCurrentData()).length > visibleCount && (
              <button className="btn-flat load-more-btn" onClick={() => setVisibleCount((v) => v + 6)}>Load older posts ↓</button>
            )}
          </div>
        </main>

        <aside className="forum-right">
          <div className="sidebar card-compact animate-pop-sm">
            <h3>Top discussion this week 🔥</h3>
            {topDiscussion ? (
              <div className="spotlight">
                <div className="spot-title">{topDiscussion.title}</div>
                <div className="muted">{topDiscussion.preview}</div>
                <div style={{ marginTop: 8 }}>
                  <button className="btn-flat small" onClick={() => { setActiveTab("discussions"); setSearchQuery(topDiscussion.title); }}>View Thread →</button>
                </div>
              </div>
            ) : <p className="muted">No trending discussion yet.</p>}
          </div>

          <div className="sidebar card-compact animate-pop-sm">
            <h3>Top Students</h3>
            <div className="leaderboard">
              {leaderboard.map((u) => <LeaderboardItem key={u.rank} user={u} />)}
            </div>
          </div>

          <div className="sidebar card-compact animate-pop-sm">
            <h3>Recommended topics</h3>
            <div className="topic-cloud">
              {topics.map((t) => <button key={t} className="topic-pill" onClick={() => { setActiveTab("discussions"); setSearchQuery(t); }}>{t}</button>)}
            </div>
          </div>

          <div className="sidebar card-compact animate-pop-sm">
            <h3>Events & Weekly Challenge</h3>
            {events.map((ev) => (
              <div key={ev.id} className="event-mini">
                <div className="mini-left">{ev.date}</div>
                <div className="mini-body">
                  <div className="mini-title">{ev.title}</div>
                  <div className="muted">{ev.info}</div>
                </div>
                <div>
                  <button className="btn-flat small" onClick={() => handleRsvp(ev.id)}>{ev.rsvp ? "Going ✓" : "RSVP"}</button>
                </div>
              </div>
            ))}
            <hr />
            <div>
              <h4>Weekly Challenge 💪</h4>
              <div className="muted">Share one new study trick you used this week.</div>
              <div style={{ marginTop: 8 }}>
                <button className="btn-primary small" onClick={() => { setActiveTab("posts"); setSearchQuery("challenge"); }}>Take the Challenge</button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
