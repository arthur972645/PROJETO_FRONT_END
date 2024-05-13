import styled from 'styled-components'

const Cores = {
    branco: '#fff'
}

export const Container = styled.div`
    height: 600px;
    width: 750px;
    background-color: ${Cores.branco};
    border-radius: 20px;
`

export const Imagem = styled.img`
    height: 600px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
`