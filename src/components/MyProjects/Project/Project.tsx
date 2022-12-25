import React from 'react';
import s from './Project.module.scss'


type WorKPropsType = {
    repository:string
    project:string
    nameProject: string
    description: string
    imageIcon: {
        backgroundImage: string
        backgroundSize: string
        backgroundPosition: string
    }

}
export const Project = (props: WorKPropsType) => {
    return (
        <div className={s.workContainer}>
            <div className={s.imgAndButtonContainer} style={props.imageIcon}>
                <div className={s.descriptionContainer}>
                    <h3 className={s.titleProject}>{props.nameProject}</h3>
                    <p className={s.descriptionProject}>{props.description}</p>
                    <div className={s.navContainer}>
                        <a className={s.nav} href={props.project} target="_blank">view project</a>
                        <a className={s.nav} href={props.repository} target="_blank">view repository</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

