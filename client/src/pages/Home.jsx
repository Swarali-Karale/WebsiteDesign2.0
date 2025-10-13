function Home() {
  return (
    <div className="container-fluid mt-5">
      <h2>Welcome, Bestie pooks!</h2>

      <h4>Learning Progress</h4>
      <div className="progress mb-3">
        <div className="progress-bar" style={{width: '70%'}}>70%</div>
      </div>

      <h4>Recent Activity</h4>
      <ul className="list-group">
        <li className="list-group-item">Completed React Basics Lesson</li>
        <li className="list-group-item">Scored 80% on Quiz 1</li>
        <li className="list-group-item">Purchased new avatar outfit</li>
      </ul>

      {/* Add AI Suggestions here */}
      <div className="mt-4 p-3 border rounded bg-light">
        <h5>AI Suggestions</h5>
        <p>This section will show AI learning recommendations soon.</p>
      </div>
    </div>
  );
}

export default Home;
