import { Link } from 'react-router-dom'
import styled from 'styled-components'
export const Planeta = styled.section`
background-color: rgba(11,13,25,255);
height: 80vh;
`
export const Planeta1 = styled.section`
display: flex;
flex-direction: row;
justify-content: space-around;
`
export const ImagemDoPlaneta1 = styled.img`
padding: 50px;
`
export const BoxPlaneta = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
export const BoxTextoPlaneta = styled.div`
width: 700px;
height: 350px;
border-radius: 30px;
background-color: rgba(55, 54, 54, 0.289);
backdrop-filter: blur(10px);
padding: 20px;
box-shadow: 0px 0px 61px -16px rgba(0,0,0,0.98);
box-shadow: 0px 0px 61px -16px rgba(0,0,0,0.98);
box-shadow: 0px 0px 61px -16px rgba(0,0,0,0.98);
`
export const TextoPlaneta1 = styled.div`
display: flex;
justify-content: center;
`
export const TextoPlanetas = styled.h1`
font-size: 40px;
letter-spacing: 10px;

`
export const ParagrafoPlaneta1 = styled.p`
margin-top: 20px;
font-size: 20px;
text-align: justify;
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

export const BoxBtn = styled.section`
height: 100px;
display: flex;
justify-content: center;
align-items:  center;
`