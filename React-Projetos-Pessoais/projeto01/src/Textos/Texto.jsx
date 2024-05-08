import './Texto.css'

const Textos = ({titulo, paragrafo}) => {
  return (
    <div className="Textos">
      {/* How did we do? */}
      <h1>{titulo}</h1>
      {/* Please let us know how we did with you support request. All feedback is appreciated to help us improve ou offering */}
      <p>{paragrafo}</p>
    </div>
  )
}
export default Textos
