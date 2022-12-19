import React from 'react';
import s from './TitleDesc.module.scss'

type TitleDescType={
    text:string
}
export const TitleDesc:React.FC<TitleDescType> = ({text}) => {
    return (
        <div><h2 className={s.textContainer}><span>{text}</span></h2></div>
    );
};

