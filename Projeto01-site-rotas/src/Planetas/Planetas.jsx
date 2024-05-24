import ImagemPlaneta1 from '../assets/space-tourism-website-main/starter-code/assets/destination/image-europa.png'
import { Link } from 'react-router-dom'
import { Planeta, Planeta1, ImagemDoPlaneta1, BoxPlaneta, BoxTextoPlaneta, TextoPlaneta1, TextoPlanetas, ParagrafoPlaneta1, StyledLink, BoxBtn  } from './Planetas.js'


const Planetas = ({ImagemPlaneta, link}) => {
    
   



    return(
        
        <Planeta>
            <Planeta1>
                < ImagemDoPlaneta1 src={ImagemPlaneta} alt="" />
                
                <BoxPlaneta>
                    <BoxTextoPlaneta>
                        <TextoPlaneta1>
                            <TextoPlanetas>PLANETAS</TextoPlanetas>
                        </TextoPlaneta1>
                        
                        <ParagrafoPlaneta1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis magnam molestiae blanditiis odit. Totam expedita ipsa velit reiciendis, delectus sequi odit, maxime quasi provident dicta earum possimus cumque, vitae iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fugiat cum totam et quibusdam? Eveniet esse fugiat numquam repellat minus, vitae blanditiis dignissimos sit molestiae voluptatum eum dolor repudiandae possimus. lor

                        </ParagrafoPlaneta1>
                        <BoxBtn>{link}</BoxBtn>                    
                    </BoxTextoPlaneta>  
                </BoxPlaneta>
            </Planeta1>
        </Planeta>
    )
}
export default Planetas