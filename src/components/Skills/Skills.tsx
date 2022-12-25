import React from 'react';
import s from './Skills.module.scss'
import {skillData} from "../AboutMe/Skill/skillData";
import {Fade} from "react-awesome-reveal";
import {Skill} from "../AboutMe/Skill/Skill";

// type SoftSkillDataType = {
//     skill: string
//     description: string
// }
export const Skills = () => {
    // const softSkills: SoftSkillDataType[] =
    //     [
    //         {
    //             skill: 'communication ',
    //             description: `Sect for frontend and backend developers.
    //         This is the place where I realized that I like the frontend.`
    //         },
    //         {
    //             skill: 'teamwork',
    //             description: `Sect for frontend and backend developers.
    //         This is the place where I realized that I like the frontend.`
    //         },
    //         {
    //             skill: 'problem-solving',
    //             description: `Sect for frontend and backend developers.
    //         This is the place where I realized that I like the frontend.`
    //         },
    //         {
    //             skill: 'Self-learning',
    //             description: `Sect for frontend and backend developers.
    //         This is the place where I realized that I like the frontend.`
    //         },
    //         {
    //             skill: 'Emotional intelligence',
    //             description: `Sect for frontend and backend developers.
    //         This is the place where I realized that I like the frontend.`
    //         },
    //         {
    //             skill: 'Open-Mindedness',
    //             description: `Sect for frontend and backend developers.
    //         This is the place where I realized that I like the frontend.`
    //         },
    //         {
    //             skill: 'Accountability',
    //             description: `Sect for frontend and backend developers.
    //         This is the place where I realized that I like the frontend.`
    //         },
    //         {
    //             skill: 'Adaptability',
    //             description: `Sect for frontend and backend developers.
    //         This is the place where I realized that I like the frontend.`
    //         },
    //     ]

    return (
                <Fade direction={"left"}>
                    <div className={s.skills}>
                        <h2> skills</h2>
                        <div className={s.skillsData}>
                            {skillData.map(s => <Skill key={s.name} name={s.name} icon={s.icon}/>)}
                        </div>
                    </div>
                </Fade>
    );
};

