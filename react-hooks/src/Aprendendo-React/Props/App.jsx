import Props from "./Props"
import Pessoa  from "./Pessoa" 
import Lista from './Lista'
import './App.css'

const App = () => {
  return(
    <div className="box-principal">
      
      {/* (Vim do Props) Ja que la vc exportou, aqui vc importa, e chama ela dessa forma, passando o nome do conente, e o que vc quer nele,
      é como se fosse uma varaivel, onde se vc quiser mudar o valor, muda rapidamente e não na lodica */}
      <section className="Props">
        <Props
          name='arthur'
          imagem= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0369TuBOYnDpg3h1zm7AFqKk42G-S5N3Jd4x1DqOIJA&s'
        />
      </section>
      <section className="Pessoas">
        <Pessoa
          nome='chico moedas'
          idade='27'
          profissao='Mesdrcado financeiro'
          foto='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSVcXLECxbgUTytwX5fvu9vZdWq-ORU5Dr1V8gvDX6JQ&s'
        />
      </section>
      <section className="Lista">
        <h1>Minhs Lista</h1>
        <ul>
        <Lista
          marca="Ferrari"
          lancamento={1990}
        />
        <Lista
          marca="mercedez"
          lancamento={1920}
        />
        <Lista
          marca="aston martin"
          lancamento={1910}
        />
        </ul>
      
      </section>

    </div>
    
  )
}
export default App