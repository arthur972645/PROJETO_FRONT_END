import Card from '../Card/Card'
import ImgSedan from "../../images/icon-sedans.svg"
import ImgSuvs from "../../images/icon-suvs.svg"
import ImgLucury from "../../images/icon-luxury.svg"
import './App.css'

const App = () => {

  return(
    <section>
        <Card
          imagem={ImgSedan}
          titulo="SEDANS"
          texto="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur quo praesentium"
          color="hsl(31, 77%, 52%)"
        />

        <Card 
          imagem={ImgSuvs}
          titulo="SUVS"
          texto="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur quo praesentium"
          color="hsl(184, 100%, 22%)"
        />
         
         <Card
          imagem={ImgLucury}
          titulo="LUXURY"
          texto="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur quo praesentium"
          color="hsl(179, 100%, 13%)"
        />
    </section>
  
    
  )
}
export default App