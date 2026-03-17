export default function Contato({ contato }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        borderRadius: "8px",
        margin: "10px",
        width: "250px",
      }}
    >
      <h3>{contato.nome}</h3>
      <p>Email: {contato.email}</p>
      <p>Telefone: {contato.telefone}</p>
    </div>
  );
}
