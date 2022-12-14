import React from 'react';
import s from './Footer.module.scss'
import style from '../../common/styles/Container.module.scss'
import {Title} from "../../common/components/title/Title";

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={style.container+' '+s.footerContainer}>
                <Title title={'Askerko Alexandr'}/>
                <div className={s.blocks}>
                    <div className={s.block}>viber</div>
                    <div className={s.block}>instagram</div>
                    <div className={s.block}>linkedin</div>
                </div>
            </div>

        </div>
    );
};

export default Footer;