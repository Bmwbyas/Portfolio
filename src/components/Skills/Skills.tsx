import React from 'react';
import s from './Skills.module.scss'

import {Title} from "../../common/components/title/Title";
import {skillData} from "./Skill/skillData";
import {Fade} from "react-awesome-reveal";
import {Skill} from "./Skill/Skill";


export const Skills = () => {
    return (

            <div className={s.skillsContainer}>
                <Title title={'skills'}/>
                <Fade direction={"left"}>
                    <div className={s.skillsSection}>
                        <h2>Technical skills</h2>
                        <div className={s.skillsContainer}>
                            {skillData.map(s => <Skill key={s.name} name={s.name} icon={s.icon}/>)}
                        </div>
                    </div>
                </Fade>
            </div>

    );
};

