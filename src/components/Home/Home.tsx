import React from 'react';
import s from './Home.module.scss'
import myPhoto from "../../assets/image/photoAvatar.png";
import {NavLink} from "react-router-dom";
import {routes} from "../../Routes/routes";
import ReactTypingEffect from 'react-typing-effect';
type HomeType={

    setShowMenu:(showMenu:boolean)=>void
}

export const Home :React.FC<HomeType>= ({setShowMenu}) => {
    const myAvatar = {
        backgroundImage: 'url(' + myPhoto + ')',

    };
    const [windowSize, setWindowSize] = React.useState(
        window.innerWidth
    );

    React.useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });
    if(windowSize<=1060){setShowMenu(true)}
    return (
        <div style={myAvatar}   className={s.mainBlock}>
            <div   className={s.mainContainer}>
                <div className={s.photo}  ></div>

                <div className={s.intro}>
                    <div>
                    <h3> hi there</h3>
                    <h1><div>I'M <span> <ReactTypingEffect
                        text={["Askerko Alexandr"]}

                        speed={150}
                        eraseDelay={500}
                         typingDelay={200}
                         eraseSpeed={150}
                    /></span></div></h1>
                    <p className={s.description}>I'm a frontend Developer based in Belarus.<br/>
                        I strives to build web applications through carefully crafted code.</p>
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

