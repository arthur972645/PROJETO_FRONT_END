import './navbar.css'
import Img from '../img/img13.png'

const Navbar = () => {
    return(
        <nav className='nav-bar'>
            <div className='info-nav-bar'>
                <div id='logo'>
                    <img src={Img} alt="" />
                </div>
                <div className='login-registrar'>
                    <div className='login'>
                        <p>Login</p>
                    </div>
                    <div className='registrar'>
                        <p>Registrar</p>
                    </div>
                </div>
            </div>
         
        </nav>
    )
}

export default Navbar