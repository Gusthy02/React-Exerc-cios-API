export default function Endereco({ endereco }) {
  return (
    <div style={{ border: "1px solid black", padding: "15px", margin: "10px" }}>
      <p>CEP: {endereco.cep}</p>
      <p>Logradouro: {endereco.logradouro}</p>
      <p>Complemento: {endereco.complemento}</p>
      <p>Bairro: {endereco.bairro}</p>
      <p>Cidade: {endereco.localidade}</p>
      <p>UF: {endereco.uf}</p>
    </div>
  );
}
