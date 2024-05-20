import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';

//O BrowserRouter deve ser o componente que envolve tudo que depende do react-router.
//Router define as áreas em que vamos colocar os nossos route.
//Route recebe o caminha em path. Se esse caminho for o mesmo UR ele irá renederizar o componente que estiver dentro de element={}.

const App = () => {

    return(
        <BrowserRouter>

        <Header/>
        
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
        </BrowserRouter>
    )

}
export default App