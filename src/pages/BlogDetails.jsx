import posts from "../lib/Posts";
import { useParams } from "react-router-dom";

function BlogDetails() {

  const { slug } = useParams();

  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}

export default BlogDetails;