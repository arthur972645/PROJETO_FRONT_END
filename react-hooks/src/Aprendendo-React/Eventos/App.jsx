
const Eventos =() => {

  const EventoDoBtn = () => {
    console.log('botao atividado!!')
  }

  return(
    <div>
      <h1>TESTANDO EVENTOS</h1>
      <p>Clique para acionar um evento</p>
      <button onClick={EventoDoBtn}>Clique!</button>
    </div>
    

  )
}
export default Eventos