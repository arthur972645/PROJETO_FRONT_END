import Navbar from '../Navbar/Navbar.jsx'
import Home from '../Home/Home'
import Tecnoligias from '../Tecnoligias/Tecnologias.jsx'
import RotaPlanetas from '../RotaPlanetas/RotaPlanetas.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


const App = () => {
  return(
    <BrowserRouter>
      
      
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tecnoligas' element={<Tecnoligias/>}/>
        <Route path='/todos-os-planetas' element={<RotaPlanetas/>}/>
       
        
      </Routes>
    </BrowserRouter>
    
  )
}
export default App