import { useEffect, useState } from "react";

export default function ListaCategorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategorias(data.categories));
  }, []);

  return (
    <div>
      {categorias.map((c) => (
        <div
          key={c.idCategory}
          style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}
        >
          <h3>{c.strCategory}</h3>

          <p>{c.strCategoryDescription}</p>
        </div>
      ))}
    </div>
  );
}
