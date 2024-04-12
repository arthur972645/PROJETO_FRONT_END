import './Button.css'
import Iconi from '../../images/icon-plus.svg'

const Button = ({name}) => {
    
    return(

        <div className='btn'>
            <input type="button" value={name} />
            <img src={Iconi} alt="butao" className='iconi-img' />
        </div>
        
    )
}

export default Button