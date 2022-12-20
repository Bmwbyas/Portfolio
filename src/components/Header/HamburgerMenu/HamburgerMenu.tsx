import React, {useState} from 'react';
import s from './HamburgerMenu.module.scss'
import {Nav} from "../Nav/Nav";

export const HamburgerMenu = () => {
    const [showMenu, setShowMenu] = useState(false)


    const firstLine = `${s.burgerLine} ${s.burgerLineFirst} ${showMenu && `${s.burgerLineFirstActive}`}`
    const secondLine = `${s.burgerLine} ${s.burgerLineSecond} ${showMenu && `${s.burgerLineSecondActive}`}`
    const thirdLine = `${s.burgerLine} ${s.burgerLineThird} ${showMenu && `${s.burgerLineThirdActive}`}`
    const forthLine = `${s.burgerLine} ${s.burgerLineFourth} ${showMenu && `${s.burgerLineFourthActive}`}`
    return (
<div>
            <div className={s.burger}>
                <span className={firstLine}></span>
                <span className={secondLine}></span>
                <span className={thirdLine}></span>
                <span className={forthLine}></span>
            </div>
   <Nav/>
</div>



    );
};

