function Profile() {
  const user = {
    name: 'Swarali',
    email: 'swarali@example.com',
    progress: 65,
    badges: ['React Beginner', 'Quiz Master', 'Profile Completed'],
  };

  return (
    <div className="container mt-5">
      <h2>Profile Page</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>


      <h4>Badges</h4>
      <div>
        {user.badges.map((badge, index) => (
          <span key={index} className="badge bg-primary me-2">{badge}</span>
        ))}
      </div>
    </div>
  );
}

export default Profile;
