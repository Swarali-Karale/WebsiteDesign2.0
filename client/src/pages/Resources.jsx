import React, { useState } from "react";
import "./Resources.css";

function Resources() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState({
    subject: "",
    grade: "",
    level: "",
    type: "",
  });
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploads, setUploads] = useState([]);

  const handleUpload = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const tags = e.target.tags.value.split(",").map(tag => tag.trim());
    const file = e.target.file.files[0];
    setUploads([...uploads, { title, tags, file }]);
    setShowUploadModal(false);
  };

  return (
    <div className="resources-container">
      {/* Search + Filter Bar */}
      <div className="resources-topbar">
        <input
          type="text"
          placeholder="Search resources..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />

        <div className="filters">
          <select onChange={(e) => setFilter({ ...filter, subject: e.target.value })}>
            <option value="">Subject</option>
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="english">English</option>
          </select>

          <select onChange={(e) => setFilter({ ...filter, grade: e.target.value })}>
            <option value="">Grade</option>
            <option value="9">9th</option>
            <option value="10">10th</option>
            <option value="11">11th</option>
            <option value="12">12th</option>
          </select>

          <select onChange={(e) => setFilter({ ...filter, level: e.target.value })}>
            <option value="">Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>

          <select onChange={(e) => setFilter({ ...filter, type: e.target.value })}>
            <option value="">Type</option>
            <option value="notecard">Notecard</option>
            <option value="cornell">Cornell Notes</option>
            <option value="summary">Summary</option>
          </select>
        </div>
      </div>

      {/* Upload Button */}
      <div className="upload-section">
        <button onClick={() => setShowUploadModal(true)}>Upload Your Notes</button>
      </div>

      {/* Recommended Notes */}
      <h2>Recommended Notes</h2>
      <div className="scroll-container">
        {[1, 2, 3, 4].map((n) => (
          <div className="file-card" key={n}></div>
        ))}
      </div>

      {/* Recommended Flashcards */}
      <h2>Recommended Flashcards</h2>
      <div className="scroll-container">
        {[1, 2, 3, 4].map((n) => (
          <div className="file-card" key={n}></div>
        ))}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Upload Your Notes</h3>
            <form onSubmit={handleUpload}>
              <input type="text" name="title" placeholder="Title" required />
              <input type="text" name="tags" placeholder="Tags (comma separated)" />
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


