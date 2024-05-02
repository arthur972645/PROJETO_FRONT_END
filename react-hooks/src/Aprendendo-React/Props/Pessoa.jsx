
const Pessoa = ({nome, idade, foto, profissao}) => {
  return(
    <div>
      <h3>{nome}</h3>
      <h3>{idade}</h3>
      <h3>{profissao}</h3>
      <img src={foto} alt="" />
    </div>
  )
}
export default Pessoa