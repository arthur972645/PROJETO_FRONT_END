import React from "react";

const Lista = () => {
    
    const [items, setItems] = React.useState(['item 1', 'Item 2'])
    function NovoItem() {
        //setItems é uma função que permite modificar o estado da variavel items
        //ao clicar no botao, é criando uma nova matriz, com o novo intem adicionado, intems é um array
        setItems([...items, `Item ${items.length}`])
    }

    function RemoverItem(){
        //associa o array a uma varivel, depois pega essa array que é a varaivel e retirar o ultimo  e utiliza o setItem nessa varaivvel, que é o array item, pois vamos estar modificamos o item
        const novoItem = [...items];
        novoItem.pop()
        setItems(novoItem)        
    }



    return(
        <>
        {items.map((item, index) => (
            <li key={index}> {item}</li>
        ))}
        <button onClick={NovoItem}>Adicoinar novo intem</button>
        <button onClick={RemoverItem}>remover item</button>

        </>
    )
}

export default Lista