export default function Erro({ titulo = "ERRO", mensagem }) {
  return (
    <div
      style={{
        border: "2px solid red",
        padding: "20px",
        backgroundColor: "#ffe6e6",
        borderRadius: "8px",
        margin: "10px",
      }}
    >
      <h2>{titulo}</h2>
      <p>{mensagem}</p>
    </div>
  );
}
