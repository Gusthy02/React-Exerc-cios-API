import { useState } from "react";

export default function ReceitaAleatoria() {
  const [receita, setReceita] = useState(null);

  async function buscar() {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const data = await res.json();

    setReceita(data.meals[0]);
  }

  return (
    <div>
      <button onClick={buscar}>Me Surpreenda</button>

      {receita && (
        <div
          style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}
        >
          <h2>{receita.strMeal}</h2>

          <img src={receita.strMealThumb} width="300" />

          <p>{receita.strInstructions}</p>
        </div>
      )}
    </div>
  );
}
