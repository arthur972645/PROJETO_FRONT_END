import Texto from '../Texto/Texto.jsx'
import Navbar from '../Navbar/Navbar.jsx'
import { BoxTexto } from './Tecnologias.js'
import './Tecnologias.css'
import Card from '../Card/Card.jsx'


const Tecnoligias = () => {
  return(
    <section className='ImagemFundoTecnologias'>
      <Navbar/>
      <section className='main'>
      <Card/>
        <BoxTexto>
          <Texto
            titulo="Tecnologias Espaciais"
            paragrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti maiores tempora odit illo sed voluptas atque? Dolore voluptate ut, consequatur harum animi amet veniam officia dignissimos aspernatur omnis eligendi ipsam?"
          />
        </BoxTexto>
        
      </section>
      
      
    </section>
     
  )
}
export default Tecnoligias