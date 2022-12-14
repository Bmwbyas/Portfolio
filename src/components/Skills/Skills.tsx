import React from 'react';
import s from './Skills.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'
import Skill from "./Skill/Skill";
import {Title} from "../../common/components/title/Title";

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={styleContainer.container+' '+s.skillsContainer}>
                <Title title={'skills'}/>
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