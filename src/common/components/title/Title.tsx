import React from 'react';
import s from './Title.module.scss'
type TitlePropsType={
    title:string
    span?:string
}

export const Title = (props:TitlePropsType) => {
    return (
                <div className={s.title}>
                    <h2>{props.title}<span>{props.span}</span></h2>
                </div>
    );
};

