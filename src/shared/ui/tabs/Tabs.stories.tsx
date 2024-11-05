import React from 'react';
import { Tabs, Tab } from './Tabs';


export default {
    title: 'Components/Tabs',
    component: Tabs,
} as const;

const tabsData: Tab[] = [
    {
        id: 'tab1',
        title: 'Tab 1',
        content: <div className="p-5 bg-cyan-800 rounded-2xl text-2xl text-cyan-400">Content for Tab 1</div>,
    },
    {
        id: 'tab2',
        title: 'Tab 2',
        content:
            <div className="flex flex-col items-center gap-2">
                <button className="bg-amber-400 text-amber-50 p-3">Vse</button>
                <button className="bg-green-300 text-gray-600 p-5">Nicho</button>
            </div>,
    },
    {
        id: 'tab3',
        title: 'Tab 3',
        content: <div>Content for Tab 3</div>,
    },
];

export const TabComponent = () => <Tabs tabs={tabsData} />;
