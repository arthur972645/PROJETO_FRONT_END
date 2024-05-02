

const App = () => {
  //para integrar algo do js, que ficaria nessa parte, no react é utilizado as {}
  const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0369TuBOYnDpg3h1zm7AFqKk42G-S5N3Jd4x1DqOIJA&s'
  const name = 'Arthur'
  function soma(a, b){
    return a + b
  }
  
  
  return(
      <div>
        <img src={url} alt="minha imagem" />
        <p>{name}</p>
        <p>{soma(2,4)}</p>
      </div>
  )
}
export default App