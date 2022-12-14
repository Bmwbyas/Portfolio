import React from 'react';
import style from '../../common/styles/Container.module.scss'
import s from './MyProject.module.scss'
import {Project} from "./Project/Project";
import {Title} from "../../common/components/title/Title";
import socialImage from './../../assets/image/social_media.jpg'
import todolistImage from './../../assets/image/todolist.jpg'

export const MyProject = () => {
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
            <div className={style.container + ' ' + s.myWorkContainer}>
                <Title title={'My Project'}/>
                <div className={s.work}>
                    <Project imageIcon={social} nameProject={'Social network'}
                             description={'a dedicated website or other application which enables users to communicate with each other by posting information, comments, messages, images, etc'}/>
                    <Project imageIcon={toDoList} nameProject={'to-do list'}
                             description={`Add your tasks.Organize your life.Achieve more every day.`}/>
                </div>
            </div>
        </div>
    );
};

