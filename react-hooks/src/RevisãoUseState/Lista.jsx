import React from "react";

const Lista = () => {
    
    const [items, setItems] = React.useState(['item 1', 'Item 2'])
    
    function HandleClick() {
        //setItems é uma função
        setItems([...items, "Novo intem"])
    }

    return(
        <>
        {items.map((item, index) => (
            <li key={index}> {item}</li>
        ))}
        <button onClick={HandleClick}>Adicoinar novo intem</button>

        </>
    )
}

export default Lista