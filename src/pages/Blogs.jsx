import posts from "../lib/Posts";
import { Link } from "react-router-dom";

function Blogs() {
  return (
    <div>
      <h2>Blog Posts</h2>

      <ul style={{ listStyleType: "none", padding: 0 }}>
  {posts.map(post => (
    <li key={post.id}>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  ))}
</ul>

    </div>
  );
}

export default Blogs;