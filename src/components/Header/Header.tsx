import React from 'react';

import {Nav} from "./Nav/Nav";
import s from './Header.module.scss'
import {HamburgerMenu} from "./HamburgerMenu/HamburgerMenu";

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.headerContainer}>
                <HamburgerMenu/>
                <Nav/>
            </div>
        </div>
    );
};

