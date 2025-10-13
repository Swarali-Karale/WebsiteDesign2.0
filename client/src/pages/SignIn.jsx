import React, { useState } from 'react';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!email.includes('@')) {
    alert('Please enter a valid email.');
    return;
  }

  if (password.length < 6) {
    alert('Password must be at least 6 characters.');
    return;
  }

  alert(`Signing in with email: ${email}`);
};


  return (
    <div className="container mt-5">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email address</label>
          <input 
            type="email" 
            className="form-control" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input 
            type="password" 
            className="form-control" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
