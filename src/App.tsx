import "./App.css";

const MeuBotao = (props: any) => {
  return <button>{props.titulo}</button>;
}

const Usuario = (props: any) => {
  return (<h3>{props.nome}</h3>);
}

const ListaDeTarefas = (props: any) => {
  return (
    <>
      <h4>Tarefas como lista de objetos</h4>
      <ul>
        {
          props.dados.map((item: any) => {
            return <ItemTarefa key={item.id} titulo={item.titulo} />
          })
        }
      </ul>
    </>
  );
}

const ItemTarefa = (props: any) => {
  return (<li>{props.titulo}</li>);
}

const App = () => {
  const usuario = { nome: "igor" };
  const tarefas = [
    "Tarefa 01",
    "Tarefa 02"
  ];

  const tarefasMundoReal = [
    {
      id: 1,
      titulo: "aprender mais react",
      concluido: false,
    },
    {
      id: 2,
      titulo: "aprender mais react",
      concluido: false,
    },
    {
      id: 3,
      titulo: "aprender mais react",
      concluido: false,
    },
  ];

  return (
    <div className="aplicacao">
      <h1>Infoweb - React</h1>
      {
        usuario ?
          (<Usuario nome={usuario.nome} />) :
          (<MeuBotao titulo="Login" />)
      }

      {
        !usuario && (<MeuBotao titulo="Login" />)
      }
      <h4>Tarefas como lista de string</h4>
      <ul>
        {
          tarefas.map((item, indice) => {
            return (<li key={indice}>{item}</li>)
          })
        }
      </ul>
      <ListaDeTarefas dados={tarefasMundoReal}/>
    </div>
  );
}

export default App;
