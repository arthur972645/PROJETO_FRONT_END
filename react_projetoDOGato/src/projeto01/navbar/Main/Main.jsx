import './Main.css'
import img01 from '../img/img-01.png'
import img02 from '../img/img-02.png'
import img03 from '../img/img-03.png'
import img04 from '../img/img-04.png'
import img05 from '../img/img-05.png'
import img06 from '../img/img-06.png'
import img07 from '../img/img-07.png'
import img08 from '../img/img-08.png'
import img09 from '../img/img-09.png'
import img10 from '../img/img-10.png'
import img11 from '../img/img-11.png'
import img12 from '../img/img-12.png'

const Main = () => {
    return(
        <main className='img-gatos'>
            <div className='grid-container'>
           
                <img className='grid-item' src={img01} alt="" />
                <img className='grid-item' src={img02} alt="" />
                <img className='grid-item' src={img03} alt="" />
                <img className='grid-item' src={img04} alt="" />
                <img className='grid-item' src={img05} alt="" />
                <img className='grid-item' src={img06} alt="" />
                <img className='grid-item' src={img07} alt="" />
                <img className='grid-item' src={img08} alt="" />
                <img className='grid-item' src={img09} alt="" />
                <img className='grid-item' src={img10} alt="" />
                <img className='grid-item' src={img11} alt="" />
                <img className='grid-item' src={img12} alt="" />
            </div>
           
        </main>
    )
}

export default Main