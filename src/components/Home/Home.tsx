import React from 'react';
import s from './Home.module.scss'
import myPhoto from "../../assets/image/myPhoto.jpg";
import {NavLink} from "react-router-dom";
import {routes} from "../../Routes/routes";

export const Home = () => {
    const myAvatar = {
        backgroundImage: 'url(' + myPhoto + ')',

    };
    return (
        <div   className={s.mainBlock}>
            <div   className={s.mainContainer}>
                <div className={s.photo} style={myAvatar} ></div>

                <div className={s.intro}>
                    <div>
                    <h3> hi there</h3>

                    <h1><div>I'M <span>Askerko Alexandr</span></div></h1>
                    <p className={s.description}>I'm a frontend Developer based in Borisov, Belarus.<br/>
                        I strives to build web applications through carefully crafted code and users.</p>
                    </div>
                    <div className={s.navContainer}>
                        <NavLink to={routes.aboutMe} className={s.navItem}>more about me</NavLink>
                        <NavLink to={routes.myProjects} className={s.navItem}>my projects</NavLink>

                    </div>
                </div>

            </div>
        </div>
    );
};

