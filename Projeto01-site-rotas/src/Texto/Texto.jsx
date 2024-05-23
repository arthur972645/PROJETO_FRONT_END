import {Titulo, Subtitulo, Paragrafo} from './Texto.js'
import './Texto.css'
const Texto = ({titulo, subtitulo, paragrafo}) => {
  return(
    <section>
      <Titulo>{titulo}</Titulo>
      <Subtitulo>{subtitulo}</Subtitulo>
      <Paragrafo>{paragrafo}</Paragrafo>
    </section>
    
  )
}
export default Texto