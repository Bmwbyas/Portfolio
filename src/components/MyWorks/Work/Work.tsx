import React from 'react';
import s from './Work.module.css'
import {Button} from "../../Button/Button";

const Work = () => {
    return (
        <div className={s.workContainer}>
            <div className={s.imgAndButtonContainer}>
                <Button name={'view project'}/>
            </div>

            <div className={s.descriptionContainer}>
                <h3>name project</h3>
                <p>description project</p>
            </div>
        </div>
    );
};

export default Work;