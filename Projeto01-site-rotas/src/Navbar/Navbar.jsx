import { Link } from "react-router-dom";
import React, { useState } from "react";
import  {StyledLink, BoxTotal, BoxTotal2, Linha, BoxNavbar} from './Navbar'
import './Navbar.css'
const Navbar = () => {
    
    const[activeLink, setActiveLink] = useState('')

    const HandleClick = (link) => {
        setActiveLink(link);
      };


    return(

    <BoxTotal>
            < BoxTotal2>
                <Linha></Linha>
            </BoxTotal2>
            
            <BoxNavbar>
                <StyledLink  
                    onClick={() => HandleClick('/planetas')}
                    to="/"> Planetas
                    
                    
                
                </StyledLink>
                
                <StyledLink to="/tecnoligas" > Tecnoligias </StyledLink>
                
                <StyledLink to= "/foguetes"> Foguetes</StyledLink>
            </BoxNavbar>
        </BoxTotal>
    )
}

export default Navbar;
