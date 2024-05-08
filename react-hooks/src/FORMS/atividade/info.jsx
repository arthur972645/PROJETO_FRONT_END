const Forms = ({...props}) => {
  return(
    <label htmlFor="">
      NOME:
      <input 
        {...props}
      />
      <button>
        Enviar
      </button>
    
    </label>
  )
}
export default Forms