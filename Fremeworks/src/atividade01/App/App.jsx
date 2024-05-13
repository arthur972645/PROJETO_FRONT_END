import { Container, Imagem } from "../Styles/Styles"
import './App.css'
import ImagemPergume from '../../../Perfume-card/images/image-product-desktop.jpg'
import Textos from '../Textos/Textos'

const App = () => {
    return(
        <Container className="box-principal">
            {/* <Textos/> */}
            <Imagem src={ImagemPergume} alt="imagem do perfume"/>
            
        </Container>
    )
}
export default App