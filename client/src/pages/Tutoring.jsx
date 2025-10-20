import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Tutoring.css";

function Tutoring() {
  const [sessions, setSessions] = useState([
    {
      id: 1,
      topic: "Supply & Demand",
      creator: "Alice",
      dateTime: "2025-10-20T14:00",
      description: "Need help with basic supply & demand concepts",
      isPublic: true,
      tags: ["Economics", "Beginner"],
      participants: ["Alice"],
      rsvps: [],
      status: "upcoming",
    },
    {
      id: 2,
      topic: "Biology - Cell Structure",
      creator: "Ben",
      dateTime: "2025-10-19T16:00",
      description: "Reviewing cell organelles",
      isPublic: true,
      tags: ["Biology", "Advanced"],
      participants: ["Ben"],
      rsvps: [],
      status: "live",
    },
    {
      id: 3,
      topic: "Algebra - Quadratic Equations",
      creator: "Chloe",
      dateTime: "2025-10-21T10:00",
      description: "Practice solving quadratic equations",
      isPublic: true,
      tags: ["Math", "Intermediate"],
      participants: ["Chloe"],
      rsvps: [],
      status: "upcoming",
    },
    {
      id: 4,
      topic: "Physics - Newton's Laws",
      creator: "David",
      dateTime: "2025-10-19T15:00",
      description: "Understanding forces and motion",
      isPublic: true,
      tags: ["Physics", "Beginner"],
      participants: ["David"],
      rsvps: [],
      status: "live",
    },
    {
      id: 5,
      topic: "History - World War II",
      creator: "Eve",
      dateTime: "2025-10-22T12:00",
      description: "Discussion on causes and outcomes",
      isPublic: true,
      tags: ["History", "Advanced"],
      participants: ["Eve"],
      rsvps: [],
      status: "upcoming",
    },
    {
      id: 6,
      topic: "Chemistry - Periodic Table Trends",
      creator: "Frank",
      dateTime: "2025-10-20T11:00",
      description: "Explore periodic trends in elements",
      isPublic: true,
      tags: ["Chemistry", "Intermediate"],
      participants: ["Frank"],
      rsvps: [],
      status: "upcoming",
    },
    {
      id: 7,
      topic: "English - Essay Writing Tips",
      creator: "Grace",
      dateTime: "2025-10-19T14:30",
      description: "Improve structure and clarity",
      isPublic: true,
      tags: ["English", "Beginner"],
      participants: ["Grace"],
      rsvps: [],
      status: "live",
    },
    {
      id: 8,
      topic: "Math - Trigonometry",
      creator: "Henry",
      dateTime: "2025-10-21T09:00",
      description: "Sine, Cosine, Tangent practice",
      isPublic: true,
      tags: ["Math", "Advanced"],
      participants: ["Henry"],
      rsvps: [],
      status: "upcoming",
    },
    {
      id: 9,
      topic: "Computer Science - Java Basics",
      creator: "Isla",
      dateTime: "2025-10-19T13:30",
      description: "Learn loops, variables, and functions",
      isPublic: true,
      tags: ["CS", "Beginner"],
      participants: ["Isla"],
      rsvps: [],
      status: "live",
    },
    {
      id: 10,
      topic: "Biology - Genetics",
      creator: "Jack",
      dateTime: "2025-10-22T14:00",
      description: "Mendelian inheritance and Punnett squares",
      isPublic: true,
      tags: ["Biology", "Intermediate"],
      participants: ["Jack"],
      rsvps: [],
      status: "upcoming",
    },
  ]);

  const [newTopic, setNewTopic] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newDateTime, setNewDateTime] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [newTags, setNewTags] = useState("");

  const handleCreateSession = (startNow = false) => {
    if (!newTopic) return alert("Please enter a topic");
    const dateTime = startNow ? new Date().toISOString() : newDateTime;
    const tagsArray = newTags.split(",").map((t) => t.trim()).filter(Boolean);
    const newSession = {
      id: sessions.length + 1,
      topic: newTopic,
      creator: "You",
      dateTime: dateTime,
      description: newDescription,
      isPublic: isPublic,
      tags: tagsArray,
      participants: ["You"],
      rsvps: [],
      status: startNow ? "live" : "upcoming",
    };
    setSessions([newSession, ...sessions]);
    setNewTopic("");
    setNewDescription("");
    setNewDateTime("");
    setNewTags("");
    setIsPublic(true);
  };

  const handleRSVP = (id) => {
    setSessions(
      sessions.map((s) =>
        s.id === id && !s.rsvps.includes("You")
          ? { ...s, rsvps: [...s.rsvps, "You"] }
          : s
      )
    );
  };

  const handleJoinLive = (id) => {
    setSessions(
      sessions.map((s) =>
        s.id === id && !s.participants.includes("You")
          ? { ...s, participants: [...s.participants, "You"] }
          : s
      )
    );
  };

  const handleResolveSession = (id) => {
    setSessions(
      sessions.map((s) => (s.id === id ? { ...s, status: "resolved" } : s))
    );
  };

  return (
    <div className="tutoring-page d-flex flex-column min-vh-100" style={{ backgroundColor: "#FFFAFF" }}>
    <div className="container my-4 flex-grow-1">

      <h2 className="mb-4" style={{ color: "#0D3B66" }}>📝 Tutoring & Study Sessions</h2>

      {/* Create Session */}
      <div className="card shadow-sm p-3 mb-4">
        <h4 style={{ color: "#0D3B66" }}>Create a Session</h4>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Topic"
          value={newTopic}
          onChange={(e) => setNewTopic(e.target.value)}
        />
        <textarea
          className="form-control mb-2"
          placeholder="Description / questions"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <input
          type="datetime-local"
          className="form-control mb-2"
          value={newDateTime}
          onChange={(e) => setNewDateTime(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Tags (comma-separated)"
          value={newTags}
          onChange={(e) => setNewTags(e.target.value)}
        />
        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            checked={isPublic}
            onChange={() => setIsPublic(!isPublic)}
          />
          <label className="form-check-label">Public</label>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-primary" onClick={() => handleCreateSession(false)}>
            Schedule
          </button>
          <button className="btn btn-success" onClick={() => handleCreateSession(true)}>
            Start Now
          </button>
        </div>
      </div>

      {/* Explore Sessions */}
      <div className="card shadow-sm p-3">
        <h4 style={{ color: "#0D3B66" }}>Active / Upcoming Sessions</h4>
        {sessions.map((s) => (
          <div
            key={s.id}
            className={`card mb-2 p-2 ${
              s.status === "live"
                ? "border-success"
                : s.status === "resolved"
                ? "border-secondary text-muted"
                : "border-primary"
            }`}
            style={{
                borderColor: s.status === "live" ? "#0D3B66" : s.status === "resolved" ? "#6c757d" : "#0D3B66"
            }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5 style={{ color: "#0D3B66" }}>{s.topic}</h5>
                <p className="mb-1">{s.description}</p>
                <p className="mb-1 small">
                  Tags: {s.tags.join(", ")} | Creator: {s.creator}
                </p>
                <p className="mb-1 small">
                  Date/Time: {new Date(s.dateTime).toLocaleString()}
                </p>
                <p className="mb-1 small">Participants: {s.participants.join(", ")}</p>
                {s.status === "upcoming" && (
                  <p className="mb-1 small">RSVPs: {s.rsvps.join(", ") || "None"}</p>
                )}
                <p className="mb-0 small">
                  Status: {s.status.charAt(0).toUpperCase() + s.status.slice(1)}
                </p>
              </div>
              <div className="d-flex flex-column gap-2">
                {s.status === "upcoming" && (
                  <button className="btn btn-sm btn-primary" style={{ backgroundColor: "#0D3B66", borderColor: "#0D3B66" }} onClick={() => handleCreateSession(false)}>
                    RSVP
                  </button>
                )}
                {s.status === "live" && (
                  <button className="btn btn-sm btn-success" style={{ backgroundColor: "#0D3B66", borderColor: "#0D3B66" }} onClick={() => handleCreateSession(false)}>
                    Join
                  </button>
                )}
                {s.creator === "You" && s.status === "live" && (
                  <button className="btn btn-sm btn-warning" style={{ backgroundColor: "#0D3B66", borderColor: "#0D3B66" }} onClick={() => handleCreateSession(false)}>
                    Mark as Resolved
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Tutoring;