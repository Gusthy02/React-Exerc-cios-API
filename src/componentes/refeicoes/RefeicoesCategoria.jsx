import { useEffect, useState } from "react";

export default function RefeicoesCategoria() {
  const [categorias, setCategorias] = useState([]);
  const [refeicoes, setRefeicoes] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategorias(data.categories));
  }, []);

  function buscar(categoria) {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`)
      .then((res) => res.json())
      .then((data) => setRefeicoes(data.meals));
  }

  return (
    <div>
      <h2>Categorias de Refeições</h2>

      <select onChange={(e) => buscar(e.target.value)}>
        <option>Selecione uma categoria</option>

        {categorias.map((c) => (
          <option key={c.idCategory}>{c.strCategory}</option>
        ))}
      </select>

      <div>
        {refeicoes.map((r) => (
          <div
            key={r.idMeal}
            style={{
              border: "1px solid gray",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h4>{r.strMeal}</h4>

            <img src={r.strMealThumb} width="200" />
          </div>
        ))}
      </div>
    </div>
  );
}
