import './Button.css'
import React from 'react'



const Button = ({value}) => {

  const [ativo, setAtivo] = React.useState(true)

  const handleClick = () => {
    setAtivo(!ativo); // Alterna o estado entre true e false
  };

  return(
    <div className="Button">
      {/* Vou clicar no botão e de inicio o valor do ativo é true, ao clicar no botão ele muda o valor do setAtivo para false, consequetemente do ativo, se o ativo agora é falso(ativo ? 'se for = ao valor do ativo do começo' : 'se for diferente do valor do ativo do começo'), ele vai chaamar o css do botao para o ativo falso, o mesmo ocore ao contrario */}
      <button onClick={handleClick} className={ativo ? 'botao-inativo' : 'botao-ativo'} >
        
        {value}
      </button>
    </div>
  )
}
export default Button