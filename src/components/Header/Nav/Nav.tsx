import React from 'react';
import s from './Nav.module.scss'
import {NavLink} from "react-router-dom";
import {routes} from "../../../Routes/routes";
import aboutMeImage from "../../../assets/image/socialIcon/icons8-user.png";
import contactImage from "../../../assets/image/socialIcon/icons8-chat.png";
import homeImage from "../../../assets/image/icons8-home.png";
import projectsImage from "../../../assets/image/icons8-projects.png";
// import skillImage from "../../../assets/image/socialIcon/icons8-skills.png";


type NavPropsType = {
    showNav: (show: boolean) => void
    isShow: boolean
}
export const Nav: React.FC<NavPropsType> = ({showNav, isShow}) => {
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


    const homeIcon = {
        backgroundImage: 'url(' + homeImage + ')',
        backgroundSize: 'contain',
        backgroundPosition: 'center'
    }
    const myProjectsIcon = {
        backgroundImage: 'url(' + projectsImage + ')',
        backgroundSize: 'contain',
        backgroundPosition: 'center'
    }
    const aboutMeIcon = {
        backgroundImage: 'url(' + aboutMeImage + ')',
        backgroundSize: 'contain',
        backgroundPosition: 'center'
    }
    // const skillIcon={
    //     backgroundImage: 'url(' +skillImage + ')',
    //     backgroundSize: 'contain',
    //     backgroundPosition: 'center'
    // }
    const contactsIcon = {
        backgroundImage: 'url(' + contactImage + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    const showNavHandler = () => {
        showNav(false)

    }
    const showNavigate = isShow ? s.nav : `${s.nav} ${s.noViewNav}`



    return (<>

        {windowSize <= 1060 ?
            <div className={showNavigate}>

                <NavLink className={s.navItem} to={routes.aboutMe} onClick={showNavHandler}>
                    <span className={s.navIcon} style={aboutMeIcon}></span>
                    <span className={s.navItemTitle}>About me</span>
                </NavLink>
                <NavLink className={s.navItem} to={routes.myProjects} onClick={showNavHandler}>
                    <span className={s.navIcon} style={myProjectsIcon}></span>
                    <span className={s.navItemTitle}>my projects</span>
                </NavLink>
                <NavLink className={s.navItem} to={routes.contact} onClick={showNavHandler}>
                    <span className={s.navIcon} style={contactsIcon}></span>
                    <span className={s.navItemTitle}>Contacts</span>
                </NavLink>

            </div>
            : <div className={showNavigate}>
                <NavLink className={s.navItem} to={routes.home} onClick={showNavHandler}>
                    <span className={s.navIcon} style={homeIcon}></span>
                    <span className={s.navItemTitle}> Home</span>
                </NavLink>
                <NavLink className={s.navItem} to={routes.aboutMe} onClick={showNavHandler}>
                    <span className={s.navIcon} style={aboutMeIcon}></span>
                    <span className={s.navItemTitle}>About me</span>
                </NavLink>
                <NavLink className={s.navItem} to={routes.myProjects} onClick={showNavHandler}>
                    <span className={s.navIcon} style={myProjectsIcon}></span>
                    <span className={s.navItemTitle}>my projects</span>
                </NavLink>
                <NavLink className={s.navItem} to={routes.contact} onClick={showNavHandler}>
                    <span className={s.navIcon} style={contactsIcon}></span>
                    <span className={s.navItemTitle}>Contacts</span>
                </NavLink>
            </div>
}
        </>
)
    ;
};

