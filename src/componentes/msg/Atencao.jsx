export default function Atencao({ titulo = "ATENÇÃO", mensagem }) {
  return (
    <div
      style={{
        border: "2px solid orange",
        padding: "20px",
        backgroundColor: "#fff3cd",
        borderRadius: "8px",
        margin: "10px",
      }}
    >
      <h2>{titulo}</h2>
      <p>{mensagem}</p>
    </div>
  );
}
