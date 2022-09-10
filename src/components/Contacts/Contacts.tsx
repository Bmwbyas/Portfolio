import React from 'react';
import s from './Contacts.module.css'
import style from './../../common/styles/Container.module.css'
import {Button} from "../Button/Button";
const Contacts = () => {
    return (
        <div className={s.contactBlock}>
            <div className={style.container+" "+s.contactContainer}>
                <h2>Contacts</h2>
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