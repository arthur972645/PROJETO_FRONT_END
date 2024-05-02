import React from "react"
const Adicionar = () => {
  const[item, setItem] = React.useState(['']) 
  
  const AddBtn = () => {
    setItem([...item, `Item${item.length}`])

  }

  const RetirarAdd = () => {
    const novoIntem = [...item]
    novoIntem.pop()
    setItem(novoIntem)
  }


  return(
    <div>
      {item.map((item, index) => (
        <li key={index}> {item}</li>
      ))}
      <button onClick={AddBtn}>Adicinar</button>
      <button onClick={RetirarAdd}>Retirar</button>
    </div>

  )
}
export default Adicionar