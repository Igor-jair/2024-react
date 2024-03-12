const MeuBotao = (props: any) => {
    return <button>{props.titulo}</button>;
}

const App = () => {
    return (
      <div>
        <h1>Bem vindo ao mundo React</h1>
        <MeuBotao titulo="primeiro botao"/>
        <MeuBotao titulo="segundo botao"/>
        <MeuBotao titulo="terceiro botao"/>
      </div>
    );
  }
  
  export default App;
  