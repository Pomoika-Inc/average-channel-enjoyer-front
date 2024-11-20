import React, {ReactNode} from 'react';
import * as TabsRadix from '@radix-ui/react-tabs';
import styles from './styles.module.scss';
import combine from "classnames";

export type Tab = {
    id: string,
    title: string,
    content: ReactNode
}

interface TabsProps {
    tabs: Tab[]
}

export const Tabs: React.FC<TabsProps> = ({tabs}) => (
    <TabsRadix.Root className={combine(styles.Root)} defaultValue={tabs[0].id}>
        <TabsRadix.List className={combine(styles.List, "bg-pink-500")}>
            {tabs.map(tab => (
                <TabsRadix.Trigger className={combine(styles.Trigger, "bg-pink-500")} value={tab.id} key={tab.id}>
                    {tab.title}
                </TabsRadix.Trigger>
            ))}
        </TabsRadix.List>

        {tabs.map(tab => (
            <TabsRadix.Content className={styles.Content} value={tab.id} key={tab.id}>
                {tab.content}
            </TabsRadix.Content>
        ))}
    </TabsRadix.Root>
)