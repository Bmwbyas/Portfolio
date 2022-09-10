import React from 'react';

import Nav from "../Nav/Nav";
import style from './../../common/styles/Container.module.css'
import s from './Header.module.css'
//вопрос почему не перезаписывает стили у header
const Header = () => {
    return (
        <div className={s.header}>
            <div className={style.container+' '+s.headerContainer}>
                <Nav/>
            </div>
        </div>
    );
};

export default Header;