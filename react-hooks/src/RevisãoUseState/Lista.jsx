import React from "react";

const Lista = () => {
    
    const [items, setItems] = React.useState(['item 1', 'Item 2'])
    function NovoItem() {
        //setItems é uma função
        setItems([...items, `Item ${items.length}`])
    }

    function RemoverItem(){
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