
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import AtendimentosPorCidade from "./Pages/Assistenciais/GetAtendPacCidade";
import ResumoUndInt from "./Pages/ResUndInternacao/ResumoUndInternacao";
import MainPage from "./Pages/PaginaPrincipal/MainPage";
import Cirurgias from "./Pages/Cirurgias/Cirurgias";


const AppRouts = () => {
 
    return(
        <Router>
            <Routes>
                 <Route exact path='/' element={<MainPage/>} />
                 <Route exact path='/atendimentos_cidade' element={<AtendimentosPorCidade/>} />
                 <Route exact path='/at' element={<ResumoUndInt/>} />
                 <Route exact path='/cirurgias' element={<Cirurgias/>} /> 
                
            </Routes>
        </Router>
    )
}

export default AppRouts;