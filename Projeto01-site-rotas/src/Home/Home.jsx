import Texto from '../Texto/Texto.jsx'
import Navbar from '../Navbar/Navbar.jsx'
import {BoxTexto} from './Styles.js'
import './Home.css'

const Home = () => {
    return(
       
        <section className='ImagemFundo'>
           <Navbar/>
            <BoxTexto>
                <Texto
                    titulo="SO, YOU WANT TO TRAVEL TO"
                    subtitulo="SPACE"
                    paragrafo="   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
            
                />
            </BoxTexto>
      
        </section>
        
    )
} 
export default Home