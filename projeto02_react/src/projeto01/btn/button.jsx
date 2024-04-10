import './button.css'

const Button = ({link, name}) => {
  return(
    <div className='btn'>
        <a href={link}>
          <input type="button" value={name} />
        </a>
    </div>
   
  )
}

export default Button;

/** 
const Button = () => {

  const btnRedirecionar = (url) => {
    window.open(url, "_blanck")
  }

    return (
      <>
          <div className="btn">
              <button onClick={() => btnRedirecionar("https://github.com/arthur972645")}>GitHub</button>
              <button>Frontend Mentor</button>
              <button>Linkedin</button>
              <button>Twitter</button>
              <button>Instagram</button>
         
          </div>  
      </>
    )
  } 
  
  export default Button
*/
