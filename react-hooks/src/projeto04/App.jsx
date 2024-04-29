import React from "react"
import Produto from "./Produto"

const App = () => {

    const [data, setData] = React.useState(null)

    async function getData(){
        const response = await fetch('https://ranekapi.origamid.dev/json/api/produto/tablet')
        
        const json = await response.json()
        setData(json)
    }
    
    
    return(
        <>
            <button onClick={getData}>Tablet</button>
            
            {data && <Produto data={data}/>}
        </>
    )
}
export default App