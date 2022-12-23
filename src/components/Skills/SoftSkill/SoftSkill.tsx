import React from 'react';
import s from './SoftSkill.module.scss'

type SoftSkillType={
    skill:string
    description:string
}
export const SoftSkill:React.FC<SoftSkillType> = ({skill,description}) => {
    return (
        <div className={s.container}>
           <span className={s.skill}>{skill}</span>
           <p  className={s.description}>{description}</p>
        </div>
    );
};

