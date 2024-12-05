'use client'

import React, { useState } from 'react'
import classes from './Accordion.module.css'
import { AccordionItem } from './AccordionItems/AccordionItem';
import { accordion_data } from '@/app/data/accordion_data';


export const Accordion = () => {
    return (
        <ul className={classes.accordion}>
            {
                accordion_data.map((item, index) => {
                    return(
                        <AccordionItem title={item.title} text={item.text} key={index}/>
                    );
                })
            }
        </ul>
    );
};
