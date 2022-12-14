import React from 'react';
import s from './AboutMe.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'
import myPhoto from "../../assets/image/myPhoto.jpg";

export const Home = () => {
    const myAvatar = {
        backgroundImage: 'url(' + myPhoto + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container+' '+s.mainContainer}>
                <div className={s.intro}>
                    <span>Hi there</span>
                    <h1>I'm Askerko Alexandr</h1>
                    <p>A FrontEnd developer</p>
                </div>
                <div className={s.photo} style={myAvatar}></div>
            </div>
        </div>
    );
};

