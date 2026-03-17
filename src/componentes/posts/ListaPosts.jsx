import { useEffect, useState } from "react";

export default function ListaPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      {posts.map((p) => (
        <div
          key={p.id}
          style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}
        >
          <h4>{p.title}</h4>
          <p>{p.body}</p>
        </div>
      ))}
    </div>
  );
}
