import './App.module.scss';
import {Header} from "./components/Header/Header";
import {Home} from "./components/Home/Home";
import {Contacts} from "./components/Contacts/Contacts";
import {Navigate, Route, Routes} from "react-router-dom";
import {routes} from "./Routes/routes";
import {MyProject} from './components/MyProjects/MyProject';
import {AboutMe} from "./components/AboutMe/AboutMe";

import React, {useState} from "react";
import s from './App.module.scss'

function App() {
    const [showMenu, setShowMenu] = useState(false)


    return (
        <div className={s.App}>
            <Header showMenu={showMenu} setShowMenu={setShowMenu}  />
            <Routes>
                <Route path='/' element={<Home  setShowMenu={setShowMenu} />}/>
                <Route path={routes.home} element={<Home  setShowMenu={setShowMenu} />}/>
                <Route path={routes.aboutMe} element={<AboutMe/>}/>
                <Route path={routes.myProjects} element={ <MyProject/>}/>
                <Route path={routes.contact} element={<Contacts/>}/>
                {/*<Route path={routes.skills} element={<Skills/>}/>*/}
                <Route path={routes.error404} element={<h1>PAGE NOT FOUND</h1>}/>
                <Route path='*' element={<Navigate to='/404'/>}/>
            </Routes>
        </div>
    )
}


export default App;

