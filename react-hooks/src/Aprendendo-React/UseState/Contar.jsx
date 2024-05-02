import React from "react"
const App =() =>{

  const[contar, setContar] = React.useState(0)
  const contarNumero = () =>{
    setContar(contar + 1)
  }
  const SubtrairNumero = () =>{
    setContar(contar - 1)
  }  


  return(
    <div>
      <h1>CONTAR - USE STATE</h1>
      <button onClick={contarNumero}>Contar</button>
      <p>{contar}</p>
      <button onClick={SubtrairNumero}>Retirar</button>
    </div>
  )
}
export default App