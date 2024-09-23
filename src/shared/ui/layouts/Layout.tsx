import React, {ReactNode} from 'react';
import css from './Header.module.scss'
import Sidebar from "@/shared/ui/layouts/Sidebar";
import combine from "classnames";

interface LayoutProps {
    headerContent: ReactNode,
    sidebarContent?: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ headerContent, sidebarContent }) => {
    return (
        <>
            <header className={combine(css.header, "p-4 text-white")}>
                <Sidebar/>
                {headerContent}
            </header>
        </>
    );
};

export default Layout;
