import React from "react"

//O estado de uma aplicação  repreenta as caracteristicas dela naquele momento

const App = () => {

    const [ativo, setAtivo] = React.useState(true)
    const [contar, setContar] = React.useState(0)

    // function HandleClick() {
    //     setContar(contar + 1)
    // }

    return(
        <>
        <button 
            disabled={!ativo}
            onClick={() => {setAtivo(false)}}
        >
            Botao
        </button>

        <button
            onClick={() => setContar(contar + 1)}

        >
            {contar}
        </button>
        </>

    )
}
export default App