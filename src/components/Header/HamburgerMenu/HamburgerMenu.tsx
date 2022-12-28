import React, {LegacyRef} from 'react';
import s from './HamburgerMenu.module.scss'
import {Nav} from "../Nav/Nav";
type HamburgerMenuType={
    showMenu:boolean
    setShowMenu:(showMenu:boolean)=>void
}
export const HamburgerMenu:React.FC<HamburgerMenuType> = ({showMenu,setShowMenu}) => {

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
    const showBurger=showMenu?s.burger+' '+s.vievBurger:s.burger
    return (
        <div >
            <div className={showBurger} ref={root} onClick={showMenuHandler}>
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

