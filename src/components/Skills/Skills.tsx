import React from 'react';
import s from './Skills.module.css'
import styleContainer from './../../common/styles/Container.module.css'
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={styleContainer.container+' '+s.skillsContainer}>
                <h2 className={s.title}>Skill</h2>
                <div className={s.skills}>
                    <Skill title={'React'} description={'bla fdsf saf s fsdf sdfsdf sf dsfsdf sfsdf sfdsadfs sf'}/>
                    <Skill title={'JS'} description={' asfdf asdfasdf sadf as '}/>
                    <Skill title={'CSS'} description={' sfdsf asfdf asdfasdf sadf as'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;