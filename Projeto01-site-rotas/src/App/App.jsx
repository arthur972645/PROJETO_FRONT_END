import Navbar from '../Navbar/Navbar.jsx'
import Home from '../Home/Home'
import Tecnologias from '../Tecnoligias/Tecnologias'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return(
    <BrowserRouter>
      
      
      
      <Routes>
        <Route
          
          path='/' element={<Home/>}
        />
        <Route path='/tecnoligas' element={<Tecnologias/>}/>
        
      </Routes>
    </BrowserRouter>
    
  )
}
export default App