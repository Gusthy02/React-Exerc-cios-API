import Contato from "./Contato";

export default function ListaContatos() {
  const contatos = [
    {
      nome: "Machado de Assis",
      email: "machado@abl.org.br",
      telefone: "2121228800",
    },
    {
      nome: "Clarice Lispector",
      email: "clarice@email.com",
      telefone: "111111111",
    },
    {
      nome: "Carlos Drummond",
      email: "drummond@email.com",
      telefone: "222222222",
    },
  ];

  return (
    <div>
      {contatos.map((c, i) => (
        <Contato key={i} contato={c} />
      ))}
    </div>
  );
}
