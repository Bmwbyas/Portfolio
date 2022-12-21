import React, {LegacyRef, useState} from 'react';
import s from './HamburgerMenu.module.scss'
import {Nav} from "../Nav/Nav";

export const HamburgerMenu = () => {
    const [showMenu, setShowMenu] = useState(true)
    const root:LegacyRef<HTMLDivElement> | undefined|null  = React.useRef(null);

    React.useEffect(() => {
        const onClick = (e:any) =>{
            if(root.current)root.current.contains(e.target) || setShowMenu(false)

        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);

    const firstLine = `${s.burgerLine} ${s.burgerLineFirst} ${showMenu && `${s.burgerLineFirstActive}`}`
    const secondLine = `${s.burgerLine} ${s.burgerLineSecond} ${showMenu && `${s.burgerLineSecondActive}`}`
    const thirdLine = `${s.burgerLine} ${s.burgerLineThird} ${showMenu && `${s.burgerLineThirdActive}`}`
    const forthLine = `${s.burgerLine} ${s.burgerLineFourth} ${showMenu && `${s.burgerLineFourthActive}`}`
    const backgroundActive =`${s.background} ${showMenu && `${s.background} ${s.backgroundActive}`}`
    const showMenuHandler=(e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
        if(!e.target){setShowMenu(!showMenu)}
        setShowMenu(!showMenu)
    }
    return (
        <div>
            <div className={s.burger} ref={root} onClick={showMenuHandler}>
                <span className={firstLine}></span>
                <span className={secondLine}></span>
                <span className={thirdLine}></span>
                <span className={forthLine}></span>
                <span className={backgroundActive}></span>
            </div>
            <Nav showNav={setShowMenu} isShow={showMenu}/>
        </div>


    );
};

