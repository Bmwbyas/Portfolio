import './App.scss';
import {Header} from "./components/Header/Header";
import {Home} from "./components/Home/Home";
import Skills from "./components/Skills/Skills";

import Contacts from "./components/Contacts/Contacts";
import {Navigate, Route, Routes} from "react-router-dom";
import {routes} from "./Routes/routes";
import {MyProject} from './components/MyProjects/MyProject';


function App() {

    return (
        <div className='App'>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path={routes.home} element={<Home/>}/>
                <Route path={routes.skills} element={<Skills/>}/>
                <Route path={routes.myProjects} element={ <MyProject/>}/>
                <Route path={routes.contact} element={<Contacts/>}/>
                <Route path={routes.error404} element={<h1>PAGE NOT FOUND</h1>}/>
                <Route path='*' element={<Navigate to='/404'/>}/>
            </Routes>
        </div>
    )
}


export default App;

