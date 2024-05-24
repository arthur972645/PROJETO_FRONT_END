import Texto from '../Texto/Texto.jsx'
import ImagemFoguete from '../assets/space-tourism-website-main/starter-code/assets/technology/image-space-capsule-landscape.jpg'
import './Card.css'
import { BoxImagem, Card, BoxCard, Img, BoxTextoCards } from './Card.js'
const Card1 = () => {
  return(
    
      <Card>
        <BoxCard>
          <BoxImagem>

            <Img src={ImagemFoguete} alt="" />
            
          </BoxImagem>
          <BoxTextoCards>

          <Texto
            paragrafo='Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti assumenda sapiente vitae molestias odit at eligendi modi voluptatem cumque sit amet, delectus corporis sed repellendus minima doloremque, mollitia libero nisi?'
          />
          </BoxTextoCards>
          
          
          
        </BoxCard>
      </Card>
  )
}
export default Card1