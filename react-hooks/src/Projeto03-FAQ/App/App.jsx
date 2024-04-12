//O App é usado como componente guarda chuva, ele vai gaudar todos os outros componentes da aplicação
import './App.css'
import Container from '../Container/Container'
import ContainerModal from '../continerModal/containerModal'
import React from 'react'

const App = () => {
    
    return(
        <Container>
            <ContainerModal
                textButton={"butao1"}
                textModal ={"texto1"}
            />
            <ContainerModal/>
            <ContainerModal
                textButton={"butao2"}
                textModal ={"texto2"}
            />
            <ContainerModal/>
        </Container>
    )
}

export default App