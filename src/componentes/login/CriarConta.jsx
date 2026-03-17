export default function CriarConta() {
  return (
    <div style={{ maxWidth: "300px", margin: "auto" }}>
      <h2>Criar Conta</h2>

      <input placeholder="Nome" style={{ width: "100%", margin: "5px" }} />
      <input placeholder="Email" style={{ width: "100%", margin: "5px" }} />
      <input
        placeholder="Senha"
        type="password"
        style={{ width: "100%", margin: "5px" }}
      />

      <button style={{ width: "100%" }}>Criar Conta</button>
    </div>
  );
}
