import React from 'react';
import s from './Header.module.scss'
import {HamburgerMenu} from "./HamburgerMenu/HamburgerMenu";
type HeaderType={
    showMenu:boolean
    setShowMenu:(showMenu:boolean)=>void
}
export const Header:React.FC<HeaderType> = ({showMenu,setShowMenu}) => {
    return (
        <div className={s.header}>
            <div className={s.headerContainer}>
                <HamburgerMenu showMenu={showMenu} setShowMenu={setShowMenu} />
            </div>
        </div>
    );
};

