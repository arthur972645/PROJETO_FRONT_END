import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const BoxTexto = styled.div`
  //border: 2px solid red;
  height: 80vh;
  width: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledLink= styled(Link)`
cursor: pointer;
height: 50px;
width: 200px;
border-radius: 10px;
border: none;
color: rgb(255, 255, 255);
font-size: 16px;
font-weight: bold;
background-color: rgba(55, 54, 54, 0.289);
box-shadow: 0 0 20px rgba(12, 44, 250, 0.508);
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
transition: 0.3s ease;

&:hover{
    background-color: rgba(12, 44, 250, 0.508);;
}
`