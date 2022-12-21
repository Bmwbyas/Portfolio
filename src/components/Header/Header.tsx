import React from 'react';
import s from './Header.module.scss'
import {HamburgerMenu} from "./HamburgerMenu/HamburgerMenu";

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.headerContainer}>
                <HamburgerMenu/>
            </div>
        </div>
    );
};

