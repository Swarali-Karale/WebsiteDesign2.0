export default function SignUp() {
  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Name" className="form-control mb-2" />
        <input type="email" placeholder="Email" className="form-control mb-2" />
        <input type="password" placeholder="Password" className="form-control mb-2" />
        <button type="submit" className="btn btn-success">Sign Up</button>
      </form>
    </div>
  );
}
