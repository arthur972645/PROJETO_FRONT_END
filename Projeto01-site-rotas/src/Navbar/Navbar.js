import { Link } from "react-router-dom";
import styled from "styled-components";

export const BoxTotal = styled.div`
display: flex;
justify-content: end;
align-items: center;
height: 120px;
margin-right: 20px;
` 
export const BoxTotal2 = styled.div`
display: flex;
align-items: center;
`
export const Linha = styled.div`
background-color: rgba(255, 255, 255, 0.289);
backdrop-filter: blur(10px);
height: 1px;
width: 800px;
`
export const BoxNavbar = styled.div`
background-color: rgba(125, 125, 125, 0.289);
border-radius: 10px;
backdrop-filter: blur(10px);
height: 90px;
width: 10000px;
display: flex;
align-items: center;
justify-content: space-around;
`
export const StyledLink = styled(Link)`
text-decoration: none;
font-size: 20px;
position: relative;


&::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0; /* Começa com largura zero */
  background-color: rgb(255, 255, 255); /* Cor da linha */
  transition: width 0.3s ease; /* Transição suave da largura */
}

&:hover::after {
  width: 100%; /* A linha expande para 100% da largura do link */
}
`