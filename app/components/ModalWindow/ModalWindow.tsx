import React, { useState } from 'react';
import classes from './ModalWindow.module.css';
import clsx from 'clsx';

type IProps = {
    title: React.ReactNode
    text: React.ReactNode
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalWindow = ({ title, text, isOpen, setIsOpen }: IProps) => {
  

  return (
    <div className={clsx(classes.blackout, isOpen && classes.open)} onClick={() => setIsOpen(false)}>
      <div className={clsx(classes.modal, isOpen && classes.open)} onClick={(e) => e.stopPropagation()}>
        <div className={classes.header}>
          <h2 className={classes.title}>{title}</h2>
          <button className={classes.close_button} onClick={() => setIsOpen(false)}><span>&#10006;</span></button>
        </div>
      <p className={classes.text}>{text}</p>
      </div>
    </div>
  )
}
