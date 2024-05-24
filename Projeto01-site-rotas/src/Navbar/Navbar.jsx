import { Link } from "react-router-dom";
import  {StyledLink, BoxTotal, BoxTotal2, Linha, BoxNavbar} from './Navbar'
import './Navbar.css'
const Navbar = () => {
    
  

    return(

    <BoxTotal>
            < BoxTotal2>
                <Linha></Linha>
            </BoxTotal2>
            
            <BoxNavbar>
                <StyledLink to="/" > Home  </StyledLink>    
                <StyledLink to="/tecnoligas" > Tecnoligias </StyledLink>
                <StyledLink  to="/todos-os-planetas"> Planetas </StyledLink>
            </BoxNavbar>
        </BoxTotal>
    )
}

export default Navbar;
