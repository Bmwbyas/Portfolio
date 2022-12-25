import React from 'react';
import s from './Contacts.module.scss'
import {Button} from "../../common/components/Button/Button";
import {Title} from "../../common/components/title/Title";
import {TitleDesc} from "../../common/components/TitleDesc/TitleDesc";
import {myContactsIcon} from "./myContacts";


export const Contacts = () => {


    return (
        <div className={s.contactBlock}>
            <div className={s.contactContainer}>
                <Title title={'Get in'} span={'touch'}/>
                <TitleDesc text={`I’M ALWAYS OPEN TO DISCUSSING WORK OR PARTNERSHIPS`}/>
                <div className={s.container}>
                    <ul className={s.myContact}>
                        <li>
                            <div className={s.text}>Phone</div>
                            <div className={s.imgValueCotainer}>
                                <img className={s.icon} src={myContactsIcon.phone}
                                     alt=""/>
                                +375296893021
                            </div>
                        </li>
                        <li>
                            <div className={s.text}>Email</div>
                            <div className={s.imgValueCotainer}><img className={s.icon} src={myContactsIcon.email}
                                                                     alt=""/>
                                askerko50@gmail.com
                            </div>
                        </li>
                        <li>
                            <div className={s.text}>Github</div>
                            <div className={s.imgValueCotainer}><img className={s.icon} src={myContactsIcon.github}
                                                                     alt=""/>
                                Bmwbyas
                            </div>
                        </li>
                        <li>
                            <div className={s.text}>Telegram</div>
                            <div className={s.imgValueCotainer}><img className={s.icon} src={myContactsIcon.telegram}
                                                                     alt=""/>
                                @askerkoSasha
                            </div>
                        </li>
                    </ul>

                    <div className={s.formContainer}>
                        <p>
                            If you have any suggestion, project or even you want to say
                            Hello.. please fill out the form below and I will reply you shortly.
                        </p>
                        <form
                            action="https://public.herotofu.com/v1/2f662b40-7f8b-11ed-b38f-a1ed22f366b1"
                            method="post"
                            className={s.form}
                        >
                            <span className={s.name}></span>
                            <input className={s.name} name="Name" id="name" placeholder="Your name" required/>
                            <input name="Email" id="email" type="email" placeholder="Your email" required/>
                            <textarea name="Message" id="message" placeholder="Your message here" required></textarea>
                            <Button type={"submit"} name={'send message'}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

