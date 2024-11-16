import * as Dialog from '@radix-ui/react-dialog';
import React, {ReactNode, useState} from 'react';
import css from "./Sidebar.module.scss";
import SidebarIcon from "@/shared/ui/icons/SidebarIcon";
import {UserRole} from "@/entities/user/model/userTypes";
import {Link} from "react-router-dom";
import {RootState} from "@/app/appStore";
import {useSelector} from "react-redux";
import Accordion from "@/shared/ui/accordions/Accordion";
import combine from "classnames";

interface SidebarProps {
    children?: ReactNode,
}

const userRole: UserRole = UserRole.ADMIN;


const Sidebar: React.FC<SidebarProps> = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const user = useSelector((state: RootState) => state.user.currentUser);

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
                    <div className="flex flex-col align-items-center">
                        <Dialog.Title></Dialog.Title>
                        <div className="flex justify-between">
                            <span>{user && user.name}</span>
                            <Dialog.Close className={`${css.closeButton}`} onClick={handleClose}>✕</Dialog.Close>
                        </div>
                        <div className="flex flex-col justify-center text-center gap-5 mt-24 text-xl">
                            <Link to="/channels">Channels</Link>
                            <Link to="/orders">Orders</Link>
                        </div>
                    </div>


                    {/*{userRole === UserRole.ADMIN && (*/}
                    <Accordion parentClassName="mt-6" isWithArrow
                               triggerContent={<span className={combine(css.subLinks, 'text-xl')}>Administration</span>}
                               accordionContent={
                                   <div className="flex flex-col justify-center text-center gap-5 text-xl">
                                       <Link to="/administration/products">Products</Link>
                                       <Link to="/administration/orders">Orders</Link>

                                       {/*<Link to="/login">Orders</Link>*/}
                                   </div>
                               }
                    />
                    {/*)}*/}

                    {/*{userRole === UserRole.ENJOYER && (*/}
                    <Accordion parentClassName="mt-6"
                               triggerContent={<span className={combine(css.subLinks, 'text-xl')}>Management</span>}
                               accordionContent={
                                   <div className="flex flex-col justify-center text-center gap-5 text-xl">
                                       <Link to="/management/channels">Channels</Link>
                                   </div>
                               }
                    />
                    {/*)}*/}

                    <div className="flex flex-col w-full text-center gap-3 mt-5 text-xl">
                        <Link to="/fqa">FAQ</Link>
                    </div>

                </Dialog.Content>
            )}
        </Dialog.Root>
    );
};

export default Sidebar;
