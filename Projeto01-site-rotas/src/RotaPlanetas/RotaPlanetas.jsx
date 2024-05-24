import Footer from '../Footer/Footer.jsx'
import Navbar from '../Navbar/Navbar.jsx'
import Planetas from '../Planetas/Planetas.jsx'
import ImagemPlaneta2 from '../assets/space-tourism-website-main/starter-code/assets/destination/image-europa.png'
import ImagemPlaneta3 from '../assets/space-tourism-website-main/starter-code/assets/destination/image-mars.png'
import {MainNavbar} from './RotasPlanetas.js'
import './RotaPlanetas.css'

const RotaPlanetas = () => {
  return(
    
      <MainNavbar>
          <Navbar/>
          <Planetas
            ImagemPlaneta={ImagemPlaneta2}
          />
          <Planetas
            ImagemPlaneta={ImagemPlaneta3}
          />
          <Footer/>
      </MainNavbar>
      
    
  )
}
export default RotaPlanetas
