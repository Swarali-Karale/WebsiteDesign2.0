import React from 'react';

const users = [
  { id: 1, name: 'Alice', points: 1500, avatar: '🦸‍♀️' },
  { id: 2, name: 'Bob', points: 1200, avatar: '🧙‍♂️' },
  { id: 3, name: 'Charlie', points: 1000, avatar: '🧛‍♂️' },
];

export default function Leaderboard() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Leaderboard</h2>
      <div className="list-group">
        {users.map((user, index) => (
          <div
            key={user.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>
                {index + 1}. {user.avatar}
              </span>
              {user.name}
            </div>
            <span className="badge bg-primary rounded-pill">{user.points} pts</span>
          </div>
        ))}
      </div>
    </div>
  );
}
