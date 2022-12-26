import React from 'react';
import s from './MyProject.module.scss'
import {Project} from "./Project/Project";
import {Title} from "../../common/components/title/Title";
import socialImage from './../../assets/image/socialMedia.jpg'
import todolistImage from './../../assets/image/todolist.jpg'
import cardImage from './../../assets/image/educationCard.png'
import {TitleDesc} from "../../common/components/TitleDesc/TitleDesc";

export const MyProject = () => {
    const educationCards={
        backgroundImage: 'url(' + cardImage + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    const social = {
        backgroundImage: 'url(' + socialImage + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
    const toDoList = {
        backgroundImage: 'url(' + todolistImage + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
    return (
        <div className={s.myWorksBlock}>
            <div className={s.myWorkContainer}>
                <Title title={'My '} span={'Project'}/>
                <TitleDesc text={'here are some of my projects'}/>
                <div className={s.work}>
                    <Project project={'https://bmwbyas.github.io/samurai-way-main/'}
                             repository={'https://github.com/Bmwbyas/samurai-way-main'}
                             imageIcon={social} nameProject={'Social network'}
                             description={'Application which enables users to communicate with each other by posting information, comments, messages, images, etc. React / Redux /  React Hook Form / ANTD / Yup '}/>
                    <Project   imageIcon={toDoList} nameProject={'to-do list'}
                               project={'https://bmwbyas.github.io/todolist-project/'}
                               repository={'https://github.com/Bmwbyas/todolist-project'}
                             description={`Add your tasks.Organize your life.Achieve more every day. React / Redux-toolkit / Typescript / Git / MIU / RESTAPI / Formik `}/>
                    <Project imageIcon={educationCards} nameProject={'Educational cards'}
                             project={'https://nazaruk-d.github.io/EducationCards/'}
                             repository={'https://github.com/Nazaruk-D/EducationCards'}
                             description={` An application that allows you to learn from flashcards. Project developed in a team. React / Redux / Typescript / Git / Jira / MIU / RESTAPI / Formik`}/>
                </div>
            </div>
        </div>
    );
};

