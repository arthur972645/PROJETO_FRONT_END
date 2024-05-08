import React from "react"
const Forms = () => {

    const[nome, setNome] = React.useState('')
    const[email, setEmail] = React.useState('')

    function clickSubmit(event){
        event.preventDefault()
    }

    return(
        <form>
            <label onSubmit={clickSubmit}>Nome </label>
            <input 
                type="text"
                id="nome"
                value={nome}
                onChange= {({target}) => setNome(target.value)}
                
            />
            <p>{nome}</p>
            <label htmlFor="email">Email</label>
            <input 
                type="text"
                id="nome"
                value={email}
                onChange= {({target}) => setEmail(target.value)}
                
            />
            <p>{email}</p>
        </form>
    )
}
export default Forms
