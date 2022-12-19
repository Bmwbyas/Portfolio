import React, {FC} from 'react';
import s from './Button.module.scss'
type ButtonType={
    name:string
    type?:"button" | "submit" | "reset" | undefined
}

export const Button:FC<ButtonType> = ({name,type}) => {

    return (
        <button disabled={false} type={type??"button"} className={s.button}>{name}</button>
    );
};

