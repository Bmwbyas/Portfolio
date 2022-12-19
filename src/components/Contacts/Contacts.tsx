import React from 'react';
import s from './Contacts.module.scss'
import {Button} from "../../common/components/Button/Button";
import {Title} from "../../common/components/title/Title";
import {TitleDesc} from "../../common/components/TitleDesc/TitleDesc";


export const Contacts = () => {


    return (
        <div className={s.contactBlock}>
            <div className={s.contactContainer}>
                <Title title={'Get in'} span={'touch'}/>
                <TitleDesc text={`I’M ALWAYS OPEN TO DISCUSSING WORK OR PARTNERSHIPS.`}/>
                <div className={s.container}>

                        <ul className={s.myContact}>
                            <li>
                                <div>Phone</div>
                                <div><span className={s.icon}></span> +375296893021</div>
                            </li>
                            <li>
                                <div>Email</div>
                                <div><span className={s.icon}></span> askerko50@gmail.com</div>
                            </li>
                            <li>
                                <div>Github</div>
                                <div><span className={s.icon}></span>Bmwbyas</div>
                            </li>
                            <li>
                                <div>Phone</div>
                                <div><span className={s.icon}></span> +375 29 689 30 21</div>
                            </li>
                        </ul>


                    <div className={s.formContainer}>

                        <div>
                            If you have any suggestion, project or even you want to say
                            Hello.. please fill out the form below and I will reply you shortly.
                        </div>
                        <form
                            action="https://public.herotofu.com/v1/2f662b40-7f8b-11ed-b38f-a1ed22f366b1"
                            method="post"
                            className={s.form}
                        >
                            <input name="Name" id="name" placeholder="Your name" required/>
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

