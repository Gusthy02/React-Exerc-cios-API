import { useEffect, useState } from "react";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsuarios(data));
  }, []);

  return (
    <div>
      <select
        onChange={(e) => {
          const u = usuarios.find((u) => u.id == e.target.value);
          setUsuario(u);
        }}
      >
        <option>Selecione</option>

        {usuarios.map((u) => (
          <option key={u.id} value={u.id}>
            {u.name}
          </option>
        ))}
      </select>

      {usuario && (
        <div>
          <h3>{usuario.name}</h3>
          <p>{usuario.email}</p>
          <p>{usuario.phone}</p>
        </div>
      )}
    </div>
  );
}
