import ImagemPlaneta1 from '../assets/space-tourism-website-main/starter-code/assets/destination/image-europa.png'
import './Planetas.css'
const Planetas = () => {
    return(
        <section className="Planetas">
            <section className='Planeta1'>
                <section className='Imagem'>
                    <img  className='ImagemPlaneta1' src={ImagemPlaneta1} alt="" />
                </section>
                <div className='BoxPlaneta'>
                    <div className='BoxTextoPlaneta'></div>
                </div>
            </section>
        </section>
    )
}
export default Planetas