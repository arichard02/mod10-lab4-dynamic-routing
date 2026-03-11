import { useParams, Link } from "react-router-dom";
import posts from "../lib/Posts";

export default function BlogDetails() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <h1>Post not found!!</h1>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Link to="/blog">← Back to Blogs</Link>
    </div>
  );
}
