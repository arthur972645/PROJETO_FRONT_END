import './Main.css'
import img01 from '../img/img01.png'
import Button from '../btn/button'

const Main = () => {
    return (
        <div className='container'>

            <div className='box-principal'>
                <div className=' box-img'>
                    <img src={img01} alt="" />
                </div>
                <div className='info'>
                    <div className='name'>
                        <h2>Arthur de Amorim</h2>
                    </div>
                    <div className='box-textinho'>
                        <p> Maceió, Alagoas Brasil</p>
                    </div>
                    <div className='box-textinho2'>
                        <p>"Lorem ipsum, dolor sit amet consectetu"</p>
                    </div>
                    <div className='box-btn'>
                        <Button
                            link="https://www.google.com"
                            name="GitHub"
                        />
                        <Button
                            link="https://www.github.com"
                            name="Linkedin"
                        />
                         <Button
                            link="https://www.github.com"
                            name="Instagram"
                        />
                         <Button
                            link="https://www.github.com"
                            name="Twwiter"
                        />
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Main