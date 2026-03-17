export default function Login() {
  return (
    <div style={{ maxWidth: "300px", margin: "auto" }}>
      <h2>Login</h2>

      <input placeholder="Email" style={{ width: "100%", margin: "5px" }} />
      <input
        placeholder="Senha"
        type="password"
        style={{ width: "100%", margin: "5px" }}
      />

      <button style={{ width: "100%" }}>Entrar</button>
    </div>
  );
}
