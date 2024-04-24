import React from "react"

// const App = () => {

//   const ativo = true
  
//   return(
//     <button disabled={!ativo}>{ativo ? "botão ativo" : "botão inativo"} </button>  
//   )
// }
// export default App



//HOOKS:  
//Os hooks são funções especiais do React que permitem controlarmos o estado e o ciclo de vida de componentes funcionais 

//React.useState - É uma função que retorna um Arry com 2 valores . O primeiro valor guarda o dado do estado atual, que pode ser qualquer tipo de dado como srings, arrays, numeros, boolena, null, undefined ou objetos. O segundo valor é uma função  que pode ser utilizado para modificarmos o estado do primeiro

//Quando a função de modificação do estado é ativada, todos os componentes que dependerem do estado, setão redenrizados e os seus filhos também. É isso que garante a realatividade de componentes funcionais no React. 
const App = () => {
  const [ativo,setAtivo] = React.useState(true)
  const [contar, setContar] = React.useState(0)
  return(
    <>
      <button onClick={() => setAtivo(!ativo)}>
        {ativo ? "Botão Ativo" : "Botão inativo"}
      </button>
  
      <button onClick={() => setContar(contar + 1)}>
        {contar}
      </button>
    </>
    
  )
}
export default App