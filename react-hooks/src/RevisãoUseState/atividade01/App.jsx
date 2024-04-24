import React from "react";
import './App.css'

const App = () => {
    
    const [contar, setContar] = React.useState(0)
    
    return(
        <>
            <button 
                className="btn-subtrair"
                onClick={() =>setContar(contar - 1)}
            >
                -
            </button>

            <p>
                {contar}
            </p>

            <button
            className="btn-somar"
                 onClick={() => setContar(contar + 1)}
            >
                +
            </button>
        </>
    )
}
export default App