import React from 'react';
import s from './Skill.module.scss'

type SkillType={
    name:string
    icon:string
}
export const Skill:React.FC<SkillType> = ({name,icon}) => {
    return (
        <div className={s.container}>
            <div><img className={s.img} src={icon} alt={name}/></div>
            <div className={s.name}> {name}</div>

        </div>
    );
};

