import './Main.css'
import Button from '../Button/Button'
const Main = () => {

    return(
        <div className='box-principal'>
            <div className='box-info'>
                <div className='box-btn'>
                    <Button 
                        name="Lorem ipsum? "
                    />
                    <Button 
                        name="Lorem ipsum dolor sit amet consectetur"
                    />
                    <Button 
                        name="Lorem ipsum dolor sit amet consectetur"
                    />
                </div>
              
            </div>
        </div>
    )
}
export default Main