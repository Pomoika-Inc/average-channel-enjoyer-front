import React, {ReactNode} from 'react';
import css from './Header.module.css'
import Sidebar from "@/shared/ui/layouts/Sidebar";

interface HeaderTemplateProps {
    children: ReactNode
}

const HeaderTemplate: React.FC<HeaderTemplateProps> = ({ children }) => {
    return (
        <header className={`${css.header} p-4 text-white`}>
            <Sidebar/>
            {children}
        </header>
    );
};

export default HeaderTemplate;
