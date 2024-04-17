import Button from "../Button/Button"
import './SctionCar.css'

const Sctioncar = ({tittle, text, image, color, bordaE, bordaD}) => {
    return(
        
        <article style={{backgroundColor: color, borderTopLeftRadius: bordaE, borderBottomLeftRadius: bordaE, borderTopRightRadius: bordaD, borderBottomRightRadius: bordaD }}>
            <div className="img">
                <img src={image} alt="" />
            </div>
            <h1>{tittle}</h1>
            <p>{text}</p>
            <Button nome= "Learn More"/>
        </article>
        
    )
}
export default Sctioncar