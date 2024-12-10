'use client'

import classes from './page.module.css'
import { ModalWindow } from "./components/ModalWindow/ModalWindow";
import { modal_data } from '@/app/data/modal_data';
import { useState } from 'react';
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className={classes.modal_open_button} onClick={() => setIsOpen(true)}>Открыть модальное окно</button>
      <ModalWindow title={modal_data[0].title} text={modal_data[0].text} isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  );
}
