import React from 'react';
import s from './Contacts.module.scss'
import style from '../../common/styles/Container.module.scss'
import {Button} from "../Common/Button/Button";
import {Title} from "../../common/components/title/Title";
const Contacts = () => {
    return (
        <div className={s.contactBlock}>
            <div className={style.container+" "+s.contactContainer}>
                <Title title={'contacts'}/>
                <form className={s.form}>
                    <input className={s.input} type="text"/>
                    <input className={s.input} type="text"/>
                    <textarea className={s.textarea} name="descriptipn" id="1" ></textarea>
                </form>
                <Button name={'send'}/>
            </div>

        </div>
    );
};

export default Contacts;