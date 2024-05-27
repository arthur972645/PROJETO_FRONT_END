import { Link } from 'react-router-dom'
import Imagem1Tecnologias from '../assets/space-tourism-website-main/starter-code/assets/technology/aaaa.png.png'
import './Tecnologias.css'



const Tecnoligias = ({link, imagemTecnologia}) => {
  return(
    <section className='tecnologias'>
        <div className='box-texto-tecnologias'> 

            <section className='box-tecnologias'>
              <h1 className='texto-tecnologias'>TECNOLOGIAS</h1>
            </section>
            <section className='paragrafo-texto'>
              <p className='paragrafo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium mollitia odio deleniti voluptas labore fuga nihil? Ab, hic. Dolor modi corporis sed ea iste asperiores ut eius quibusdam ab possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus eveniet adipisci laudantium? Mollitia molestiae non delectus totam pariatur iste tempore! Amet nobis eos placeat libero quam temporibus mollitia fugiat! Repudiandae?</p>
            </section>
            <div className='box-btn-tecnologias'>
              <button className='btn-tecnologias'>Tecnologias</button>
              
            </div>
        </div>
        
        <div className='Imagem-tecnologias'>
          <img src={Imagem1Tecnologias} alt="" />
        </div>
    </section>
     
  )
}
export default Tecnoligias