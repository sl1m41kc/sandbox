import React, { useState, useRef, useEffect } from 'react'
import { accordion_data } from '@/app/data/accordion_data'
import classes from './AccordionItem.module.css'
import clsx from 'clsx';
import { title } from 'process';

interface IProps {title: React.ReactNode, text: React.ReactNode}

export const AccordionItem = ({ title, text }: IProps) => {
    const [ open, setOpen ] = useState(false)

    return (
        <li className={classes.item} onClick={() => setOpen(!open)}>
            <button className={clsx(classes.title, open && classes.active)}>
                {title}
                <span className={classes.title_icon}>+</span>
            </button>
            <div className={clsx(classes.text, open && classes.open)}>
                <div className={classes.content_wrapper} >
                    <div className={classes.content}>
                        <p style={{cursor: 'auto'}} onClick={(event) => {event.stopPropagation()}}>
                            {text}
                        </p>
                    </div>
                </div>
            </div>
        </li>
  )
}
