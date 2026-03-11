import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>

      <Link to="/blog">Go to Blogs</Link>
    </div>
  );
}