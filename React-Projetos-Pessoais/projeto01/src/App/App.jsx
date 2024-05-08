import Textos from '../Textos/Texto'
import Imagem from '../../src/assets/classificacao-interativa/images/icon-star.svg'
import './App.css'
import Button from '../Button/Button'

const App = () => {
  return (
    <div className="box-principal">

      <section className='Imagem'>
        <img src={Imagem} alt="" />
      </section>

      <section className='box-texto'>
        <Textos
          titulo='How did we do?'
          paragrafo='Please let us know how we did with you support request. All feedback is appreciated to help us improve ou offering'
        />
      </section>

      <section className='box-btn'>
          <Button value='1' />
          <Button value='2' />
          <Button value='3' />
          <Button value='4' />
          <Button value='5' />
      </section>
      <section className='box-btn02'>
        <button>SUBMIT</button>
      </section>
    </div>


  )
}
export default App