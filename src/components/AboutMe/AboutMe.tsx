import React from 'react';
import s from './AboutMe.module.scss'
import myPhoto from "../../assets/image/myPhoto.jpg";
import {Button} from "../../common/components/Button/Button";

export const AboutMe = () => {
    const myAvatar = {
        backgroundImage: 'url(' + myPhoto + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
    return (
        <div className={s.mainBlock}>
            <h1>About<span> me</span></h1>
            <h2><span>I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.</span></h2>
            <div className={s.mainContainer}>
                <div className={s.photo} style={myAvatar}>
                </div>
                <div className={s.intro}>
                    <div>
                        <ul className={s.personalInfo}>
                            <li><span>First Name </span> Alexandr</li>
                            <li><span>Last Name </span> Askerko</li>
                            <li><span>Birthdate </span>26 october 1991</li>
                            <li><span>Nationality </span>Belarus</li>
                            <li><span>Experience </span>1 years</li>
                        </ul>
                    </div>
                    <div>
                        <ul className={s.personalInfo}>
                            <li><span> Langages </span>Russian, English</li>
                            <li><span>Phone </span>+375 29 689 30 21</li>
                            <li><span> Email </span>askerko50@gmail.com</li>
                            <li><span>Address </span>Borisov</li>
                            <li><span>Possibility of remote work</span> Yes</li>
                        </ul>
                    </div>
                    <div className={s.containerCV}><Button name={'download my cv'}></Button></div>
                </div>

            </div>
            <hr className={s.aboutHr}/>
            <div className={s.mainContainer}>
                <div >
                    <h2 className={s.titleExpEd}>Experience</h2>

                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

