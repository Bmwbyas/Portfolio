import React from 'react';
import style from './../../common/styles/Container.module.css'
import s from './MyWorks.module.css'
import Work from "./Work/Work";

export const MyWorks = () => {
    return (
        <div className={s.myWorksBlock}>
            <div className={style.container+' '+s.myWorkContainer}>
                <h2>My Project</h2>
                <div className={s.work}>
                    <Work/>
                    <Work/>
                </div>
            </div>
        </div>
    );
};

