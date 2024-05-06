import Btn from '../Btn/Btn'
import Textos from '../Textos/Textos'
import './Container.css'


const Container = () => {
    return(
        <section>
            <section className='box-principal'>
                <Btn
                    numero='1'
                />
                <Btn
                    numero='2'
                />
                <Btn
                    numero='3'
                />
                <Btn
                    numero='4'
                />
                <Btn
                    numero='5'
                />
            
            </section>
            <button className='btn'></button>
        </section>  
      
        
        
    )
}
export default Container