import SctionCar from "../../SctionCar/SctionCar"
import IconSedan from  "../../../column-card/images/icon-sedans.svg"
import IconSuvs from  "../../../column-card/images/icon-suvs.svg"
import IconLuxury from  "../../../column-card/images/icon-luxury.svg"
import './App.css'


const App = () => {
    return(
        <section>
             <SctionCar 
            tittle = "SEDANS"
            text = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatum, vero repudiandae eius iure blanditiis animi. Consectetur soluta qui earum sint ipsum, doloribus, minus, deserunt deleniti alias perspiciatis tempora fugiat."
            image={IconSedan}
            color="hsl(31, 77%, 52%)"
            bordaE="10px"
            />


            <SctionCar
            tittle = "SEDANS"
            text = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatum, vero repudiandae eius iure blanditiis animi. Consectetur soluta qui earum sint ipsum, doloribus, minus, deserunt deleniti alias perspiciatis tempora fugiat."
            image={IconSuvs}
            color="hsl(184, 100%, 22%)"
            />


            
            <SctionCar
            tittle = "SEDANS"
            text = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatum, vero repudiandae eius iure blanditiis animi. Consectetur soluta qui earum sint ipsum, doloribus, minus, deserunt deleniti alias perspiciatis tempora fugiat."
            image={IconLuxury}
            color="hsl(179, 100%, 13%)"
            bordaD="10px"
            />

        </section>
       
    )

}

export default App