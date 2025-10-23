import React, { useState } from "react";
import "./Resources.css";

function Resources() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState({ type: "", subject: "", grade: "" });
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploads, setUploads] = useState([]);

  const handleUpload = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const tags = e.target.tags.value.split(",").map((tag) => tag.trim());
    const file = e.target.file.files[0];
    setUploads([...uploads, { title, tags, file }]);
    setShowUploadModal(false);
  };

  // Dummy data
  const resources = [
    // Notes/PDFs
    { id: 1, type: "pdf", title: "Algebra Notes", subject: "Math", grade: "9", thumbnail: "A" },
    { id: 2, type: "notes", title: "Biology Basics", subject: "Science", grade: "10", thumbnail: "B" },
    { id: 3, type: "pdf", title: "English Grammar", subject: "English", grade: "11", thumbnail: "E" },
    { id: 4, type: "notes", title: "Chemistry Formulas", subject: "Science", grade: "12", thumbnail: "C" },
    { id: 5, type: "notes", title: "World History Summary", subject: "History", grade: "11", thumbnail: "H" },
    { id: 6, type: "pdf", title: "Geometry Cheatsheet", subject: "Math", grade: "10", thumbnail: "G" },

    // Flashcards
    { id: 7, type: "flashcard", title: "Spanish Vocab", subject: "Languages", grade: "9", thumbnail: "S" },
    { id: 8, type: "flashcard", title: "Physics Terms", subject: "Science", grade: "12", thumbnail: "P" },
    { id: 9, type: "flashcard", title: "Literary Devices", subject: "English", grade: "11", thumbnail: "L" },
    { id: 10, type: "flashcard", title: "US Presidents", subject: "History", grade: "10", thumbnail: "U" },

    // Videos
    { id: 11, type: "video", title: "Calculus Explained", subject: "Math", grade: "12", thumbnail: "C" },
    { id: 12, type: "video", title: "Cell Structure", subject: "Science", grade: "9", thumbnail: "CS" },
    { id: 13, type: "video", title: "Shakespeare Summary", subject: "English", grade: "11", thumbnail: "Sh" },
    { id: 14, type: "video", title: "World War II Timeline", subject: "History", grade: "12", thumbnail: "WW2" },
  ];

  // Filtered resources
  const filtered = resources.filter((r) => {
    const matchType = filter.type ? r.type === filter.type : true;
    const matchSubject = filter.subject ? r.subject === filter.subject : true;
    const matchGrade = filter.grade ? r.grade === filter.grade : true;
    const matchSearch = searchTerm ? r.title.toLowerCase().includes(searchTerm.toLowerCase()) : true;
    return matchType && matchSubject && matchGrade && matchSearch;
  });

  return (
    <div className="resources-page">
      {/* Topbar */}
      <div className="resources-topbar">
        <button className="upload-btn" onClick={() => setShowUploadModal(true)}>
          Upload Resource
        </button>

        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="filters">
          <select onChange={(e) => setFilter({ ...filter, type: e.target.value })}>
            <option value="">Type</option>
            <option value="pdf">PDF</option>
            <option value="notes">Notes</option>
            <option value="flashcard">Flashcard</option>
            <option value="video">Video</option>
          </select>

          <select onChange={(e) => setFilter({ ...filter, subject: e.target.value })}>
            <option value="">Subject</option>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
            <option value="English">English</option>
            <option value="History">History</option>
            <option value="Languages">Languages</option>
          </select>

          <select onChange={(e) => setFilter({ ...filter, grade: e.target.value })}>
            <option value="">Grade</option>
            <option value="9">9th</option>
            <option value="10">10th</option>
            <option value="11">11th</option>
            <option value="12">12th</option>
          </select>
        </div>
      </div>

      {/* Resource Sections */}
      <div className="resource-section">
        <h2>Notes & PDFs</h2>
        <div className="resources-grid">
          {filtered.filter((r) => r.type === "notes" || r.type === "pdf").map((r) => (
            <div className="resource-card" key={r.id}>
              <div className="resource-thumbnail">{r.thumbnail}</div>
              <div className="resource-info">
                <div className="resource-title">{r.title}</div>
                <div className="resource-subject">{r.subject} - Grade {r.grade}</div>
              </div>
              <div className="resource-interactions">
                <button>👍 0</button>
                <button>⭐ 0</button>
                <button>💬 0</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="resource-section">
        <h2>Flashcards</h2>
        <div className="resources-grid">
          {filtered.filter((r) => r.type === "flashcard").map((r) => (
            <div className="resource-card" key={r.id}>
              <div className="resource-thumbnail">{r.thumbnail}</div>
              <div className="resource-info">
                <div className="resource-title">{r.title}</div>
                <div className="resource-subject">{r.subject} - Grade {r.grade}</div>
              </div>
              <div className="resource-interactions">
                <button>👍 0</button>
                <button>⭐ 0</button>
                <button>💬 0</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="resource-section">
        <h2>Videos</h2>
        <div className="resources-grid">
          {filtered.filter((r) => r.type === "video").map((r) => (
            <div className="resource-card" key={r.id}>
              <div className="resource-thumbnail">{r.thumbnail}</div>
              <div className="resource-info">
                <div className="resource-title">{r.title}</div>
                <div className="resource-subject">{r.subject} - Grade {r.grade}</div>
              </div>
              <div className="resource-interactions">
                <button>👍 0</button>
                <button>⭐ 0</button>
                <button>💬 0</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Upload Resource</h3>
            <form onSubmit={handleUpload}>
              <input type="text" name="title" placeholder="Title" required />
              <input type="text" name="tags" placeholder="Tags (comma separated)" />
              <select name="type" required>
                <option value="">Type</option>
                <option value="pdf">PDF</option>
                <option value="notes">Notes</option>
                <option value="flashcard">Flashcard</option>
                <option value="video">Video</option>
              </select>
              <select name="subject" required>
                <option value="">Subject</option>
                <option value="Math">Math</option>
                <option value="Science">Science</option>
                <option value="English">English</option>
                <option value="History">History</option>
                <option value="Languages">Languages</option>
              </select>
              <select name="grade" required>
                <option value="">Grade</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
              <input type="file" name="file" required />
              <div className="modal-actions">
                <button type="submit">Upload</button>
                <button type="button" onClick={() => setShowUploadModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Resources;
