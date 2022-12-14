import React, {FC} from 'react';
import s from './Button.module.css'
type ButtonType={
    name:string
}

export const Button:FC<ButtonType> = ({name}) => {
    return (
        <button disabled={false} className={s.button}>{name}</button>
    );
};
