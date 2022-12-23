import React from 'react';
import s from './Skills.module.scss'

import {Title} from "../../common/components/title/Title";
import {skillData} from "./Skill/skillData";
import {Fade} from "react-awesome-reveal";
import {Skill} from "./Skill/Skill";
import {SoftSkill} from "./SoftSkill/SoftSkill";

type SoftSkillDataType = {
    skill: string
    description: string
}
export const Skills = () => {
    const softSkills: SoftSkillDataType[] =
        [
            {
                skill: '06.2022-PRESENT',
                description: `Sect for frontend and backend developers.
            This is the place where I realized that I like the frontend.`
            },
            {
                skill: '06.2022-PRESENT',
                description: `Sect for frontend and backend developers.
            This is the place where I realized that I like the frontend.`
            },

        ]

    return (

        <div className={s.skillsWrapper}>
            <Title title={'skills'}/>
            <div className={s.skillsContainer}>
                <Fade direction={"left"}>
                    <div className={s.skills}>
                        <h2>Technical skills</h2>
                        <div className={s.skillsData}>
                            {skillData.map(s => <Skill key={s.name} name={s.name} icon={s.icon}/>)}
                        </div>
                    </div>
                    <div className={s.skills}>
                        <h2>soft skills</h2>
                        <div>
                            {softSkills.map(s => {
                                return <SoftSkill skill={s.skill} description={s.description}/>
                            })
                            }
                        </div>
                    </div>
                </Fade>
            </div>
        </div>

    );
};

