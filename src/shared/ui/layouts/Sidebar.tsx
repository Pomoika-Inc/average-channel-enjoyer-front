import * as Dialog from '@radix-ui/react-dialog';
import React, {ReactNode, useState} from 'react';
import css from "./Sidebar.module.css";
import SidebarIcon from "@/shared/ui/icons/SidebarIcon";
import {UserRole} from "@/entities/user/model/userTypes";
import {Link, Navigate} from "react-router-dom";

interface SidebarProps {
    children?: ReactNode,
}

const userRole: UserRole = UserRole.USER;


const Sidebar: React.FC<SidebarProps> = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            setIsOpen(false);
        }, 200);
    };

    const handleDialogChange = (open: boolean) => {
        if (!open) handleClose();
    };

    return (
        <Dialog.Root open={isOpen} onOpenChange={handleDialogChange}>
            <Dialog.Trigger asChild>
                <button className="button" onClick={handleOpen}><SidebarIcon/></button>
            </Dialog.Trigger>
            <Dialog.Overlay className={css.dialogOverlay}/>

            {isOpen && (
                <Dialog.Content className={`${css.dialogContent} ${isClosing ? css.closing : ''}`}>

                    {userRole === UserRole.USER && (
                        <div className="flex flex-col align-items-center h-full">
                            <div className="flex justify-between">
                                <span>User name</span>
                                <Dialog.Close className={`${css.closeButton}`} onClick={handleClose}>✕</Dialog.Close>
                            </div>
                            <div className="flex flex-col justify-center text-center gap-7 mt-24 text-xl">
                                <Link to="/login">Channels</Link>
                                <Link to="/login">Orders</Link>
                                <Link to="/login">hz cheto</Link>
                            </div>
                        </div>
                    )}

                    {userRole === UserRole.ADMIN && (
                        <div>
                            {/*<Link to="/about">Go to About</Link>*/}
                        </div>
                    )}

                    {userRole === UserRole.ENJOYER && (
                        <div>
                            admin side bar
                        </div>
                    )}

                </Dialog.Content>
            )}
        </Dialog.Root>
    );
};

export default Sidebar;
