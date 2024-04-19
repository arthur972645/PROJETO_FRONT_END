import Body from '../Body/Body'
import ContainerText from '../ContainerText/Containertext'
import ImgBody from  '../../src/assets/Intro-form-component/Intro-form-component/images/bg-intro-desktop.png'
import ContainerCard from '../ContainerCard/ContainerCard'

const App = () => {

    return(
        <section className='sessao'>
            {/* <Body
                image={ImgBody}
            /> */}
            
            <ContainerText
                titulo="Learn to code by watching others"
                subtitulo="see how experienced devolopers olve problemaas in real- time
                Whatching scripeted tutorias is grat. but undertraing how devollopes thinks in invalble."
             />
            
        </section>
       
    )
}
export default App