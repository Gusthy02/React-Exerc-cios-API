import "./styles.css";

import Erro from "./componentes/msg/Erro";
import Atencao from "./componentes/msg/Atencao";
import Sucesso from "./componentes/msg/Sucesso";

import Login from "./componentes/login/Login";
import CriarConta from "./componentes/login/CriarConta";

import Contato from "./componentes/contatos/Contato";
import ListaContatos from "./componentes/contatos/ListaContatos";
import Endereco from "./componentes/contatos/Endereco";

import ConsultaCEP from "./componentes/cep/ConsultaCEP";

import Usuarios from "./componentes/usuarios/Usuarios";

import ListaPosts from "./componentes/posts/ListaPosts";
import PostsUsuario from "./componentes/posts/PostsUsuario";

import ListaCategorias from "./componentes/refeicoes/ListaCategorias";
import RefeicoesCategoria from "./componentes/refeicoes/RefeicoesCategoria";
import ReceitaAleatoria from "./componentes/refeicoes/ReceitaAleatoria";

import PaisAleatorio from "./componentes/paises/PaisAleatorio";

export default function App() {
  const contatoExemplo = {
    nome: "Machado de Assis",
    email: "machado@abl.org.br",
    telefone: "2121228800",
  };

  const enderecoExemplo = {
    cep: "01001000",
    logradouro: "Praça da Sé",
    complemento: "",
    bairro: "Sé",
    localidade: "São Paulo",
    uf: "SP",
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Ex 01 */}
      {/* <Erro mensagem="Ocorreu um erro no sistema"/> */}

      {/* Ex 02 */}
      {/* <Atencao mensagem="Verifique os dados informados"/> */}

      {/* Ex 03 */}
      {/* <Sucesso mensagem="Operação realizada com sucesso"/> */}

      {/* Ex 04 */}
      {/* <Login/> */}

      {/* Ex 05 */}
      {/* <CriarConta/> */}

      {/* Ex 06 */}
      {/* <Contato contato={contatoExemplo}/> */}

      {/* Ex 07 */}
      {/* <ListaContatos/> */}

      {/* Ex 08 */}
      {/* <Endereco endereco={enderecoExemplo}/> */}

      {/* Ex 09 */}
      <ConsultaCEP />

      {/* Ex 10 */}
      {/* <Usuarios/> */}

      {/* Ex 11 */}
      {/* <ListaPosts/> */}

      {/* Ex 12 */}
      {/* <PostsUsuario/> */}

      {/* Ex 13 */}
      {/* <ListaCategorias/> */}

      {/* Ex 14 */}
      {/* <RefeicoesCategoria/> */}

      {/* Ex 15 */}
      {/* <ReceitaAleatoria/> */}

      {/* Ex 16 */}
      {/* <PaisAleatorio/> */}
    </div>
  );
}
