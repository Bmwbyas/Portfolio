import React from 'react';
import s from './AboutMe.module.scss'
import myPhoto from "../../assets/image/myPhoto.jpg";
import {Button} from "../../common/components/Button/Button";
import {Card} from "./Card/Card";

import {skillData} from "./Skill/skillData";
import {Skill} from "./Skill/Skill";
import {TitleDesc} from "../../common/components/TitleDesc/TitleDesc";
import {Title} from "../../common/components/title/Title";
import {Fade} from "react-awesome-reveal";

export type ExpEdDataType = {
    years: string
    place: string
    description: string
}

export const AboutMe = () => {
    const myAvatar = {
        backgroundImage: 'url(' + myPhoto + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
    const educationData: ExpEdDataType[] = [
        {
            years: '06.2022-PRESENT',
            place: 'frontend developer-IT-INCUBATOR',
            description: `Sect for frontend and backend developers.
            This is the place where I realized that I like the frontend.`
        },
        {
            years: '01.2022-06.2022',
            place: 'frontend developer-self-study',
            description: ` I learned the basics of HTML CSS JavaScript.`
        },
        {
            years: '12.2021',
            place: 'IT-ACADEMY - basics computer science',
            description: `Here I got knowledge about how a computer works and how it works. Also got acquainted with the Python programming language. 
            Gained skills in solving algorithmic problems, got acquainted with data types, etc.`
        },
        {
            years: '2009-2014',
            place: 'BSTU - woodworking mechanical engineer',
            description: `I Studied the design of woodworking tools and equipment, microprocessor control systems for woodworking machines.
            Gained skills in designing and repairing woodworking equipment.`
        }
    ]
    const expirienseData: ExpEdDataType[] = [
        {
            years: '09.2022-12.2022',
            place: 'IT-INCUBATOR - EDUCATIONAL CARDS',
            description: `This a web-based tool that allows users to create study cards. User can learn from his or someone else's cards.`
        },
        {
            years: '05.2022-09.2022',
            place: 'IT-INCUBATOR - TO DO LIST',
            description: ` It’s a list of tasks you need to complete or things that you want to do.
                                You can use a to do list in your home and personal life, or in the workplace.`
        },
        {
            years: '01.2022-05.2022',
            place: 'IT-INCUBATOR - SOCIAL NETWORK',
            description: `Social network that makes it easy for you to connect with friends online.`
        },
        {
            years: '08.2014-PRESENT',
            place: 'JSC "Borisovskiy DOK" - Deputy head of department for technical issues',
            description: `My main task is to ensure the smooth operation of woodworking equipment. My team consists of 14 people.`
        }

    ]
    return (
        <div className={s.mainBlock}>
            <Fade direction={"down"}>
                <Title title={'About'} span={'me'}/>
                <TitleDesc text={'I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.'}/>
            </Fade>
            <div className={s.mainContainer}>

                <Fade direction={"left"}>
                    <div   className={s.photoContainer}>
                        <div className={s.photo} style={myAvatar} ></div>
                    </div>
                </Fade>
                <Fade direction={"right"}>
                    <div className={s.intro}>
                        <ul className={s.personalInfo}>
                            <li><span>First Name </span> Alexandr</li>
                            <li><span>Last Name </span> Askerko</li>
                            <li><span>Birthdate </span>26 october 1991</li>
                            <li><span>Nationality </span>Belarus</li>
                            <li><span>Experience </span>1 years</li>
                        </ul>
                        <ul className={s.personalInfo}>
                            <li><span> Langages </span>Russian, English</li>
                            <li><span>Phone </span>+375 29 689 30 21</li>
                            <li><span> Email </span>askerko50@gmail.com</li>
                            <li><span>Address </span>Borisov</li>
                            <li><span>Possibility of remote work</span> Yes</li>
                        </ul>
                        <div className={s.containerCV}><Button name={'download my cv'}></Button></div>
                    </div>
                </Fade>
            </div>
            <hr className={s.aboutHr}/>
            <Fade>
                <div className={s.expEdContainer}>
                    <Card title={'expirience'} cardsData={expirienseData}/>
                    <Card title={'education'} cardsData={educationData}/>
                </div>
            </Fade>
            <Fade direction={"left"}>
                <div className={s.skillsSection}>
                    <h2>Skills</h2>
                    <div className={s.skillsContainer}>
                        {skillData.map(s => <Skill key={s.name} name={s.name} icon={s.icon}/>)}
                    </div>
                </div>
            </Fade>
        </div>
    )
        ;
};

