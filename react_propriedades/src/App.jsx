const Titulo = (props) => {
  return(
      <h2 style={{color:props.cor}}>{props.texto}</h2>
  )
}

const Subtitulo = ({texto, cor}) => {
  return(
      <p style={{color:cor}}>{texto} </p>
  )
}

const Cabecalho =(props) => {
  return(
      <p>{props.children}</p>
  )
}

const App = () => {
  //O return so retorna uma coisa, para retornar mais é necessario usar um div
  //Eu to chamando a função que vai ter a logica de mudar de cor 
  return(
      <div>
          <Cabecalho>
              <p>Esse é o meu cabeçalho</p>
          </Cabecalho>
          <Titulo cor ="blue"  texto = "Meu titulo" />
          <Subtitulo cor="green" texto=" Meu subtitulo"/>
          <Titulo  cor = "red"texto= "oioio" />
          <Titulo texto = "oioio" />
      </div>
     
  )
}
export default App