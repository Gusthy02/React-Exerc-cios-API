import { useState } from "react";

export default function PaisAleatorio() {
  const [pais, setPais] = useState(null);

  async function buscar() {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();

    const random = data[Math.floor(Math.random() * data.length)];

    setPais(random);
  }

  return (
    <div>
      <button onClick={buscar}>Me Surpreenda</button>

      {pais && (
        <div
          style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}
        >
          <h2>{pais.name.common}</h2>

          <p>Capital: {pais.capital}</p>

          <p>População: {pais.population}</p>

          <p>Região: {pais.region}</p>

          <img src={pais.flags.png} width="200" />
        </div>
      )}
    </div>
  );
}
