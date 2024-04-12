import './ButtonModal.css'

const ButtonModal = ({texto, setModal, modal}) => {
    return(
        <button onClick={() => setModal(!modal)}>{texto}</button>
    )
}   

export default ButtonModal