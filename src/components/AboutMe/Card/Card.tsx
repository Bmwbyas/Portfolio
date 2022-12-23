import React from 'react';
import s from "./Card.module.scss";
import {ExpEdDataType} from "../AboutMe";

type CardPropsType = {
    title: string
    cardsData: ExpEdDataType[]

}

export const Card: React.FC<CardPropsType> = ({cardsData, title}) => {

    const cards = cardsData.map((c, index) => {

        return (

            <div key={index}  className={s.itemExpEd}>
                <span className={s.bullet}></span>
                <div className={s.card}>
                    <div className={s.cardHeader}>
                        <div className={s.years}>{c.years}</div>
                        <div className={s.place}> {c.place}</div>
                    </div>
                    <div className={s.cardContent}>{c.description}</div>
                </div>
            </div>

        );
    })

    return <>
        <div className={s.expirienceContainer}>
            <h2 className={s.titleExpEd}>{title}</h2>{cards} </div>
    </>
};

