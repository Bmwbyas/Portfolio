import React from 'react';
import s from './MyProject.module.scss'
import {Project} from "./Project/Project";
import {Title} from "../../common/components/title/Title";
import socialImage from './../../assets/image/social_media.jpg'
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
                <TitleDesc text={'here are some of my projects.'}/>
                <div className={s.work}>
                    <Project imageIcon={social} nameProject={'Social network'}
                             description={'Application which enables users to communicate with each other by posting information, comments, messages, images, etc'}/>
                    <Project imageIcon={toDoList} nameProject={'to-do list'}
                             description={`Add your tasks.Organize your life.Achieve more every day.`}/>
                    <Project imageIcon={educationCards} nameProject={'Educational cards'}
                             description={`An application that allows you to learn from flashcards that are created by the user himself or by another user`}/>
                </div>
            </div>
        </div>
    );
};

