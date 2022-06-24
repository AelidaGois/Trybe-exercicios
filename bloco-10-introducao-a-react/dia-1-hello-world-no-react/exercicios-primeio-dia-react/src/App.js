import React from "react"


const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['acordar', 'arrumar a casa', 'fazer café', 'tomar café', 'dar ração ao meu cachorro','fazer almoço', 'arrumar filha para a escola', 'almoçar', 'estudar', 'buscar filha na escola', 'fazer café da tarde', 'preparar janta', 'jantar', 'estudar novamente', 'assistir tv', 'dormir']
class App extends React.Component{
  render(){
    return(
      <ol>{tarefas.map((tarefa)=> Task(tarefa))}</ol>
    )
  }
}

export default App;
