export default function Sucesso({ titulo = "SUCESSO", mensagem }) {
  return (
    <div
      style={{
        border: "2px solid green",
        padding: "20px",
        backgroundColor: "#d4edda",
        borderRadius: "8px",
        margin: "10px",
      }}
    >
      <h2>{titulo}</h2>
      <p>{mensagem}</p>
    </div>
  );
}
