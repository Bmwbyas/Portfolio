import React from 'react';
import s from './Footer.module.css'
import style from './../../common/styles/Container.module.css'

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={style.container+' '+s.footerContainer}>
                <h2>Askerko Alexandr</h2>
                <div className={s.blocks}>
                    <div className={s.block}>1</div>
                    <div className={s.block}>2</div>
                    <div className={s.block}>3</div>
                    <div className={s.block}>4</div>
                </div>
            </div>

        </div>
    );
};

export default Footer;