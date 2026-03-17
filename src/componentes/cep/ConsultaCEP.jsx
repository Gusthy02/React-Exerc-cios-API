import { useState } from "react";
import Endereco from "../contatos/Endereco";

export default function ConsultaCEP() {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState(null);

  async function buscar() {
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await res.json();

    setEndereco(data);
  }

  return (
    <div>
      <input
        placeholder="Digite CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />

      <button onClick={buscar}>Buscar</button>

      {endereco && <Endereco endereco={endereco} />}
    </div>
  );
}
