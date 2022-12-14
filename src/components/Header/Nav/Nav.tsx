import React from 'react';
import s from './Nav.module.scss'
import {NavLink} from "react-router-dom";
import {routes} from "../../../Routes/routes";

export const Nav = () => {
    return (
        <div className={s.nav}>

            <NavLink className={s.navItem} to={routes.home}>
                <span className={s.navItemTitle}> Home</span></NavLink>
            <NavLink className={s.navItem} to={routes.aboutMe}>
                <span className={s.navItemTitle}>About me</span></NavLink>
            <NavLink className={s.navItem} to={routes.skills}>
                <span className={s.navItemTitle}>Skills</span></NavLink>
            <NavLink className={s.navItem} to={routes.myProjects}>
                <span className={s.navItemTitle}>Project</span></NavLink>
            <NavLink className={s.navItem} to={routes.contact}>
                <span className={s.navItemTitle}>Contacts</span></NavLink>
        </div>
    );
};

