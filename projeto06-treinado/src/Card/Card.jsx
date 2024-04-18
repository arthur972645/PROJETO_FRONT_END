import Button from "../Button/Button";
import './Card.css'

const Card = ({imagem, titulo,texto, color}) => {
  return(
    <article style={{backgroundColor:color}}>
      <img src={imagem} alt="" />
      <h1>{titulo}</h1>
      <p>{texto}</p>
      <Button
          texto="Lear More"
        />
    </article>
  )
}

export default Card

// - Family: [Lexend Deca](https://fonts.google.com/specimen/Lexend+Deca)
// - Weights: 400

// - Family: [Big Shoulders Display](https://fonts.google.com/specimen/Big+Shoulders+Display)
// - Weights: 700