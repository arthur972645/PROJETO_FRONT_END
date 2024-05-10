import styled from 'styled-components'

const Cores = {
    branco: '#fff',
    preto: '#000',
    amarelo: '#e1ce1b',
    rosa: '#f2d',
    verde: '#1ddc17'
}

export const Titulo = styled.h1`
    color: ${Cores.amarelo};
`

export const Titulo2 = styled.h1`
    color: ${Cores.preto};
`

export const Container = styled.div`
    width: 400px;
    height: 400px;
    margin: 0 auto;
    background-color: ${Cores.verde};
`