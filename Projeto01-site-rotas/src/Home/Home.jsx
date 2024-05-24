import Texto from '../Texto/Texto.jsx'
import Navbar from '../Navbar/Navbar.jsx'
import Card from '../Card/Card.jsx'
import {BoxTexto} from './Styles.js'
import './Home.css'
import Footer from '../Footer/Footer.jsx'
import Planetas from '../Planetas/Planetas.jsx'

const Home = () => {
    return(
        <section>
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
            <Planetas/>
            <Footer/>
        </section>
        
        
    )
} 
export default Home