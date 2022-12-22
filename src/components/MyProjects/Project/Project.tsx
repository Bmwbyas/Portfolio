import React from 'react';
import s from './Project.module.scss'
import {Button} from "../../../common/components/Button/Button";
type WorKPropsType={
    nameProject:string
    description:string
    imageIcon:{
        backgroundImage:string
        backgroundSize:string
        backgroundPosition:string
    }

}
export const Project = (props:WorKPropsType) => {
    return (
        <div className={s.workContainer}>
            <div className={s.imgAndButtonContainer} style={props.imageIcon}>
                <div className={s.descriptionContainer}>
                    <h3 className={s.titleProject}>{props.nameProject}</h3>
                    <p className={s.descriptionProject}>{props.description}</p>
                    <Button name={'view project'}/>

                    <Button name={'view repository'}/>
                </div>

            </div>


        </div>
    );
};

