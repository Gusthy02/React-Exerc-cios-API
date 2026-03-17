import { useEffect, useState } from "react";

export default function PostsUsuario() {
  const [usuarios, setUsuarios] = useState([]);
  const [posts, setPosts] = useState([]);
  const [usuarioId, setUsuarioId] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsuarios(data));
  }, []);

  useEffect(() => {
    if (usuarioId) {
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${usuarioId}`)
        .then((res) => res.json())
        .then((data) => setPosts(data));
    }
  }, [usuarioId]);

  return (
    <div>
      <h2>Posts do Usuário</h2>

      <select onChange={(e) => setUsuarioId(e.target.value)}>
        <option>Selecione um usuário</option>

        {usuarios.map((u) => (
          <option key={u.id} value={u.id}>
            {u.name}
          </option>
        ))}
      </select>

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
