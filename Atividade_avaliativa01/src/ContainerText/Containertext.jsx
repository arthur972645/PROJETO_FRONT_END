import ContainerCard from '../ContainerCard/ContainerCard'
import './ContainerText.css'

const ContainerText = ({titulo, subtitulo}) => {
    return( 
        <article>
            <div className='box-info'>
                <h1>{titulo}</h1>
                <p>{subtitulo}</p>
            </div>
            
            <ContainerCard/>
        </article>
          
       
       
    )

}
 export default ContainerText