'use client'

import React, {useState} from "react";
import classes from "./Tabs.module.css";
import clsx from "clsx";
import tabs_data from '@/app/data/tabs_data';

export const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);

    interface Tab {
        title: React.ReactNode;
        content: {
            title: React.ReactNode;
            text: React.ReactNode;
        };
    }

    return (
        <div className={classes.container}>
            <ul className={classes.tabs}>
                {tabs_data.map((tab: Tab, index: number) => (
                    <li
                        key={index}
                        className={clsx(classes.tab, activeTab === index + 1 && classes.active_tab)}
                        onClick={() => setActiveTab(index + 1)}
                    >
                        {tab.title}
                    </li>
                ))}
            </ul>
            <div className={classes.content_container}>
                {tabs_data.map((tab: Tab, index: number) => (
                    <div
                        key={index}
                        className={clsx(classes.content, activeTab === index + 1 && classes.active_content)}
                    >
                        <div className={classes.content_wrapper}>
                            <h2 className={classes.title}>{tab.content.title}</h2>
                            <p className={classes.text}>{tab.content.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}