import { useDebugValue } from "react"
import React from "react"
import ButtonModal from "../ButtonModal/ButtoModal"
import Modal from "../Modal/Modal"

const ContainerModal = ({textButton, textModal}) => {
    
    const [modal, setModal] = React.useState(false)
    
    return(
        <div>
        <ButtonModal 
            texto={textButton} 
            setModal={setModal}
            modal={modal}
        
        />
        <Modal modal={modal} texto= {textModal}></Modal>
        </div>
      
    )
}

export default ContainerModal