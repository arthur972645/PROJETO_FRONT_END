
const Props = ({name, imagem})=> {
  //para trabalhar com prpos, vc tem que fazer um aquivo onde a 'logica' da propis vai estar, e vc vai modificar no componetne que vc esta chamando esse arquivo que tem a propis
  //passa a propis como parametro dessa forma e la no aquivo que vc ta chamando ( IR PARA O APP)
  return(
    <>
    <h1>Oi, {name}</h1>
    <img src={imagem} alt="" />
    </>
  )
}
export default Props